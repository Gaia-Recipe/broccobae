# BroccoBae - Vegan Recipe Website

## Project Overview
BroccoBae is a comprehensive vegan recipe website that offers a wide range of plant-based recipes, meal plans, and community features. The website is designed to provide a seamless user experience with beautiful SVG images and responsive design.

## Features
- **Recipe Collection**: Browse through a diverse collection of vegan recipes across multiple cuisines
- **Meal Plans**: Access curated meal plans for different dietary needs and preferences
- **Cuisine Exploration**: Discover recipes organized by cuisine types (American, Asian, Indian, Mediterranean, Mexican)
- **Community Section**: Connect with other vegan food enthusiasts
- **Shop**: Browse recommended vegan products and ingredients

## Technical Details
- **Frontend**: HTML, CSS, JavaScript
- **Images**: SVG format for better performance and scalability
- **Local Development**: Python's built-in HTTP server for testing

## Getting Started

### Prerequisites
- Git
- Web browser
- Python (for local development server)

### Running Locally
To run the website locally:

```bash
# Clone the repository
git clone [repository-url]

# Navigate to the project directory
cd [project-directory]

# Start a local server
python -m http.server 8080
```

Then open your browser and navigate to `http://localhost:8080`

## Project Structure
- `*.html` - Main website pages
- `styles/` - CSS stylesheets
- `scripts/` - JavaScript files
- `images/` - SVG images for the website
- `src/` - Additional source files

## Image Generation
The project includes several Python scripts for generating and managing SVG images:
- `generate_recipe_images.py`
- `generate_cuisine_images.py`
- `generate_missing_images.py`
- `generate_realistic_images.py`
- `fix_image_urls.py`
- `fix_external_images.py`