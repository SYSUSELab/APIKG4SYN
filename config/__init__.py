from neo4j import GraphDatabase
from pydantic import SecretStr
from langchain_openai import ChatOpenAI
from langchain_ollama import ChatOllama

API = "Your API Key"
URL = "Your URL"

NEO4J_URI = "bolt://localhost:7687"
NEO4J_AUTH = ("name", "password")

EMBED_MODEL = "sentence-transformers/all-MiniLM-L6-v2"

driver = GraphDatabase.driver(NEO4J_URI, auth=NEO4J_AUTH)

llm = ChatOpenAI(api_key=SecretStr(API), model="model name", base_url=URL)

ollama_llm = ChatOllama(model="model name", temperature=0.3)

langsmith_api = "Your API"