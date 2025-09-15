import os
import json
import re
import traceback
import math
import random
import networkx as nx
from typing import Dict, List
from langgraph.graph import StateGraph, START, END
from node import (
    State,
    generate_comprehensive_question,
    generate_student_code,
    router,
    get_entities_in_module
)
from config import driver

def build_graph():
    graph = StateGraph(State)

    graph.add_node("generate_question", generate_comprehensive_question)
    graph.add_node("generate_code", generate_student_code)

    graph.add_edge(START, "generate_question")
    graph.add_edge("generate_question", "generate_code")

    graph.add_conditional_edges(
        "generate_code",
        router,
        {
            "generate_code": "generate_code",
            "end": END,
        }
    )

    return graph.compile()

def fetch_module_nodes_with_score(module_name: str):
    with driver.session() as session:
        result = session.run("""
        MATCH (m:Module {名称: $module_name})<-[:BELONGS_TO]-(n)
        WHERE n.info_score IS NOT NULL
        RETURN elementId(n) AS id,
               n.`名称` AS name,
               labels(n) AS labels,
               n.注释信息 AS comment,
               n.`唯一键` AS origin,
               n.功能描述 AS description,
               n.info_score AS score
        ORDER BY name
        """, module_name=module_name)

        return [
            {
                "id": r["id"],
                "name": r["name"],
                "labels": r["labels"],
                "comment": r["comment"],
                "origin": r["origin"],
                "description": r["description"],
                "score": r["score"]
            }
            for r in result
        ]

def build_nx_graph(nodes: List[Dict]):
    G = nx.DiGraph()
    for node in nodes:
        G.add_node(node["id"], name=node["name"], score=node["score"], comment=node["comment"],description=node["description"], origin=node["origin"], labels=node["labels"])
    for i in range(len(nodes)):
        for j in range(len(nodes)):
            if i != j:
                avg_score = (nodes[i]["score"] + nodes[j]["score"]) / 2
                G.add_edge(nodes[i]["id"], nodes[j]["id"], weight=avg_score)
    return G

class MCTSNode:
    def __init__(self, node_id, parent=None):
        self.node_id = node_id
        self.parent = parent
        self.children: List['MCTSNode'] = []
        self.visits = 0
        self.value = 0.0

def ucb1(node: MCTSNode, total_simulations: int, c=1.4):
    if node.visits == 0:
        return float('inf')
    return node.value / node.visits + c * (math.sqrt(math.log(total_simulations) / node.visits))

def mcts_search(G: nx.DiGraph, start_node_id, iterations=50):
    root = MCTSNode(start_node_id)
    all_nodes = {start_node_id: root}
    for _ in range(iterations):
        node = root
        path = [node.node_id]

        # Selection
        while node.children:
            total_sim = sum(c.visits for c in node.children)
            node = max(node.children, key=lambda n: ucb1(n, total_sim))
            path.append(node.node_id)

        # Expansion
        neighbors = list(G.successors(node.node_id))
        unvisited = [n for n in neighbors if n not in [c.node_id for c in node.children]]
        if unvisited:
            new_node_id = random.choice(unvisited)
            child = MCTSNode(new_node_id, parent=node)
            node.children.append(child)
            all_nodes[new_node_id] = child
            node = child
            path.append(node.node_id)

        # Simulation
        sim_path = path[:]
        while True:
            cur = sim_path[-1]
            neighbors = list(G.successors(cur))
            nxt = [n for n in neighbors if n not in sim_path]
            if not nxt:
                break
            sim_path.append(random.choice(nxt))

        # Backpropagation
        sim_score = sum(G.nodes[n]["score"] for n in sim_path)
        for nid in sim_path:
            if nid not in all_nodes:
                all_nodes[nid] = MCTSNode(nid)
            all_nodes[nid].visits += 1
            all_nodes[nid].value += sim_score
    return root

def extract_top_paths(root, G, top_k=5, sample_nodes_per_path=3):
    paths = []

    def dfs(node, path):
        if not node.children:
            paths.append(path[:])
        for child in node.children:
            dfs(child, path + [child.node_id])

    dfs(root, [root.node_id])

    scored = [(sum(G.nodes[n]["score"] for n in p), p) for p in paths]
    scored.sort(reverse=True, key=lambda x: x[0])

    results = []
    for score, p in scored[:top_k]:
        sampled = random.sample(p, min(sample_nodes_per_path, len(p)))
        entity_group = []
        for nid in sampled:
            node_data = G.nodes[nid]
            entity_group.append({
                "id": nid,
                "name": node_data.get("name"),
                "score": node_data.get("score"),
                "labels": node_data.get("labels"),
                "comment": node_data.get("comment"),
                "origin": node_data.get("origin"),
                "description": node_data.get("description")
            })
        results.append({
            "entity_group": entity_group,
            "origin_path": p,
            "path_score": score
        })
    return results

