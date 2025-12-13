from langchain_community.tools.google_search import GoogleSearchRun
from langchain.agents import create_agent
from llm import llm

def run_research(query):
    """
    Uses web search tool to gather info.
    """
    search = GoogleSearchRun()

    research_agent = create_agent(
        tools=[search],
        llm=llm,
    )

    result = research_agent.run(f"Search the web and gather key information on: {query}")

    return result