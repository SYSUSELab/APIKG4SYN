import os
import json
import re
from langgraph.graph import StateGraph, START, END
from node import (
    State,
    generate_comprehensive_question,
    generate_student_code,
    router,
    get_entities_in_module
)

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

class ArkTSDataGenerator:
    def __init__(self, version ,module: str = "@kit.ArkTS", max_attempts: int = 1):
        self.graph = build_graph()
        self.module = module
        self.max_attempts = max_attempts
        self.logs = []
        self.version = version
        self.entities = get_entities_in_module(module)

    def generate_all(self):
        for entity in self.entities:
            print(f"\n[PROCESSING] 正在处理：{entity['name']} {entity['labels']}")
            self.generate_for_entity(entity)
            self._save_logs()

    def generate_for_entity(self, entity: dict):
        init_state = {
            "messages": [],
            "entity": entity,
            "question": "",
            "question_list": [],
            "student_code": "",
            "current_question_index": 0,
            "student_attempt": 0,
            "test_attempt": 0,
            "max_attempts": self.max_attempts,
            "final_code": [],
            "module": self.module,
            "student_file_path": "",
        }
        state = State(**init_state)
        final_state = self.graph.invoke(state, config={"recursion_limit": 100})

        for idx, question in enumerate(final_state.get("question_list", [])):
            self.logs.append({
                "module": self.module,
                "entity": entity["name"],
                "labels": entity["labels"],
                "question": question,
                "student_code": final_state['final_code'][idx],
            })

    def _save_logs(self):
        safe_name = re.sub(r'[^\w\-]', '_', self.module.replace("@kit.", ""))
        output_path = f"/root/research/training_data/training_data_{self.module}_{safe_name}_{self.version}.json"
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(self.logs, f, indent=2, ensure_ascii=False)
        print(f"[INFO] 模块 {self.module} 的训练数据已保存完成 ✅")


if __name__ == "__main__":
    generator = ArkTSDataGenerator(module="module_name", version = f"v{i}")
    generator.generate_all()
