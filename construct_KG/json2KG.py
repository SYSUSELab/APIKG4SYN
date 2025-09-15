import os
import json
import traceback
from neo4j import GraphDatabase

driver = GraphDatabase.driver("bolt://localhost:7687", auth=("name", "password"))

def clear_database(tx):
    tx.run("MATCH (n) DETACH DELETE n")

def ensure_node(tx, name, label, unique_id, extra_props=None):
    if not name:
        return
    props = ", ".join(f'{k}: ${k}' for k in extra_props) if extra_props else ''
    query = f"""
        MERGE (n:{label} {{ 唯一键: $唯一键 }})
        SET n.名称 = $名称
        {f", n += {{ {props} }}" if props else ""}
    """
    params = {"名称": name, "唯一键": unique_id}
    if extra_props:
        params.update(extra_props)
    tx.run(query, **params)

def create_relation(tx, from_uid, to_uid, rel_type):
    query = f"""
        MATCH (a {{唯一键: $from_uid}}), (b {{唯一键: $to_uid}})
        MERGE (a)-[r:{rel_type}]->(b)
    """
    tx.run(query, from_uid=from_uid, to_uid=to_uid)

def build_unique_key(node, nodes_map, cache):
    if node is None:
        return None
    uid = node.get("唯一键")
    if uid in cache:
        return cache[uid]

    parent_name = node.get("上级")
    name = node.get("名称")
    if not parent_name:
        cache[uid] = name
        return name

    parent_node = nodes_map.get(parent_name)
    if not parent_node:
        parents = [n for n in nodes_map.values() if n.get("名称") == parent_name]
        parent_node = parents[0] if parents else None

    parent_uid = build_unique_key(parent_node, nodes_map, cache) if parent_node else parent_name
    full_uid = f"{parent_uid}.{name}" if parent_uid else name
    cache[uid] = full_uid
    return full_uid

def preprocess_nodes_unique_keys(nodes):
    for node in nodes:
        name = node.get("名称")
        parent = node.get("上级")
        if not parent:
            node["唯一键"] = name
        else:
            node["唯一键"] = f"{parent}.{name}"

    nodes_map = {node["唯一键"]: node for node in nodes}
    cache = {}

    for node in nodes:
        new_uid = build_unique_key(node, nodes_map, cache)
        node["唯一键"] = new_uid

    for node in nodes:
        parent = node.get("上级")
        if not parent:
            continue
        candidates = [n["唯一键"] for n in nodes if n.get("名称") == parent]
        if len(candidates) == 1:
            node["上级"] = candidates[0]
        elif len(candidates) > 1:
            exacts = [c for c in candidates if c.split('.')[-1] == parent]
            if exacts:
                node["上级"] = exacts[0]
            else:
                print(f"[WARN] 多重匹配无精确匹配，保留原上级: {parent}")
        else:
            print(f"[WARN] 未找到上级唯一键，保留原上级: {parent}")

    return nodes

def create_graph(json_path, clear_db=False):
    with open(json_path, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
            if not isinstance(data, dict):
                print(f"[WARNING] 文件 {json_path} 内容为空或不是合法字典，已跳过")
                return
        except json.JSONDecodeError:
            print(f"[WARNING] 文件 {json_path} 不是合法 JSON，已跳过")
            return

    nodes = data.get("节点", [])
    nodes = preprocess_nodes_unique_keys(nodes)

    label_map = {
        "interface": "Interface",
        "property": "Property",
        "call_signature": "CallSignature",
        "method": "Method",
        "type_alias": "TypeAlias",
        "enum": "Enum",
        "enum_member": "EnumMember",
        "namespace": "Namespace",
        "class": "Class",
        "struct": "Struct",
        "export_import": "ExportImport",
        "module": "Module"
    }

    with driver.session() as session:
        if clear_db:
            print("[INFO] 清空数据库中...")
            session.execute_write(clear_database)
            print("[INFO] 数据库已清空")

        for node in nodes:
            type_ = node.get("类型", "结构体")
            if type_ == "call_signature":
                name = node.get("签名", "未知签名")
            else:
                name = node.get("名称")

            module = node.get("所属模块")
            parent = node.get("上级")
            desc = node.get("功能描述", "")
            comment = "\n".join(node.get("注释信息", []))
            label = label_map.get(type_.lower(), type_.capitalize())

            unique_id = node.get("唯一键")

            props = {
                "功能描述": desc,
                "注释信息": comment
            }
            if "装饰器" in node:
                props["装饰器"] = "\n".join(node["装饰器"])

            session.execute_write(ensure_node, name, label, unique_id, props)

            if parent and (not module or module == "未知模块"):
                parent_node = next((n for n in nodes if n["唯一键"] == parent), None)
                high_level_labels = {"Namespace", "Class", "Interface", "Enum", "Struct"}
                if parent_node and label_map.get(parent_node.get("类型", "").lower(), parent_node.get("类型", "").capitalize()) in high_level_labels:
                    rel_type = f"HAS_{type_.upper()}"
                    session.execute_write(create_relation, parent, unique_id, rel_type)

            if module and module != "未知模块":
                session.execute_write(ensure_node, module, "Module", module)
                session.execute_write(create_relation, unique_id, module, "BELONGS_TO")

def process_api_folder(api_folder_path: str):
    json_files = []
    for root, _, files in os.walk(api_folder_path):
        for file in files:
            if file.endswith(".json"):
                json_files.append(os.path.join(root, file))
    json_files.sort()

    for i, file_path in enumerate(json_files):
        print(f"[INFO] 正在处理第{i+1}/{len(json_files)}个文件: {file_path}")
        try:
            clear_db = (i == 0)
            create_graph(file_path, clear_db)
        except Exception as e:
            print(f"[ERROR] 处理 {file_path} 出错: {e}")
            traceback.print_exc()

if __name__ == "__main__":
    api_path = r"Your path to the api_JSON folder"
    process_api_folder(api_path)
