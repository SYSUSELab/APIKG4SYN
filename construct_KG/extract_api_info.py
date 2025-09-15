import re
import sys
import json
import traceback
from pathlib import Path
from utils import LoggerWriter


def pan(line: str):
    if line[1:].strip() == '':
        return True
    return False


def pan_import(line: str):
    if line.startswith('import'):
        return True
    return False


def extract_name(line: str, name: str):
    pattern = rf'\b{name}\s+(\w+)'
    match = re.search(pattern, line)
    if match:
        return match.group(1)
    return None


def process_by_state_machine(ts_code: str):
    lines = ts_code.splitlines()
    state = 0
    comments = {}
    count = 0
    current_comment = ""
    for line in lines:
        line = line.strip()
        if state == 0:
            if line.startswith('/**'):
                state = 1
                current_comment = line[3:].strip()
            else:
                break
        elif state == 1:
            if line.endswith('*/'):
                current_comment += "\n" + line[:-2].strip()
                comments[f"{count}"] = current_comment.strip()
                count += 1
                current_comment = ""
                state = 0
            else:
                if pan(line):
                    continue
                else:
                    current_comment += "\n" + line[1:].strip()
        elif state == 2:
            if line.startswith('/**'):
                state = 3
                current_comment = line[3:].strip()
        elif state == 3:
            if line.endswith('*/'):
                current_comment += " " + line[:-2].strip()
                comments[f"{count}"] = current_comment.strip()
                count += 1
                current_comment = ""
                state = 0
            else:
                if pan(line):
                    continue
                else:
                    current_comment += "\n" + line[1:].strip()
        elif state == 4:
            if line.startswith('/**'):
                current_comment = line[3:].strip()
                state = 1
            elif line.endswith('*/'):
                current_comment += " " + line[:-2].strip()
                comments[f"{count}"] = current_comment.strip()
                count += 1
                current_comment = ""
                state = 0
            else:
                if current_comment:
                    comments[f"{count}"] = current_comment.strip()
                break
    if comments:
        return comments[f"{count - 1}"], count if count > 0 else None
    return None


def extract_info(kit_json, process_code, isIn: bool):
    if not process_code:
        return None

    comment_blocks = []
    current_block = []
    in_block = False

    for line in process_code.splitlines():
        if '/**' in line:
            current_block = [line]
            in_block = True
        elif '*/' in line and in_block:
            current_block.append(line)
            comment_blocks.append(current_block[:])
            current_block = []
            in_block = False
        elif in_block:
            current_block.append(line)

    def extract_since_version(block):
        for line in block:
            match = re.search(r'@since\s+(\d+)', line)
            if match:
                return int(match.group(1))
        return -1

    if comment_blocks:
        comment_blocks.sort(key=extract_since_version, reverse=True)
        best_block = comment_blocks[0]
    else:
        best_block = process_code.splitlines()

    description = []
    metadata = []

    for line in best_block:
        if '/**' in line or '*/' in line:
            continue
        line = line.strip()
        if line.startswith('*'):
            line = line[1:].strip()
        if not line:
            continue
        if line.startswith('@'):
            metadata.append(line)
        else:
            description.append(line)

    if isIn:
        api_info = {
            "描述": " ".join(description),
            "注释信息": metadata
        }
    else:
        api_info = {
            "所属模块": kit_json.get("所属模块", "未知模块"),
            "描述": " ".join(description),
            "注释信息": metadata
        }

    return api_info


def delete_annotation(count, ts_code):
    while count > 0:
        end = ts_code.find('*/') + 2
        ts_code = ts_code[end:].strip()
        count -= 1
    return ts_code


def is_property_declaration(line: str) -> bool:
    line = line.strip()
    patterns = [
        r'^(?:readonly\s+)?\w+\s*[?!]?\s*:\s*[\w\.\<\>\[\]\|\&\,\?\(\)\s]+;?$',

        r'^(?:readonly\s+)?\w+\s*[?!]?\s*:\s*([\'"][^\'"]+[\'"]\s*(\|\s*[\'"][^\'"]+[\'"])*)\s*;?$',

        r'^(?:readonly\s+)?\w+\s*[?!]?\s*:\s*\(.*\)\s*=>\s*[\w\.\<\>\[\]\|\&\,\s]+;?$',
    ]
    return any(re.match(p, line) for p in patterns)


def is_interface_function_signature(line: str) -> bool:
    line = line.strip()
    return bool(re.match(r'^\(.*\)\s*:\s*[\w.<>\[\]|&,\s]+;?$', line))


