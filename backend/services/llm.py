import os
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv

load_dotenv()
assert(os.getenv("OPENAI_API_KEY"), "OPENAI_API_KEY environment variable is required but not set.")

llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0
)