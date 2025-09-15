import os
import json
from langchain_openai import ChatOpenAI
from pydantic import BaseModel
from typing import Annotated
from langgraph.graph.message import add_messages
from langchain_core.messages import HumanMessage
from langgraph.graph import StateGraph, END
from pydantic import SecretStr
import re

llm = ChatOpenAI(base_url="Your URL", api_key=SecretStr("Your API Key"))


class State(BaseModel):
    messages: Annotated[list, add_messages] = []
    benchmark: list = []
    outputs: list[str] = []
    idx: int = 0
    model_name: str = ""


def extract_and_write_code_from_test(test_code: str, generated_code: str, project_root: str, model_name: str):
    import_pattern = r"from\s+['\"](\.\./main/ets/[^'\"]+)['\"]"
    match = re.search(import_pattern, test_code)
    if not match:
        raise ValueError(f"[ERROR] 没有找到 ../main/ets/ 路径的 import，模型: {model_name}")
    relative_path = match.group(1).replace("../main/ets/", "")
    target_path = os.path.join(project_root, model_name, "main", "ets", relative_path + ".ets")
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(generated_code)
    print(f"[INFO] ({model_name}) 已写入代码到: {target_path}")
    return target_path


def benchmark_step(state: State, llm):
    item = state.benchmark[state.idx]
    inst = item.get("instruction", "")
    test = item.get("test", "")

    prompt = f"""
    You are an expert ArkTS developer.

    Analyze the following unit tests to identify the exact function/class/method signature or object under test.
    Then, based on the instruction and the tested API or object in the unit tests, implement the correct code.

    ### Instruction
    {inst}

    ### Unit Tests
    {test}

    Requirements:
    1. The implementation must define exactly the function/class/method that is being tested.
    2. Ensure the name, parameters, and return type exactly match the unit tests.
    3. Return only the ArkTS code, with no explanations.
    4. No Markdown formatting, just plain code.
    """
    response = llm.invoke([HumanMessage(content=prompt)])
    generated_code = response.content

    project_root = r"path/to/your/HarmonyOS(DevEco Studio)/project"
    extract_and_write_code_from_test(test, generated_code, project_root, state.model_name)

    item["model_output"] = generated_code
    state.outputs[state.idx] = generated_code
    state.idx += 1
    return state


def benchmark_router(state: State):
    return "step" if state.idx < len(state.benchmark) else "end"


def run_benchmark(benchmark_path: str, output_dir: str, llm, model_name: str):
    with open(benchmark_path, "r", encoding="utf-8") as f:
        benchmark_data = json.load(f)

    os.makedirs(output_dir, exist_ok=True)
    state = State(benchmark=benchmark_data, outputs=[""] * len(benchmark_data), model_name=model_name)

    graph = StateGraph(State)
    graph.add_node("step", lambda s: benchmark_step(s, llm))
    graph.set_entry_point("step")
    graph.add_conditional_edges("step", benchmark_router, {"step": "step", "end": END})

    compiled_graph = graph.compile()
    final_state = compiled_graph.invoke(state, config={"recursion_limit": 400})

    output_path = os.path.join(output_dir, f"benchmark_results_{model_name}.json")
    output_data = {
        "benchmark_results": final_state["benchmark"]
    }

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)

    print(f"[{model_name}] 测评完成，结果已保存到: {output_path}")


if __name__ == "__main__":
    benchmark_file = r"path/to/your/benchmark.json"
    base_output_dir = r"path/to/your/benchmark_results"

    run_benchmark(benchmark_file, os.path.join(base_output_dir, "model_name"), llm, "model_name")
