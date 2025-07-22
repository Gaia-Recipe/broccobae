#!/bin/bash

# Git helper functions for BroccoBae project

# Function to commit changes with a message
commit_changes() {
  if [ -z "$1" ]; then
    echo "Error: Please provide a commit message"
    echo "Usage: ./git-helpers.sh commit 'Your commit message'"
    return 1
  fi
  
  git add .
  git commit -m "$1"
  echo "Changes committed with message: $1"
}

# Function to push changes to remote repository
push_changes() {
  git push origin $(git branch --show-current)
  echo "Changes pushed to remote repository"
}

# Function to pull latest changes
pull_latest() {
  git pull origin $(git branch --show-current)
  echo "Latest changes pulled from remote repository"
}

# Function to create a new branch
create_branch() {
  if [ -z "$1" ]; then
    echo "Error: Please provide a branch name"
    echo "Usage: ./git-helpers.sh branch 'branch-name'"
    return 1
  fi
  
  git checkout -b "$1"
  echo "Created and switched to new branch: $1"
}

# Function to show status with a cleaner output
show_status() {
  echo "=== Git Status ==="
  git status -s
  echo "================="
}

# Main script logic
case "$1" in
  commit)
    commit_changes "$2"
    ;;
  push)
    push_changes
    ;;
  pull)
    pull_latest
    ;;
  branch)
    create_branch "$2"
    ;;
  status)
    show_status
    ;;
  *)
    echo "BroccoBae Git Helper"
    echo "Usage: ./git-helpers.sh [command] [arguments]"
    echo ""
    echo "Available commands:"
    echo "  commit 'message'  - Add and commit all changes with the provided message"
    echo "  push              - Push changes to remote repository"
    echo "  pull              - Pull latest changes from remote repository"
    echo "  branch 'name'     - Create and switch to a new branch"
    echo "  status            - Show current Git status in a compact format"
    ;;
esac