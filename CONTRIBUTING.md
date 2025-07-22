# Contributing to BroccoBae

Thank you for your interest in contributing to BroccoBae! This document provides guidelines and instructions for contributing to this project.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a new branch** for your feature or bugfix
4. **Make your changes**
5. **Test your changes** thoroughly
6. **Commit your changes** with clear, descriptive commit messages
7. **Push to your fork** and submit a pull request

## Development Workflow

### Setting Up Your Environment

```bash
# Clone the repository
git clone [repository-url]
cd [project-directory]

# Start the development server
python -m http.server 8080
```

### Using the Git Helper Script

This project includes a helper script for common Git operations:

```bash
# Show status
./git-helpers.sh status

# Create a new branch
./git-helpers.sh branch 'feature-name'

# Commit changes
./git-helpers.sh commit 'Your descriptive commit message'

# Push changes
./git-helpers.sh push

# Pull latest changes
./git-helpers.sh pull
```

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Keep markup clean and minimal

### CSS
- Follow the existing naming conventions
- Group related properties
- Comment complex or non-obvious styles

### JavaScript
- Follow camelCase naming convention for variables and functions
- Use ES6+ features where appropriate
- Add comments for complex logic

### Images
- Use SVG format for all images when possible
- Optimize images for web use
- Use descriptive filenames

## Pull Request Process

1. Ensure your code follows the style guidelines
2. Update documentation if necessary
3. Include a clear description of the changes in your pull request
4. Link any related issues in your pull request description

## Reporting Bugs

When reporting bugs, please include:

- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser and operating system information

## Feature Requests

Feature requests are welcome! Please provide:

- A clear description of the feature
- The motivation behind the feature
- Any potential implementation details you can think of

## Code of Conduct

Please be respectful and considerate of others when contributing to this project. We aim to foster an inclusive and welcoming community.

## License

By contributing to BroccoBae, you agree that your contributions will be licensed under the same license as the project.