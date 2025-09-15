import math
from typing import TypedDict
from config import driver
from config import llm

def get_module_names() -> list[str]:
    query = """
    MATCH (m:Module)
    RETURN m.名称 AS name
    ORDER BY name
    """
    with driver.session() as session:
        results = session.run(query)
        return [record["name"] for record in results]

def get_entity_corpus(entity_parent: str) -> str:
    query = """
    MATCH (parent {名称: $entity_parent})
    MATCH (parent)-[:HAS_METHOD|HAS_PROPERTY|HAS_TYPE_ALIAS|HAS_INTERFACE|HAS_CLASS|HAS_ENUM]->(child)
    OPTIONAL MATCH (parent)-[:BELONGS_TO*0..5]->(m:Module)
    RETURN 
        child.名称 AS name,
        child.功能描述 AS description,
        parent.唯一键 AS parent_origin,
        labels(child) AS labels
    """
    with driver.session() as session:
        results = session.run(query, entity_parent=entity_parent)
        items = []

        for record in results:
            name = record.get("name") or "unknown"
            labels = record.get("labels") or []
            label_str = ", ".join(labels)
            line = f"- ([{label_str}]) {name}"
            items.append(line)

        if not items:
            return f"No members found under structure `{entity_parent}`."

        corpus = f"The other API member corpus of the structure where `{entity_parent}` is located is as follows:\n" + "\n".join(items)
        return corpus

PROMPT_TEMPLATE = """
Please use your knowledge to evaluate the probability that the following methods or properties belong to {name}.
---

{corpus}

---

Based on the above description, assign a score between 0 and 1 for each method/property, representing the probability that it belongs to {name}. A value closer to 1 indicates greater reliability, while a value closer to 0 suggests incompleteness or inaccuracy.

Output format:
{{
    “function 1”: 0.85,
    “function 2”: 0.75,
    ...
}}

"""

class ScoreList(TypedDict):
    score_list: dict[str, float]

def compute_info_score(prob_dict: dict[str, float]) -> float:
    return round(sum(-math.log2(p) for p in prob_dict.values() if p > 0), 4)

def process_all_non_leaf_nodes_under_module(module_name: str = "@kit.ArkTS"):
    query = """
        MATCH (m:Module {名称: $module_name})<-[:BELONGS_TO*0..5]-(parent)
        WHERE EXISTS {
            MATCH (parent)-[:HAS_METHOD|HAS_PROPERTY|HAS_TYPE_ALIAS|HAS_INTERFACE|HAS_CLASS|HAS_ENUM]->()
        }
        WITH DISTINCT parent
        RETURN parent.名称 AS name, parent.info_score AS info_score
        ORDER BY name
        """

    with driver.session() as session:
        result = session.run(query, module_name=module_name)
        parents = [(record["name"], record.get("info_score")) for record in result]

    structured_llm = llm.with_structured_output(ScoreList)

    for name, existing_score in parents:
        if existing_score is not None:
            print(f"⏭ `{name}` 已有 info_score={existing_score}，跳过。")
            continue

        print(f"\n[PROCESSING] 结构体: {name}")
        corpus = get_entity_corpus(name)

        if corpus.startswith("No members"):
            print("⚠️ 无成员，跳过。")
            continue

        prompt = PROMPT_TEMPLATE.format(name=name, corpus=corpus)

        try:
            response = structured_llm.invoke(prompt)
            score_dict = response["score_list"]
            info_score = compute_info_score(score_dict)
        except Exception as e:
            print(f"❌ LLM处理失败：{e}")
            continue

        print("评分列表：", score_dict)
        print("总信息量（bit）：", info_score)

        with driver.session() as session:
            session.run("""
                MATCH (n {名称: $name})
                SET n.info_score = $score
            """, name=name, score=info_score)

        print(f"✅ `{name}` 信息量写入完成")

if __name__ == "__main__":
    process_all_non_leaf_nodes_under_module("module_name")
