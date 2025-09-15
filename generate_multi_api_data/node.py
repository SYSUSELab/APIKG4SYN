import os
import re
from config import driver
from pydantic import BaseModel
from typing import TypedDict
from config import llm
from typing import Annotated, Optional
from langgraph.graph.message import add_messages
from langchain_core.messages import HumanMessage
from prompt import (
    question_prompt,
    multi_api_question_prompt,
    code_prompt,
)

class State(BaseModel):
    messages: Annotated[list, add_messages]
    entity: dict
    entity_group: Optional[list[dict]] = None
    import_entity: str = ""
    use_entity: str = ""
    type_statement: str = ""
    corpus: str = ""
    question: str = ""
    question_list: list[str] = []
    current_question_index: int
    student_code: str
    attempt_count: int = 0
    student_attempt: int = 0
    max_attempts: int = 1
    final_code: list[str] = []
    module: str = ""
    student_file_path: str
    num :int =3
    framework: str = "ArkTS"
    next_step: str = "generate_code"


class QuestionList(TypedDict):
    problem: Annotated[list[str], ..., "generated problem"]

class Code(TypedDict):
    code: Annotated[str, ..., "Generated code based on the question"]

def message_to_state(prompt: str):
    messages = [HumanMessage(content=prompt)]
    structured_llm = llm.with_structured_output(Code)
    response = structured_llm.invoke(messages)
    messages.append(HumanMessage(content=response['code']))
    return messages, response

def generate_comprehensive_question(state: State) -> State:
    if hasattr(state, "entity_group") and state.entity_group:
        entities = state.entity_group
        entity_names = [e.get("name", "") for e in entities]
        entity_comments = [e.get("comment", "") or "" for e in entities]
        entity_descs = [e.get("description", "") or "" for e in entities]
        entity_parent = state.module

        state.import_entity = ", ".join(
            extract_ns_and_usage(e.get("origin", ""), e.get("name", ""))[0]
            for e in entities
        )
        state.use_entity = ", ".join(
            extract_ns_and_usage(e.get("origin", ""), e.get("name", ""))[1]
            for e in entities
        )
        state.type_statement = ""
        if state.import_entity != state.use_entity:
            type_defs = "\n".join(
                f"type {e['name']} = {extract_ns_and_usage(e.get('origin', ''), e['name'])[1]};"
                for e in entities
            )
            state.type_statement = f"Add the following code after the import statement:\n{type_defs}"

        corpus = "\n\n".join(
            get_entity_corpus(e["name"], entity_parent, "summary") for e in entities
        )
        state.corpus = corpus

        prompt = multi_api_question_prompt.replace(
            "[API]: {entity_name}", f"[APIs]: {', '.join(entity_names)}"
        ).format(
            entity_names=", ".join(entity_names),
            entity_comment="\n".join(entity_comments),
            entity_description="\n".join(entity_descs),
            entity_corpus=corpus
        )

    else:
        entity = state.entity
        entity_name = entity.get("name", "")
        entity_comment = entity.get("comment", "")
        entity_desc = entity.get("description", "")
        entity_parent = state.module
        state.type_statement = ""
        state.import_entity, state.use_entity = extract_ns_and_usage(entity.get("origin", ""), entity_name)
        if state.import_entity != state.use_entity:
            state.type_statement = f"Add the following code after the import statement: `type {entity_name} = {state.use_entity};`"
        corpus = get_entity_corpus(entity_name, entity_parent, "summary")
        state.corpus = corpus
        prompt = question_prompt.format(
            framework=state.framework,
            num = state.num,
            API_name=entity_name,
            API_member=corpus
        )

    messages = state.messages.copy()

    if not state.question_list:
        messages.append(HumanMessage(content=prompt))
        structured_llm = llm.with_structured_output(QuestionList)
        response = structured_llm.invoke(messages)
        questions = response.get("problem", [])
        if not questions:
            raise ValueError("没有生成有效的问题")

        state.question_list = questions
        state.current_question_index = 0
        state.question = questions[0]
        print("[INFO] 当前问题：", state.question)
        messages.append(HumanMessage(content=state.question))

    else:
        idx = state.current_question_index
        if idx < len(state.question_list):
            state.question = state.question_list[idx]
            print("[INFO] 当前问题：", state.question)
            messages.append(HumanMessage(content=state.question))
        else:
            state.question = ""

    state.messages = messages

    return state