def delete_import(ts_code):
    while pan_import(ts_code.splitlines()[0]):
        ts_code = "\n".join(ts_code.splitlines()[1:]).strip()
    return ts_code


def is_function_declaration(line: str) -> bool:
    line = line.strip()
    patterns = [
        r'^(export\s+)?(declare\s+)?function\s+\w+\s*\(.*',
        r'^type\s+\w+\s*=\s*\(.*',
        r'^(?:public|private|protected|static|readonly|\s)*\s*\w+\s*\(.*',
        r'^\w+\s*\(.*',
        r'^\w+\s*:\s*\(.*',
        r'^\w+\s*:\s*function\s*\(.*',
        r'^constructor\s*\(.*',
        r'^\[\s*[\w\.]+\s*\]\s*\(.*'
        r'^\w+\s*\(.*\)\s*:\s*.+;',
        r'^\[(\w+(\.\w+)*)\]\s*\((.*?)\)\s*:\s*([^;{]+);?$',
    ]
    return any(re.match(p, line) for p in patterns)


def extract_function_name(line: str) -> str | None:
    """
    提取函数名称，兼容 export/declare/async、类成员方法、计算属性方法、函数类型别名等
    """
    line = line.strip()

    match = re.match(r'^(?:export\s+)?(?:declare\s+)?(?:async\s+)?function\s+([^\s(]+)\s*\(', line)
    if match:
        return match.group(1)

    match = re.match(r'^(?:(?:public|private|protected|static|readonly|async)\s+)*([^\s(]+)\s*\(', line)
    if match:
        return match.group(1)

    match = re.match(r'^\[\s*([^]]+)\s*]\s*\(', line)
    if match:
        return f"[{match.group(1)}]"

    match = re.match(r'^type\s+([^\s=]+)\s*=\s*\(.*\)\s*=>', line)
    if match:
        return match.group(1)

    return None


def extract_enum_members(enum_code: str):
    lines = enum_code.splitlines()[1:]
    members = []
    for line in lines:
        line = line.strip().strip(',').strip('}')
        if line:
            members.append(line)
    return members


def extract_return_type_from_constructor(class_name: str) -> str:
    return class_name


def extract_return_type(line: str) -> str:
    match = re.search(r'\)\s*:\s*([^;{]+)', line)
    if match:
        return match.group(1).strip()
    return 'void'


def extract_block(code: str):
    lines = code.strip().splitlines()
    block_lines = []
    brace_count = 0
    start_collecting = False

    for line in lines:
        block_lines.append(line)
        brace_count += line.count('{') - line.count('}')
        if '{' in line:
            start_collecting = True
        if start_collecting and brace_count <= 0:
            break

    return "\n".join(block_lines)


def remove_inline_annotations(code: str) -> str:
    lines = code.splitlines()
    cleaned = []
    for line in lines:
        if re.match(r'^\s*@[\w.]+\s*(\(.+\))?\s*$', line):
            continue
        cleaned.append(line)
    return '\n'.join(cleaned).strip()


def is_enum_member_declaration(line: str) -> bool:
    line = line.strip()
    if is_function_declaration(line) or is_property_declaration(line):
        return False
    return re.match(r'^\w+\s*(=\s*[^,]+)?\s*,?$', line) is not None


def has_brace_in_first_line(ts_code: str) -> bool:
    lines = ts_code.strip().splitlines()

    for line in lines:
        striped = line.strip()
        if striped.startswith('/**') or striped.startswith('*') or striped.startswith('//') or striped == '':
            continue
        return '{' in striped
    return False


def delete_import_keep_comment(ts_code: str) -> str:
    lines = ts_code.splitlines()
    result_lines = []
    for line in lines:
        if line.strip().startswith('import '):
            continue
        result_lines.append(line)
    return '\n'.join(result_lines)


def extract_next_block(code: str) -> tuple[str, str]:
    lines = code.splitlines()
    buffer = []
    brace_count = 0
    start = False
    for i, line in enumerate(lines):
        if not start and re.search(r'\b(class|interface|enum|namespace)\b', line):
            start = True
        if start:
            buffer.append(line)
            brace_count += line.count('{') - line.count('}')
            if brace_count <= 0 and '{' in ''.join(buffer):
                break
    block = '\n'.join(buffer).strip()
    rest = '\n'.join(lines[len(buffer):]).strip()
    return block, rest


