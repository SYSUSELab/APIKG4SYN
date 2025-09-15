question_prompt = """
You are given the definition of an {framework} API(s), including its methods, properties, and documentation.

[API]: 
{API_name}

[API Members]:
{API_member}

Your task: Design **{num} simple programming exercises** based on these API.

[Guidelines]:
1. For each exercise, first **reason step by step** about how it can be solved using both the **sub-API methods/properties** and the **parent API methods/properties**.  
2. Each exercise must **explicitly specify the exact API methods/properties that must be used to solve the problem** (e.g., "use the `sort` and `remove` methods").  
3. Each exercise must combine **at least two different methods/properties**.  
4. Output only the **final problem statements**, not the reasoning process.

[Example]:
problem 1: ["Write a function that takes a string and uses the `Stack` methods `push`, `pop`, `isEmpty`, and the `set` method of `HashMap` to implement bracket matching."]

[Output Format]:
{{
    "problem":{{
      ["Problem statement with explicit API usage"],
      ["Problem statement with explicit API usage"],
      ...}}
}}
"""

code_prompt = """
You are an expert {framework} developer and need to implement code for the following question:

Question: {question}

Here is the API definition you should use:
[API]:
{API_name}

[Function]:
{function}

[Meta data]:
{meta_data}

[Relevant API details]:
{corpus}

Please write the implementation code. Return only the code without any explanations.

[Requirements]:
1. The code must use only the provided sub-methods and properties of these APIs, and the use of any other methods or properties is strictly prohibited.
2. All functions, classes, or implementations must be marked with export.
3. Usage of 'any' or 'unknown' types is prohibited.
4. The first line must include:
   import {{{name}}} from '{module}';
5. {type_statement}

[Output Format]:
{{"code": "Your implementation code"}}
"""