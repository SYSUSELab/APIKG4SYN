## 😊How to start?

### ⚙️Config

You must first configure your LLMs API key and URL, along with your Neo4j account credentials, within the config folder.

<img src="assets\config.png" alt="config">

### 📁Constructing Your HarmonyOS API Knowledge Graph
* Find the HarmonyOS API source code documentation
* Change the path and run to extract the files required for building the API KG.
    ```
    python construct_KG\extract_api_info.py
    ```
* Change the path and run to build an API KG in Neo4j format.
    ```
    python construct_KG\json2KG.py
    ```

### 📱Calculate the UE value

* UE_score.py: Run to obtain the UE value and write it to the API KG node information.
    ```
    python construct_KG\UE_score.py
    ```

### 🤖Single-API Data Generation
Modify the configuration and run the following code:
```
python generate_single_api_data\generate_single_api_data.py
```
Tips: You can modify the framework used in this file, including which specific module to generate it in and the quantity specified for each API.

### 🤖Multi-API Data Generation
Modify the configuration and run the following code:
```
python generate_multi_api_data\generate_multi_api_data.py
```
Tips: You can modify the framework used in this file, including which specific module to generate it in and the quantity specified for each API.

### 💯Test your LLM on HarmonyOS Benchmark
* First, create your DevEco project in DevEco Studio.
* Next, replace all file paths in the eval folder with your own paths.
* Then run the eval.py file to obtain the model's output for the benchmark.
```
python eval\eval.py
```
* Finally, run the following file to calculate the pass@1 pass rate.
```
python eval\run_with_eval_out_benchmark.py
```

## 📄HarmonyOS Benchmark
The dataset we constructed is HarmonyOS Benchmark.json, containing 108 entries.

<img src="assets\HarmonyOS Benchmark.png" alt="HarmonyOS Benchmark">

## 🗂️The Dataset
* 6400-Single-API.json: Includes the 6,400 Single-API data points mentioned in the paper.
* 1400-Multi-API.json: Includes the 1,600 Multi-API data points mentioned in the paper.
* OHBen.json: For the integrated version of the two aforementioned files, which constitutes the final dataset used for fine-tuning the LLM.

## 📂Other Information
* eval_data folder: Includes data from all experiments conducted in the paper and code for model generation.
* RQ3_group folder: Includes each group of data used in RQ3.