def split_top_level_blocks(ts_code: str) -> list:
    blocks = []
    remaining_code = ts_code.strip()
    while remaining_code:
        block, remaining_code = extract_next_struct_block(remaining_code)
        if block:
            blocks.append(block.strip())
        else:
            break
    return blocks


def extract_next_struct_block(code: str) -> tuple[str, str]:
    lines = code.strip().splitlines()
    buffer = []
    brace_count = 0
    struct_keywords = ['class', 'interface', 'enum', 'namespace', 'struct']

    i = 0
    comment_blocks = []

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        if not stripped:
            i += 1
            continue

        if stripped.startswith('/**'):
            comment_block = [line]
            i += 1
            while i < len(lines):
                line = lines[i]
                comment_block.append(line)
                if '*/' in line:
                    break
                i += 1
            comment_blocks.extend(comment_block)
            i += 1
            continue

        if stripped.startswith('@'):
            comment_blocks.append(line)
            i += 1
            continue

        if any(kw in stripped for kw in struct_keywords) and '{' in stripped:
            buffer.extend(comment_blocks)
            comment_blocks.clear()
            buffer.append(line)
            brace_count += stripped.count('{') - stripped.count('}')
            i += 1
            break
        else:
            comment_blocks.clear()
            i += 1

    if not buffer:
        return None, '\n'.join(lines[i:]).strip()

    while i < len(lines):
        line = lines[i]
        buffer.append(line)
        brace_count += line.count('{') - line.count('}')
        if brace_count <= 0:
            i += 1
            break
        i += 1

    block = '\n'.join(buffer).strip()
    rest = '\n'.join(lines[i:]).strip()
    return block, rest