def get_mcts_multi_entity_tasks(module_name: str, iterations=50, top_k=50, sample_nodes_per_path=2, start_nodes_limit=5):
    nodes = fetch_module_nodes_with_score(module_name)
    if not nodes:
        return []

    sorted_nodes = sorted(nodes, key=lambda x: x["score"], reverse=True)
    start_nodes = sorted_nodes[:min(start_nodes_limit, len(sorted_nodes))]

    G = build_nx_graph(nodes)
    all_tasks = []

    for start in start_nodes:
        root = mcts_search(G, start["id"], iterations=iterations)
        paths = extract_top_paths(root, G, top_k=top_k, sample_nodes_per_path=sample_nodes_per_path)
        all_tasks.extend(paths)

    seen = set()
    unique_tasks = []
    for task in all_tasks:
        path_key = tuple(task["origin_path"])
        if path_key not in seen:
            seen.add(path_key)
            unique_tasks.append(task)

    return unique_tasks

class ArkTSDataGenerator:
    def __init__(self, version, module: str = "@kit.ArkTS", max_attempts: int = 1, use_mcts=True):
        self.graph = build_graph()
        self.module = module
        self.max_attempts = max_attempts
        self.logs = []
        self.version = version
        self.use_mcts = use_mcts

        if use_mcts:
            self.entities = get_mcts_multi_entity_tasks(
                module,
                iterations=100,
                top_k=10,
                sample_nodes_per_path=random.randint(2,3),
                start_nodes_limit=50
            )
        else:
            self.entities = get_entities_in_module(module)

    def generate_all(self):
        for entity in self.entities:
            if "entity_group" in entity:
                print(f"\n[PROCESSING] 多结点路径：{[e['name'] for e in entity['entity_group']]} (score={entity['path_score']})")
                try:
                    self.generate_for_group(entity)
                except Exception as e:
                    tb_str = traceback.format_exc()
                    print(f"[ERROR] 多节点任务出错: {e}\n{tb_str}")
                    self.logs.append({"module": self.module, "error": str(e)})
            else:
                print(f"\n[PROCESSING] 正在处理：{entity['name']} {entity.get('labels')}")
                try:
                    self.generate_for_entity(entity)
                except Exception as e:
                    tb_str = traceback.format_exc()
                    print(f"[ERROR] 处理 {entity['name']} 时出错: {e}\n{tb_str}")
                    self.logs.append({"module": self.module, "entity": entity["name"], "error": str(e)})
            self._save_logs()
        self._save_logs()

    def generate_for_entity(self, entity: dict):
        init_state = self._init_state(entity=entity)
        final_state = self.graph.invoke(State(**init_state), config={"recursion_limit": 100})
        self._record_results(final_state, entity_name=entity["name"], labels=entity.get("labels"))

    def generate_for_group(self, task: dict):
        init_state = self._init_state(entity=task)
        final_state = self.graph.invoke(State(**init_state),
                                        config={"recursion_limit": 100})
        self._record_results(final_state,
                             entity_name="|".join([e["name"] for e in task["entity_group"]]),
                             labels=["MultiEntity"])
    def _init_state(self, entity):
        return {
            "messages": [],
            "entity": entity["entity_group"][0] if "entity_group" in entity else entity,
            "entity_group": entity["entity_group"],
            "question": "",
            "question_list": [],
            "student_code": "",
            "current_question_index": 0,
            "student_attempt": 0,
            "max_attempts": self.max_attempts,
            "final_code": [],
            "module": self.module,
            "student_file_path": "",
        }

    def _record_results(self, final_state, entity_name, labels):
        for idx, question in enumerate(final_state.get("question_list", [])):
            self.logs.append({
                "module": self.module,
                "entity": entity_name,
                "labels": labels,
                "question": question,
                "student_code": final_state['final_code'][idx],
            })

    def _save_logs(self):
        safe_name = re.sub(r'[^\w\-]', '_', self.module.replace("@kit.", ""))
        output_path = f"/root/research/training_data/training_multi_data_{self.module}_{safe_name}_{self.version}.json"
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(self.logs, f, indent=2, ensure_ascii=False)
        print(f"[INFO] 模块 {self.module} 的训练数据已保存完成 ✅")

if __name__ == "__main__":
    generator = ArkTSDataGenerator(module="module_name", version=f"v{i}", use_mcts=True)
    generator.generate_all()