def generate_student_code(state: State) -> State:
    state.question = state.question_list[state.current_question_index]

    if getattr(state, "entity_group", None) and len(state.entity_group) > 1:
        entities = state.entity_group
        entity_names = [e.get("name", "") for e in entities]
        entity_comments = [e.get("comment", "") or "" for e in entities]
        entity_descs = [e.get("description", "") or "" for e in entities]
        entity_parent = state.module

        state.import_entity = ", ".join(
            extract_ns_and_usage(e.get("origin", ""), e.get("name"))[0] for e in entities
        )
        state.use_entity = ", ".join(
            extract_ns_and_usage(e.get("origin", ""), e.get("name"))[1] for e in entities
        )
        state.type_statement = ""
        if state.import_entity != state.use_entity:
            type_defs = "\n".join(
                f"type {e['name']} = {extract_ns_and_usage(e.get('origin', ''), e['name'])[1]};"
                for e in entities
            )
            state.type_statement = f"Add the following code after the import statement:\n{type_defs}"

        corpus = "\n\n".join(
            f"{e['name']} 的成员语料如下：\n{get_entity_corpus(e['name'], entity_parent, 'summary')}"
            for e in entities
        )
        state.corpus = corpus

        entity_name_str = ", ".join(entity_names)
        entity_comment_str = "\n".join(entity_comments)
        entity_desc_str = "\n".join(entity_descs)

    else:
        e = state.entity
        entity_name_str = e.get("name", "")
        entity_comment_str = e.get("comment", "")
        entity_desc_str = e.get("description", "")
        state.import_entity, state.use_entity = extract_ns_and_usage(e.get("origin", ""), entity_name_str)
        state.type_statement = ""
        if state.import_entity != state.use_entity:
            state.type_statement = f"Add the following code after the import statement: `type {entity_name_str} = {state.use_entity};`"
        corpus = get_entity_corpus(entity_name_str, state.module, "summary")
        state.corpus = corpus

    prompt = code_prompt.format(
        framework=state.framework,
        question=state.question,
        API_name=entity_name_str,
        module=state.module,
        meta_data=entity_desc_str,
        corpus=state.corpus,
        name=state.import_entity,
        type_statement=state.type_statement,
    )

    messages, response = message_to_state(prompt)
    state.messages = messages
    state.student_code = response['code']

    entity_file_name = "_".join([e.get("name", state.entity["name"]) for e in getattr(state, "entity_group", [state.entity])])
    state.student_file_path = f"/root/research/test/entry/src/main/ets/functions/{extract_kit_name(state.module)}_{entity_file_name}.ets"
    save_student_code(state.module, state.student_code, entity_file_name, state.current_question_index)
    state.current_question_index += 1
    state.final_code.append(state.student_code)
    return state

def router(state: State):
    if state.current_question_index < len(state.question_list):
        print("[INFO] 进入下一题：", state.question_list[state.current_question_index])
        return "generate_code"
    return "end"

def get_entities_in_module(module: str = "@kit.ArkTS"):
    prefix = module + "."
    query = """
    MATCH (e)
    WHERE ANY(l IN labels(e) WHERE l IN ['Class','Interface','Enum','Namespace'])
      AND e.`唯一键` IS NOT NULL
      AND e.`唯一键` STARTS WITH $prefix
    RETURN e.名称 AS name,
           labels(e) AS labels,
           e.注释信息 AS comment,
           e.`唯一键` AS origin,
           e.功能描述 AS description
    ORDER BY name
    """
    with driver.session() as session:
        results = session.run(query, prefix=prefix)
        return [dict(record) for record in results]