def process_body(ts_code: str, api_info: dict, total_info: dict, deepth: int):
    current_info = {}
    lines = ts_code.splitlines()
    if lines == []:
        return total_info
    if 'class' in lines[0]:
        current_info['类型'] = 'class'
        current_info['名称'] = extract_name(lines[0], 'class')
        if 'extends' in lines[0]:
            current_info['父类'] = extract_name(lines[0], 'extends')
    elif 'interface' in lines[0]:
        current_info['类型'] = 'interface'
        current_info['名称'] = extract_name(lines[0], 'interface')
        if 'extends' in lines[0]:
            current_info['父类'] = extract_name(lines[0], 'extends')
    elif 'namespace' in lines[0]:
        current_info['类型'] = 'namespace'
        current_info['名称'] = extract_name(lines[0], 'namespace')
    elif 'enum' in lines[0]:
        current_info['类型'] = 'enum'
        current_info['名称'] = extract_name(lines[0], 'enum')
    elif re.match(r'^export\s+import\s+\w+\s*=\s*[\w.]+;', lines[0].strip()):
        line = lines[0].strip()
        match = re.match(r'^export\s+import\s+(\w+)\s*=\s*([\w.]+);', line)
        if match:
            current_info['类型'] = 'export_import'
            current_info['名称'] = match.group(1)
            current_info['映射自'] = match.group(2)
    elif re.match(r'^(export\s+)?(declare\s+)?type\s+\w+\s*=', lines[0].strip()):
        current_info['类型'] = 'type_alias'
        current_info['名称'] = extract_name(lines[0], 'type')
    elif is_function_declaration(lines[0]):
        current_info['类型'] = 'method'
        function_name = extract_function_name(lines[0])
        current_info['名称'] = function_name
        if function_name == 'constructor':
            current_info['返回值'] = extract_return_type_from_constructor(api_info.get('上级', ''))
        elif ':' in lines[0]:
            current_info['返回值'] = extract_return_type(lines[0])
        else:
            current_info['返回值'] = 'void'
        current_info['名称'] = function_name
    elif 'struct' in lines[0]:
        current_info['类型'] = 'struct'
        current_info['名称'] = extract_name(lines[0], 'struct')
    elif is_property_declaration(lines[0]):
        if '[' in lines[0] and not lines[0].strip().endswith(';'):
            full_decl_lines = [lines[0].strip()]
            bracket_count = lines[0].count('[') - lines[0].count(']')
            for extra_line in lines[1:]:
                full_decl_lines.append(extra_line.strip())
                bracket_count += extra_line.count('[') - extra_line.count(']')
                if bracket_count <= 0 and ';' in extra_line:
                    break
            line = ' '.join(full_decl_lines).rstrip(';')
        else:
            line = lines[0].strip().rstrip(';')

        match = re.match(r'^(?:readonly\s+)?(\w+)\??\s*:\s*(.+)$', line)
        if match:
            current_info['类型'] = 'property'
            current_info['名称'], type_str = match.groups()
            current_info['属性类型'] = type_str.strip()
    elif is_interface_function_signature(lines[0]):
        current_info['类型'] = 'call_signature'
        current_info['签名'] = lines[0].strip().rstrip(';')

    elif is_enum_member_declaration(lines[0]):
        line = lines[0].strip().rstrip(',')
        match = re.match(r'^(\w+)\s*(=\s*[^,]+)?$', line)
        if match:
            current_info['类型'] = 'enum_member'
            current_info['名称'] = match.group(1)
            if match.group(2):
                current_info['值'] = match.group(2).lstrip('= ').strip()

    current_info['所属模块'] = api_info.get('所属模块', '未知模块')
    current_info['功能描述'] = api_info.get('描述', api_info.get('上级描述', '无描述'))
    current_info['注释信息'] = api_info.get('注释信息', [])
    if '装饰器' in api_info:
        current_info['装饰器'] = api_info['装饰器']
    current_info['层级'] = deepth
    if '上级' in api_info:
        current_info['上级'] = api_info['上级']

    if current_info.get("类型") == "method" and (
            ts_code.strip().endswith(';') or re.match(r'.+\)\s*:\s*[\w\[\]<>]+\s*;', ts_code.strip())
    ):
        if '节点' not in total_info:
            total_info['节点'] = []
        total_info['节点'].append(current_info)
        return total_info

    if '节点' not in total_info:
        total_info['节点'] = []
    total_info['节点'].append(current_info)

    if len(lines) == 1:
        return total_info

    first_line = lines[0]
    if '{' not in first_line:
        return total_info

    block_code = extract_block(ts_code)
    open_brace_index = block_code.find('{')
    close_brace_index = block_code.rfind('}')
    if open_brace_index == -1 or close_brace_index == -1 or close_brace_index < open_brace_index:
        return total_info

    inner_code = block_code[open_brace_index + 1:close_brace_index].strip()

    while inner_code:
        lines = inner_code.splitlines()
        if not lines or inner_code == '}':
            break
        process_code, count = process_by_state_machine(inner_code)
        inner_code = delete_annotation(count, inner_code)
        inner_lines = inner_code.splitlines()

        decorator_lines = []
        while inner_lines and inner_lines[0].strip().startswith('@'):
            decorator_lines.append(inner_lines.pop(0).strip())

        inner_code = '\n'.join(inner_lines).strip()

        inner_api_info = extract_info(api_info, process_code, True)

        if decorator_lines:
            inner_api_info['装饰器'] = decorator_lines

        inner_api_info['上级'] = current_info['名称']

        lines = inner_code.splitlines()
        member_lines = []
        brace_count = 0
        bracket_count = 0
        start_collecting = False

        for i, line in enumerate(lines):
            stripped = line.strip()
            if not stripped:
                continue
            if not start_collecting:
                member_lines.append(stripped)
                brace_count += stripped.count('{') - stripped.count('}')
                bracket_count += stripped.count('[') - stripped.count(']')
                start_collecting = True
                if brace_count <= 0 and bracket_count <= 0:
                    break
            else:
                member_lines.append(stripped)
                brace_count += stripped.count('{') - stripped.count('}')
                bracket_count += stripped.count('[') - stripped.count(']')
                if brace_count <= 0 and bracket_count <= 0:
                    break

        if not member_lines:
            break

        member_code = "\n".join(member_lines)
        inner_code = "\n".join(lines[len(member_lines):]).strip()

        if has_brace_in_first_line(member_code):
            if len(member_code.strip().splitlines()) == 1 and '{' in member_code and '}' in member_code:
                total_info = process_body(member_code, inner_api_info, total_info, deepth)
            else:
                deepth += 1
                total_info = process_body(member_code, inner_api_info, total_info, deepth)
                deepth -= 1
        else:
            total_info = process_body(member_code, inner_api_info, total_info, deepth)

    return total_info


