from llm import llm

def run_summary(research_data):
    """
    Summarizes the research data provided.
    """
    prompt = f"Summarize the following research data in 5 - 7 concise bullet points: \n\n{research_data}"
    messages = [
        {"role": "system", "content": "You are a helpful assistant that summarizes information concisely"},
        {"role": "user", "content": prompt}
    ]

    summary = llm.invoke(input=messages)

    return summary.text