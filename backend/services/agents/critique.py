from llm import llm

def run_critique(summary):
    """
    Critiques the provided summary for bias, missing info, legal consistency
    """
    prompt = f"""
    Critique the following summary:
    - Identify any potential biases
    - Highlight any missing critical information
    - Sugget improvements

    Summary:
    {summary}
    """
    messages = [
        {"role": "system", "content": "You are an expert analyst skilled in analyzing information for bias and completeness."},
        {"role": "user", "content": prompt}
    ]

    critique = llm.invoke(input=messages)

    return critique.text