def simplify_api(file_path: str):
    from pathlib import Path

    ts_code = Path(file_path).read_text(encoding='utf-8').strip()

    kit_info_start = ts_code.find('@kit')
    if kit_info_start == -1:
        return None

    kit_info_end = ts_code.find('\n', kit_info_start)
    kit_info = ts_code[kit_info_start:kit_info_end].strip()
    module_name = kit_info.replace(' ', '.')

    kit_info_end = ts_code.find('*/', kit_info_start) + 2
    ts_code = ts_code[kit_info_end:].strip()

    ts_code = delete_import_keep_comment(ts_code)

    raw_code_with_comments = ts_code

    blocks = split_top_level_blocks(ts_code)

    for block in blocks:
        block_pattern = re.escape(block[:30].strip())
        match = re.search(block_pattern + r'.*?\n}', ts_code, flags=re.DOTALL)
        if match:
            ts_code = ts_code.replace(match.group(), '')

    remaining_lines = [line.strip() for line in ts_code.splitlines() if line.strip()]
    single_decls = []
    buffer = []
    for line in remaining_lines:
        buffer.append(line)
        if line.endswith(';'):
            single_decls.append('\n'.join(buffer))
            buffer = []
    if buffer:
        single_decls.append('\n'.join(buffer))

    total_info = {'节点': []}

    total_info['节点'].append({
        '名称': module_name,
        '类型': 'module',
        '描述': '模块头结点，源自 @kit 注释',
        '层级': 0
    })

    kit_json = {'所属模块': module_name}

    if blocks:
        last_block = blocks[-1].strip()
        if re.match(r'^export\s*\{[\s\S]*}\s*;?$', last_block):
            blocks.pop()

    for i, block in enumerate(blocks):
        try:
            block_head = block.strip().splitlines()[0]

            if i == 0:
                if block_head == '/**':
                    comment_prefix, count = process_by_state_machine(block)
                    clean_code = delete_annotation(count, block)
                    api_info = extract_info(kit_json, comment_prefix, False)
                else:
                    block_index = raw_code_with_comments.find(block_head)
                    comment_prefix = raw_code_with_comments[:block_index] if block_index != -1 else ''
                    api_info = extract_info(kit_json, comment_prefix + '\n' + block, False)
                    clean_code = block
            else:
                process_code, count = process_by_state_machine(block)
                clean_code = delete_annotation(count, block)
                api_info = extract_info(kit_json, process_code, False)

            api_info['上级'] = module_name
            block = clean_code

            lines = block.splitlines()
            decorator_lines = []
            while lines and lines[0].strip().startswith('@'):
                decorator_lines.append(lines.pop(0).strip())
            block = '\n'.join(lines).strip()

            if decorator_lines:
                api_info['装饰器'] = decorator_lines

            total_info = process_body(block, api_info, total_info, 1)

        except Exception as e:
            print(f"[ERROR] 处理结构体块时出错: {e}")
            traceback.print_exc()

    for decl in single_decls:
        result = process_by_state_machine(decl)
        if result is None:
            continue
        process_code, count = result
        clean_decl = delete_annotation(count, decl)
        clean_decl = remove_inline_annotations(clean_decl)
        api_info = extract_info(kit_json, process_code, False)
        api_info['上级'] = module_name
        total_info = process_body(clean_decl, api_info, total_info, 1)

    return total_info


def process_all_api_files(api_dir: str, output_dir: str, log_path: str):
    api_path = Path(api_dir)
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    with open(log_path, 'w', encoding='utf-8') as log_file:
        sys.stdout = LoggerWriter(log_file)
        sys.stderr = LoggerWriter(log_file)

        for file in api_path.rglob("*"):
            if file.is_file() and file.stem != "permission":
                relative_path = file.relative_to(api_path)
                output_file = output_path / relative_path.with_suffix(".json")
                output_file.parent.mkdir(parents=True, exist_ok=True)

                log_message(f"处理文件: {file}", log_file)

                try:
                    result = simplify_api(str(file))
                    with output_file.open('w', encoding='utf-8') as f:
                        json.dump(result, f, ensure_ascii=False, indent=2)
                    log_message(f"写入成功: {output_file}", log_file)
                except Exception as e:
                    log_message(f"处理文件 {file} 出错: {e}", log_file)

        sys.stdout = sys.__stdout__
        sys.stderr = sys.__stderr__


def log_message(message: str, log_file):
    print(message)
    log_file.write(message + '\n')
    log_file.flush()


if __name__ == "__main__":
    api_folder = r"path\to\your\research\openharmony\ets\api"
    output_folder = r"path\to\your\research\clean_api"
    log_file_path = r"path\to\your\research\log\generate_json\log.txt"
    process_all_api_files(api_folder, output_folder, log_file_path)

