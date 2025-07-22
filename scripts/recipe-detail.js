// Recipe Detail Page JavaScript

class RecipeDetailManager {
    constructor() {
        this.currentRecipe = null;
        this.currentServings = 4;
        this.originalServings = 4;
        this.checkedIngredients = new Set();
        this.favoriteRecipes = this.loadFavoriteRecipes();
        
        this.init();
    }

    init() {
        this.loadRecipeFromURL();
        this.setupEventListeners();
        this.generateRelatedRecipes();
        this.updateFavoriteButton();
        this.injectNotificationStyles();
    }

    loadRecipeFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get('id');
        
        if (recipeId) {
            this.currentRecipe = this.getRecipeById(recipeId);
            if (this.currentRecipe) {
                this.renderRecipeDetails();
            } else {
                this.showNotFound();
            }
        } else {
            this.showNotFound();
        }
    }

    getRecipeById(id) {
        // This would typically fetch from a database or API
        // For now, we'll generate a recipe based on the ID
        const recipes = this.generateSampleRecipes();
        return recipes.find(recipe => recipe.id === parseInt(id)) || this.generateRecipeFromId(id);
    }

    generateRecipeFromId(id) {
        const categories = ['breakfast', 'lunch', 'dinner', 'dessert', 'smoothie'];
        const category = categories[parseInt(id) % categories.length];
        
        const recipeNames = {
            breakfast: [
                'Avocado Toast Supreme', 'Quinoa Breakfast Bowl', 'Chia Seed Pudding',
                'Vegan Pancakes', 'Smoothie Bowl', 'Oatmeal Delight', 'Tofu Scramble',
                'Breakfast Burrito', 'Granola Parfait', 'Acai Bowl'
            ],
            lunch: [
                'Buddha Bowl', 'Quinoa Salad', 'Veggie Wrap', 'Lentil Soup',
                'Chickpea Curry', 'Stuffed Bell Peppers', 'Veggie Burger',
                'Mediterranean Bowl', 'Falafel Plate', 'Ramen Bowl'
            ],
            dinner: [
                'Pasta Primavera', 'Stuffed Eggplant', 'Veggie Stir Fry', 'Lentil Bolognese',
                'Mushroom Risotto', 'Cauliflower Steaks', 'Veggie Lasagna',
                'Thai Curry', 'Stuffed Portobello', 'Quinoa Stuffed Peppers'
            ],
            dessert: [
                'Chocolate Avocado Mousse', 'Vegan Cheesecake', 'Fruit Tart',
                'Coconut Ice Cream', 'Chia Pudding', 'Raw Brownies',
                'Banana Bread', 'Apple Crisp', 'Chocolate Truffles', 'Berry Parfait'
            ],
            smoothie: [
                'Green Goddess', 'Tropical Paradise', 'Berry Blast', 'Chocolate Protein',
                'Mango Lassi', 'Peanut Butter Banana', 'Antioxidant Boost',
                'Vanilla Dream', 'Detox Green', 'Strawberry Banana'
            ]
        };

        const names = recipeNames[category];
        const name = names[parseInt(id) % names.length];
        
        return {
            id: parseInt(id),
            title: name,
            category: category,
            description: this.generateDescription(name, category),
            image: `../../images/recipes/${category}-${(parseInt(id) % 20) + 1}.svg`,
            prepTime: Math.floor(Math.random() * 45) + 15,
            difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)],
            servings: 4,
            calories: Math.floor(Math.random() * 400) + 200,
            ingredients: this.generateIngredients(category),
            instructions: this.generateInstructions(category),
            nutrition: this.generateNutrition(),
            tags: this.generateTags(category)
        };
    }

    generateDescription(name, category) {
        const descriptions = {
            breakfast: `Start your day with this nutritious and delicious ${name.toLowerCase()}. Packed with plant-based protein and essential nutrients to fuel your morning.`,
            lunch: `A satisfying and wholesome ${name.toLowerCase()} that's perfect for your midday meal. Fresh, flavorful, and completely plant-based.`,
            dinner: `End your day with this comforting and nourishing ${name.toLowerCase()}. A complete meal that's both satisfying and healthy.`,
            dessert: `Indulge in this guilt-free ${name.toLowerCase()} that satisfies your sweet tooth while keeping it healthy and vegan.`,
            smoothie: `Refresh and energize with this nutrient-packed ${name.toLowerCase()}. Perfect for any time of day when you need a healthy boost.`
        };
        return descriptions[category];
    }

    generateIngredients(category) {
        const baseIngredients = {
            breakfast: [
                '2 slices whole grain bread',
                '1 ripe avocado',
                '1 tbsp lemon juice',
                '1/4 cup cherry tomatoes',
                '2 tbsp hemp seeds',
                'Salt and pepper to taste',
                '1 tbsp olive oil',
                'Fresh herbs for garnish'
            ],
            lunch: [
                '1 cup quinoa',
                '2 cups vegetable broth',
                '1 can chickpeas',
                '2 cups mixed vegetables',
                '1/4 cup tahini',
                '2 tbsp lemon juice',
                '1 tbsp olive oil',
                'Fresh herbs and spices'
            ],
            dinner: [
                '12 oz whole wheat pasta',
                '2 cups mixed vegetables',
                '1 can diced tomatoes',
                '3 cloves garlic',
                '1 onion, diced',
                '2 tbsp olive oil',
                'Fresh basil and oregano',
                'Nutritional yeast'
            ],
            dessert: [
                '2 ripe avocados',
                '1/4 cup cocoa powder',
                '1/4 cup maple syrup',
                '1 tsp vanilla extract',
                '1/4 cup coconut milk',
                'Pinch of salt',
                'Fresh berries for topping',
                'Mint leaves for garnish'
            ],
            smoothie: [
                '1 frozen banana',
                '1 cup spinach',
                '1/2 cup coconut milk',
                '1 tbsp almond butter',
                '1 tbsp chia seeds',
                '1 tsp maple syrup',
                '1/2 cup ice',
                'Fresh fruit for topping'
            ]
        };
        return baseIngredients[category] || baseIngredients.lunch;
    }

    generateInstructions(category) {
        const baseInstructions = {
            breakfast: [
                'Toast the bread slices until golden brown.',
                'Mash the avocado with lemon juice, salt, and pepper.',
                'Spread the avocado mixture evenly on toast.',
                'Top with cherry tomatoes and hemp seeds.',
                'Drizzle with olive oil and garnish with fresh herbs.',
                'Serve immediately while toast is still warm.'
            ],
            lunch: [
                'Rinse quinoa and cook in vegetable broth until fluffy.',
                'Drain and rinse chickpeas, then roast until crispy.',
                'Steam or sauté mixed vegetables until tender.',
                'Whisk together tahini, lemon juice, and olive oil for dressing.',
                'Combine quinoa, chickpeas, and vegetables in a bowl.',
                'Drizzle with dressing and garnish with fresh herbs.'
            ],
            dinner: [
                'Cook pasta according to package directions until al dente.',
                'Heat olive oil in a large pan and sauté garlic and onion.',
                'Add mixed vegetables and cook until tender.',
                'Stir in diced tomatoes and simmer for 10 minutes.',
                'Toss cooked pasta with vegetable sauce.',
                'Garnish with fresh herbs and nutritional yeast.'
            ],
            dessert: [
                'Scoop avocado flesh into a food processor.',
                'Add cocoa powder, maple syrup, and vanilla.',
                'Blend until smooth and creamy.',
                'Add coconut milk gradually until desired consistency.',
                'Taste and adjust sweetness as needed.',
                'Chill for 30 minutes before serving with berries.'
            ],
            smoothie: [
                'Add all ingredients to a high-speed blender.',
                'Blend on high until smooth and creamy.',
                'Add more liquid if needed for desired consistency.',
                'Taste and adjust sweetness with maple syrup.',
                'Pour into glasses and top with fresh fruit.',
                'Serve immediately for best texture.'
            ]
        };
        return baseInstructions[category] || baseInstructions.lunch;
    }

    generateNutrition() {
        return {
            calories: Math.floor(Math.random() * 400) + 200,
            protein: Math.floor(Math.random() * 20) + 10,
            carbs: Math.floor(Math.random() * 50) + 30,
            fat: Math.floor(Math.random() * 15) + 8,
            fiber: Math.floor(Math.random() * 10) + 5,
            sugar: Math.floor(Math.random() * 15) + 5
        };
    }

    generateTags(category) {
        const allTags = {
            breakfast: ['quick', 'energizing', 'protein-rich', 'gluten-free'],
            lunch: ['filling', 'balanced', 'fresh', 'colorful'],
            dinner: ['comfort-food', 'family-friendly', 'hearty', 'satisfying'],
            dessert: ['sweet', 'indulgent', 'guilt-free', 'creamy'],
            smoothie: ['refreshing', 'nutritious', 'antioxidant-rich', 'energizing']
        };
        
        const baseTags = ['vegan', 'healthy', 'plant-based'];
        const categoryTags = allTags[category] || [];
        
        return [...baseTags, ...categoryTags.slice(0, 3)];
    }

    generateSampleRecipes() {
        // Generate a few sample recipes for demonstration
        const recipes = [];
        for (let i = 1; i <= 20; i++) {
            recipes.push(this.generateRecipeFromId(i.toString()));
        }
        return recipes;
    }

    renderRecipeDetails() {
        if (!this.currentRecipe) return;

        // Update page title
        document.title = `${this.currentRecipe.title} - Vegan Recipe`;

        // Update breadcrumb
        const breadcrumbCurrent = document.querySelector('.breadcrumb-current');
        if (breadcrumbCurrent) {
            breadcrumbCurrent.textContent = this.currentRecipe.title;
        }

        // Update recipe header
        this.updateRecipeHeader();
        
        // Update recipe content
        this.updateRecipeContent();
        
        // Update related recipes
        this.generateRelatedRecipes();
    }

    updateRecipeHeader() {
        const recipe = this.currentRecipe;
        
        // Update image
        const mainImage = document.querySelector('.recipe-main-image');
        if (mainImage) {
            mainImage.src = recipe.image;
            mainImage.alt = recipe.title;
        }

        // Update category badge
        const categoryBadge = document.querySelector('.recipe-category-badge');
        if (categoryBadge) {
            categoryBadge.textContent = recipe.category;
        }

        // Update title and description
        const title = document.querySelector('.recipe-title');
        if (title) {
            title.textContent = recipe.title;
        }

        const description = document.querySelector('.recipe-description');
        if (description) {
            description.textContent = recipe.description;
        }

        // Update meta information
        this.updateMetaInfo();
    }

    updateMetaInfo() {
        const recipe = this.currentRecipe;
        const metaItems = document.querySelectorAll('.meta-item');
        
        const metaData = [
            { label: 'Prep Time', value: `${recipe.prepTime} min` },
            { label: 'Difficulty', value: recipe.difficulty },
            { label: 'Servings', value: recipe.servings },
            { label: 'Calories', value: `${recipe.calories} kcal` }
        ];

        metaItems.forEach((item, index) => {
            if (metaData[index]) {
                const label = item.querySelector('.meta-label');
                const value = item.querySelector('.meta-value');
                if (label) label.textContent = metaData[index].label;
                if (value) value.textContent = metaData[index].value;
            }
        });
    }

    updateRecipeContent() {
        this.updateIngredients();
        this.updateInstructions();
        this.updateNutrition();
        this.updateTags();
    }

    updateIngredients() {
        const ingredientsList = document.querySelector('.ingredients-list');
        if (!ingredientsList) return;

        ingredientsList.innerHTML = '';
        
        this.currentRecipe.ingredients.forEach((ingredient, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="ingredient-checkbox" data-index="${index}"></div>
                <span class="ingredient-text">${this.adjustIngredientQuantity(ingredient)}</span>
            `;
            ingredientsList.appendChild(li);
        });
    }

    adjustIngredientQuantity(ingredient) {
        const ratio = this.currentServings / this.originalServings;
        
        // Simple quantity adjustment (this could be more sophisticated)
        return ingredient.replace(/\d+(\.\d+)?/g, (match) => {
            const num = parseFloat(match);
            const adjusted = (num * ratio).toFixed(1);
            return adjusted.endsWith('.0') ? Math.round(adjusted).toString() : adjusted;
        });
    }

    updateInstructions() {
        const instructionsList = document.querySelector('.instructions-list');
        if (!instructionsList) return;

        instructionsList.innerHTML = '';
        
        this.currentRecipe.instructions.forEach(instruction => {
            const li = document.createElement('li');
            li.textContent = instruction;
            instructionsList.appendChild(li);
        });
    }

    updateNutrition() {
        const nutritionGrid = document.querySelector('.nutrition-grid');
        if (!nutritionGrid) return;

        const nutrition = this.currentRecipe.nutrition;
        const nutritionItems = [
            { label: 'Calories', value: nutrition.calories, unit: 'kcal' },
            { label: 'Protein', value: nutrition.protein, unit: 'g' },
            { label: 'Carbs', value: nutrition.carbs, unit: 'g' },
            { label: 'Fat', value: nutrition.fat, unit: 'g' },
            { label: 'Fiber', value: nutrition.fiber, unit: 'g' },
            { label: 'Sugar', value: nutrition.sugar, unit: 'g' }
        ];

        nutritionGrid.innerHTML = '';
        
        nutritionItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'nutrition-item';
            div.innerHTML = `
                <span class="nutrition-value">${item.value}<span class="nutrition-unit">${item.unit}</span></span>
                <span class="nutrition-label">${item.label}</span>
            `;
            nutritionGrid.appendChild(div);
        });
    }

    updateTags() {
        const tagsContainer = document.querySelector('.recipe-tags');
        if (!tagsContainer) return;

        tagsContainer.innerHTML = '';
        
        this.currentRecipe.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'recipe-tag';
            span.textContent = tag;
            tagsContainer.appendChild(span);
        });
    }

    generateRelatedRecipes() {
        const relatedGrid = document.querySelector('.related-recipes-grid');
        if (!relatedGrid) return;

        const relatedRecipes = [];
        const currentCategory = this.currentRecipe?.category || 'lunch';
        
        // Generate 3 related recipes
        for (let i = 0; i < 3; i++) {
            const id = Math.floor(Math.random() * 100) + 1;
            const recipe = this.generateRecipeFromId(id.toString());
            recipe.category = currentCategory; // Keep same category for related recipes
            relatedRecipes.push(recipe);
        }

        relatedGrid.innerHTML = '';
        
        relatedRecipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'related-recipe-card';
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}" class="related-recipe-image">
                <div class="related-recipe-content">
                    <h4 class="related-recipe-title">${recipe.title}</h4>
                    <div class="related-recipe-meta">
                        <span><i class="fas fa-clock"></i> ${recipe.prepTime} min</span>
                        <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => {
                window.location.href = `recipe-detail.html?id=${recipe.id}`;
            });
            
            relatedGrid.appendChild(card);
        });
    }

    setupEventListeners() {
        // Servings adjuster
        const decreaseBtn = document.querySelector('.quantity-btn[data-action="decrease"]');
        const increaseBtn = document.querySelector('.quantity-btn[data-action="increase"]');
        
        if (decreaseBtn) {
            decreaseBtn.addEventListener('click', () => this.adjustServings(-1));
        }
        
        if (increaseBtn) {
            increaseBtn.addEventListener('click', () => this.adjustServings(1));
        }

        // Ingredient checkboxes
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('ingredient-checkbox')) {
                this.toggleIngredient(e.target);
            }
        });

        // Favorite button
        const favoriteBtn = document.querySelector('.favorite-btn-large');
        if (favoriteBtn) {
            favoriteBtn.addEventListener('click', () => this.toggleFavorite());
        }

        // Action buttons
        this.setupActionButtons();

        // Restaurant cards
        this.setupRestaurantCards();
    }

    setupActionButtons() {
        // Print recipe
        const printBtn = document.querySelector('.btn[data-action="print"]');
        if (printBtn) {
            printBtn.addEventListener('click', () => window.print());
        }

        // Share recipe
        const shareBtn = document.querySelector('.btn[data-action="share"]');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => this.shareRecipe());
        }

        // Shopping list
        const shoppingBtn = document.querySelector('.shopping-list-btn');
        if (shoppingBtn) {
            shoppingBtn.addEventListener('click', () => this.addToShoppingList());
        }
    }

    setupRestaurantCards() {
        const restaurantBtns = document.querySelectorAll('.restaurant-btn');
        restaurantBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const restaurantName = e.target.closest('.restaurant-card').querySelector('h3').textContent;
                this.showNotification(`Opening ${restaurantName} in a new tab...`, 'success');
                // In a real app, this would open the restaurant's website
                setTimeout(() => {
                    window.open('#', '_blank');
                }, 1000);
            });
        });
    }

    adjustServings(change) {
        const newServings = Math.max(1, this.currentServings + change);
        if (newServings !== this.currentServings) {
            this.currentServings = newServings;
            
            // Update display
            const display = document.querySelector('.quantity-display');
            if (display) {
                display.textContent = this.currentServings;
            }
            
            // Update ingredients
            this.updateIngredients();
            
            this.showNotification(`Adjusted recipe for ${this.currentServings} servings`, 'success');
        }
    }

    toggleIngredient(checkbox) {
        const index = parseInt(checkbox.dataset.index);
        const ingredientText = checkbox.nextElementSibling;
        
        if (this.checkedIngredients.has(index)) {
            this.checkedIngredients.delete(index);
            checkbox.classList.remove('checked');
            ingredientText.classList.remove('checked');
        } else {
            this.checkedIngredients.add(index);
            checkbox.classList.add('checked');
            ingredientText.classList.add('checked');
        }
    }

    toggleFavorite() {
        if (!this.currentRecipe) return;
        
        const recipeId = this.currentRecipe.id;
        const favoriteBtn = document.querySelector('.favorite-btn-large');
        
        if (this.favoriteRecipes.includes(recipeId)) {
            this.favoriteRecipes = this.favoriteRecipes.filter(id => id !== recipeId);
            favoriteBtn.classList.remove('active');
            this.showNotification('Removed from favorites', 'info');
        } else {
            this.favoriteRecipes.push(recipeId);
            favoriteBtn.classList.add('active');
            this.showNotification('Added to favorites!', 'success');
        }
        
        this.saveFavoriteRecipes();
    }

    updateFavoriteButton() {
        if (!this.currentRecipe) return;
        
        const favoriteBtn = document.querySelector('.favorite-btn-large');
        if (favoriteBtn && this.favoriteRecipes.includes(this.currentRecipe.id)) {
            favoriteBtn.classList.add('active');
        }
    }

    shareRecipe() {
        if (navigator.share) {
            navigator.share({
                title: this.currentRecipe.title,
                text: this.currentRecipe.description,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href).then(() => {
                this.showNotification('Recipe link copied to clipboard!', 'success');
            });
        }
    }

    addToShoppingList() {
        const ingredients = this.currentRecipe.ingredients;
        const shoppingList = {
            recipeName: this.currentRecipe.title,
            ingredients: ingredients,
            servings: this.currentServings,
            date: new Date().toISOString()
        };
        
        // Save to localStorage (in a real app, this would sync with a backend)
        const existingLists = JSON.parse(localStorage.getItem('shoppingLists') || '[]');
        existingLists.push(shoppingList);
        localStorage.setItem('shoppingLists', JSON.stringify(existingLists));
        
        this.showNotification('Ingredients added to shopping list!', 'success');
    }

    loadFavoriteRecipes() {
        return JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    }

    saveFavoriteRecipes() {
        localStorage.setItem('favoriteRecipes', JSON.stringify(this.favoriteRecipes));
    }

    showNotFound() {
        const main = document.querySelector('main');
        if (main) {
            main.innerHTML = `
                <div class="container" style="text-align: center; padding: 4rem 0;">
                    <h1>Recipe Not Found</h1>
                    <p>Sorry, the recipe you're looking for doesn't exist.</p>
                    <a href="recipes.html" class="btn btn-primary">Back to Recipes</a>
                </div>
            `;
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    injectNotificationStyles() {
        if (document.getElementById('notification-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                z-index: 10000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                max-width: 300px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            .notification-success {
                background: #4CAF50;
            }
            
            .notification-error {
                background: #f44336;
            }
            
            .notification-info {
                background: #2196F3;
            }
            
            .notification-warning {
                background: #ff9800;
            }
        `;
        
        document.head.appendChild(style);
    }
}

// Initialize the recipe detail manager when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new RecipeDetailManager();
});

// Add some utility functions for recipe navigation
function goToRecipe(recipeId) {
    window.location.href = `recipe-detail.html?id=${recipeId}`;
}

function goBackToRecipes() {
    window.location.href = 'recipes.html';
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RecipeDetailManager;
}