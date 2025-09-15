import os
import json
from utils import collect_error
import subprocess
import re

project_root = r"path/to/your/HarmonyOS(DevEco Studio)/project"

def extract_and_write_code_from_test(test_code: str, generated_code: str, project_root: str, model_name: str):
    import_pattern = r"from\s+['\"](\.\./main/ets/[^'\"]+)['\"]"
    match = re.search(import_pattern, test_code)
    if not match:
        print(f"[WARN] 没有找到 ../main/ets/ 路径的 import，模型: {model_name}")
        return
    relative_path = match.group(1).replace("../main/ets/", "")
    target_path = os.path.join(project_root, "main", "ets", relative_path + ".ets")
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(generated_code)
    print(f"[INFO] ({model_name}) 写入代码到: {target_path}")

def write_local_unit_test(test_code: str):
    test_path = os.path.join(project_root, "test", "LocalUnit.test.ets")
    os.makedirs(os.path.dirname(test_path), exist_ok=True)
    with open(test_path, "w", encoding="utf-8") as f:
        f.write(test_code)
    return test_path

def simulate_compile(file_path: str):
    try:
        subprocess.run([r"path\to\your\feedback.bat", file_path],
                       shell=True, check=True)
        errors = collect_error(
            r"path\to\your\log\feedback\hvigor_test_output.log",
            r"path\to\your\log\feedback\hvigor_diagnostics.json"
        )
        if errors:
            print("[FAILED] 编译执行失败")
            return False, errors
        else:
            print("[SUCCESS] 编译通过，无错误")
            return True, None
    except subprocess.CalledProcessError as e:
        print(f"[SIMULATE ERROR] 批处理失败: {e}")
        return False, [{"message": "batch script failed"}]

def process_json_file(json_path: str, model_name: str):
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    passed_count = 0
    total = len(data)

    for item in data['benchmark_results']:
        test = item.get("test", "")
        generated_code = item.get("model_output", "// 生成代码为空")
        extract_and_write_code_from_test(test, generated_code, project_root, model_name)
        local_test_path = write_local_unit_test(test)
        passed, errors = simulate_compile(local_test_path)
        item["test_passed"] = passed
        if passed:
            passed_count += 1

    pass_at_1 = passed_count / total if total > 0 else 0
    print(f"[{model_name}] pass@1: {pass_at_1:.2%} ({passed_count}/{total})")

    output_path = json_path.replace(".json", f"_results.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"[INFO] 处理完成，结果保存到: {output_path}")

if __name__ == "__main__":
    process_json_file(r"path\to\your\eval_out\result.json", "model_name")