def extract_doc_comments(comment: str) -> str:
    if not comment:
        return ""
    allowed_tags = ["@param", "@returns", "@throws", "@enum", "@type", "@readonly", "@typedef"]
    lines = comment.splitlines()
    extracted = []
    for line in lines:
        line = line.strip()
        for tag in allowed_tags:
            if line.startswith(tag):
                extracted.append(line)
                break
    return "\n".join(extracted)

def get_entity_corpus(entity_name: str, module: str, mode: str = "summary") -> str:
    query = """
    MATCH (parent {名称: $entity_name})
    WHERE parent.唯一键 STARTS WITH $module
    MATCH (parent)-[:HAS_METHOD|HAS_PROPERTY|HAS_TYPE_ALIAS|HAS_ENUM]->(child)
    WHERE child.名称 <> $entity_name
    RETURN 
        child.名称 AS name,
        child.唯一键 AS origin,
        parent.唯一键 AS parent_origin,
        labels(child) AS labels,
        child.注释信息 AS comment
    ORDER BY name
    """

    with driver.session() as session:
        results = session.run(query, entity_name=entity_name, module=module)
        grouped = {}
        import_tip = None

        for record in results:
            name = record.get("name") or "unknown"
            parent_origin = record.get("parent_origin") or ""
            labels = record.get("labels") or []
            comment = record.get("comment") or ""

            if parent_origin and "::" in parent_origin and import_tip is None:
                try:
                    parts = parent_origin.split("::")
                    module_part = parts[0]
                    class_part = parts[1] if len(parts) > 1 else ""
                    if module_part and class_part:
                        import_tip = f"Please import before use: `import {{{class_part}}} from '{module_part}'`"
                except Exception as e:
                    print(f"[ERROR] Failed to parse import info: {e}")
                    import_tip = None

            label_str = labels[0] if labels else "Unknown"

            if label_str not in grouped:
                grouped[label_str] = []
            grouped[label_str].append({
                "name": name,
                "comment": extract_doc_comments(comment)
            })

        if not grouped:
            return f"No members found under structure `{entity_name}`."

        lines = [f"The member corpus of {entity_name} is as follows:"]
        for label, items in grouped.items():
            if mode == "summary":
                names = ", ".join(i["name"] for i in items)
                lines.append(f"[{label}]: {names}")
            elif mode == "full":
                for i in items:
                    comment_str = f": {i['comment']}" if i["comment"] else ""
                    lines.append(f"[{label}]: {i['name']}{comment_str}")
            elif mode == "hybrid":
                names = ", ".join(i["name"] for i in items)
                lines.append(f"[{label}]: {names}")
                for i in items[:5]:
                    comment_str = f": {i['comment']}" if i["comment"] else ""
                    lines.append(f"    - {i['name']}{comment_str}")

        corpus = "\n".join(lines)
        if import_tip:
            corpus = f"{import_tip}\n\n{corpus}"

        return corpus

def save_student_code(module: str, student_code: str, name: str, idx: int = 0):
    out_code_path = os.path.join("/root/research/test/entry/src/main/ets", "functions")
    os.makedirs(out_code_path, exist_ok=True)
    file_func = os.path.join(out_code_path, f"{extract_kit_name(module)}_{name}_{idx}.ets")
    with open(file_func, "w", encoding="utf-8") as f:
        f.write(student_code)
    print(f"[SAVE] 学生函数保存：{file_func}")

    return file_func

def extract_ns_and_usage(origin: str, entity: str | None = None):
    origin = origin.strip()
    if not origin.startswith("@kit."):
        return "", ""
    parts = origin.split(".")
    if len(parts) < 3:
        return "", ""

    rest = parts[2:]
    namespace = rest[0]

    usage = ".".join(rest)

    if entity:
        try:
            last_idx = len(rest) - 1 - rest[::-1].index(entity)
            usage = ".".join(rest[:last_idx + 1])
        except ValueError:
            pass

    return namespace, usage

def extract_kit_name(text: str) -> str:

    match = re.search(r"@kit\.([A-Za-z0-9_]+)", text)
    return match.group(1) if match else ""