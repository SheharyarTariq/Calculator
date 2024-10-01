import requests
import os
import sys

# GitHub API token and other environment variables
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
REPO_OWNER = os.getenv("GITHUB_REPOSITORY_OWNER")
REPO_NAME = os.getenv("GITHUB_REPOSITORY").split("/")[-1]
PR_NUMBER = sys.argv[1]

# Function to post comments on the PR
def post_comment_on_pr(comment_body):
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/issues/{PR_NUMBER}/comments"
    headers = {
        "Authorization": f"Bearer {GITHUB_TOKEN}",
        "Content-Type": "application/json"
    }
    data = {
        "body": comment_body
    }
    response = requests.post(url, json=data, headers=headers)
    if response.status_code == 201:
        print("Comment posted successfully")
    else:
        print(f"Failed to post comment: {response.status_code} {response.text}")

# Example: Use previously generated ChatGPT review and post it
with open("gpt_review.txt", "r") as file:
    review_content = file.read()

post_comment_on_pr(review_content)
