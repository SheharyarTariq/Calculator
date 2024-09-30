import openai
import os
from github import Github

# Set up your API keys from environment variables
openai.api_key = os.getenv("OPENAI_API_KEY")
personal_access_token = os.getenv("PAT")

# Initialize GitHub API client with the Personal Access Token (PAT)
g = Github(personal_access_token)

# Get the repo and pull request details
repo_name = os.getenv('GITHUB_REPOSITORY')
pull_request_number = os.getenv('GITHUB_EVENT_PULL_REQUEST_NUMBER')
repo = g.get_repo(repo_name)
pull_request = repo.get_pull(int(pull_request_number))

# Lint file logic remains the same
