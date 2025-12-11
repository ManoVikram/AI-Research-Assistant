from services.agents.research import run_research
from services.agents.summary import run_summary
from services.agents.critique import run_critique

class ResearchPipeline:
    def __init__(self):
        pass

    @staticmethod
    def execute(query):
        """
        Full pipeline:
        #1 - Research (uses web search tool)
        #2 - Summarize
        #3 - Critique

        Returns a dict
        """
        # Step 1 - Research
        research_data = run_research(query=query)

        # Step 2 - Summarize
        summary = run_summary(research_data=research_data)

        # Step 3 - Critique
        critique = run_critique(summary=summary)

        return {
            "research_data": research_data,
            "summary": summary,
            "critique": critique
        }