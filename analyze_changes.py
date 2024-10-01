import openai
import sys
import os

# OpenAI API key from environment
openai.api_key = os.getenv("OPENAI_API_KEY")

# Get the list of changed files from GitHub Actions
changed_files = sys.argv[1].split()

def get_file_contents(file_path):
    with open(file_path, "r") as file:
        return file.read()

def analyze_code_with_gpt(file_path, code_content):
    prompt = f"Please review the following code changes in the file '{file_path}' and suggest any improvements or highlight potential issues:\n\n{code_content}"

    response = openai.Completion.create(
        engine="gpt-4",  # You can use other models like gpt-3.5-turbo if available
        prompt=prompt,
        max_tokens=500,
        temperature=0.2
    )
    return response.choices[0].text.strip()

# Analyze each file
for file in changed_files:
    if os.path.exists(file):
        file_content = get_file_contents(file)
        review_comment = analyze_code_with_gpt(file, file_content)
        print(f"Review for {file}:\n{review_comment}")
