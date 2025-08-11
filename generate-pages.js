// Script to generate all category pages
const fs = require('fs');
const path = require('path');

const categories = [
    { name: 'dessert', title: 'Dessert Recipes', description: 'Sweet treats without any animal products' },
    { name: 'smoothie', title: 'Smoothie Recipes', description: 'Refreshing blended drinks packed with nutrients' },
    { name: 'asian', title: 'Asian Recipes', description: 'Flavors from across Asia in plant-based form' },
    { name: 'mexican', title: 'Mexican Recipes', description: 'Spicy and vibrant Mexican-inspired dishes' },
    { name: 'indian', title: 'Indian Recipes', description: 'Rich and aromatic Indian cuisine' },
    { name: 'american', title: 'American Recipes', description: 'Classic American comfort food, veganized' },
    { name: 'mediterranean', title: 'Mediterranean Recipes', description: 'Fresh and healthy Mediterranean flavors' },
    { name: 'high-protein', title: 'High Protein Recipes', description: 'Protein-rich meals for active lifestyles' },
    { name: 'low-carb', title: 'Low Carb Recipes', description: 'Low-carbohydrate options for weight management' },
    { name: 'gluten-free', title: 'Gluten Free Recipes', description: 'Delicious recipes without gluten' },
    { name: 'budget-friendly', title: 'Budget Friendly Recipes', description: 'Affordable meals that don\'t break the bank' },
    { name: 'weight-loss', title: 'Weight Loss Recipes', description: 'Light and nutritious meals for healthy weight loss' }
];

const generateCategoryPage = (category) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${category.title} - Vegan Recipe Collection</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1 id="category-title">${category.title}</h1>
            <p>${category.description}</p>
            <a href="vegan-recipes-index.html" class="nav-link">← Back to Home</a>
        </div>
    </header>

    <main class="container">
        <div id="recipe-grid" class="recipe-grid">
            <div class="loading">Loading ${category.name} recipes...</div>
        </div>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2024 Vegan Recipe Collection. All recipes are 100% plant-based.</p>
        </div>
    </footer>

    <script src="assets/recipes.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>`;
};

categories.forEach(category => {
    const filename = `${category.name}.html`;
    const content = generateCategoryPage(category);
    
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`Generated ${filename}`);
});

console.log('All category pages generated successfully!');