import re
import json

def clean_ansi(text):
    return re.sub(r'\x1b\[[0-9;]*m', '', text)

def extract_diagnostics(log_path):
    with open(log_path, 'r', encoding='utf-8') as f:
        content = f.read()

    content = clean_ansi(content)

    pattern = re.compile(
        r'(?P<index>\d+)\s+(?P<level>ERROR|WARN):\s+'
        r'(?P<category>ArkTS:[A-Z]+)\s+File:\s+(?P<file>.*?):(?P<line>\d+):(?P<column>\d+)\s*\n\s*(?P<message>.+?)\s*(?=\n\d+\s+(?:ERROR|WARN)|\nCOMPILE RESULT|$)',
        re.DOTALL
    )

    diagnostics = []
    for match in pattern.finditer(content):
        diagnostics.append({
            "index": int(match.group("index")),
            "level": match.group("level"),
            "category": match.group("category"),
            "file": match.group("file").strip(),
            "line": int(match.group("line")),
            "column": int(match.group("column")),
            "message": match.group("message").strip()
        })

    return diagnostics

def collect_error(log_path, output_path):
    results = extract_diagnostics(log_path)
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    if results:
        print(f'[CHECKING] 共提取 {len(results)} 条诊断信息，已写入 {output_path}')
        return results
    else:
        print(f'[CHECKING] 通过测试！')
        return 0


if __name__ == '__main__':
    log_file = r'path\to\your\log\feedback\hvigor_test_output.log'
    output_file = r'path\to\your\log\feedback\hvigor_diagnostics.json'

    results = extract_diagnostics(log_file)

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print(f'[CHECKING] 共提取 {len(results)} 条诊断信息，已写入 {output_file}')
