// Recipe Detail Page JavaScript

class RecipeDetailManager {
    constructor() {
        this.currentRecipe = null;
        this.currentServings = 1;
        this.originalServings = 1;
        this.checkedIngredients = new Set();
        this.favoriteRecipes = this.loadFavoriteRecipes();
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadRecipeFromURL();
        this.injectNotificationStyles();
    }

    loadRecipeFromURL() {
        // Get recipe ID from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get('id');
        
        if (recipeId) {
            this.currentRecipe = this.getRecipeById(recipeId);
            if (this.currentRecipe) {
                this.renderRecipeDetails();
                return;
            }
        }
        
        // Default to Avocado Toast recipe if no ID or recipe not found
        this.currentRecipe = this.getDefaultRecipe();
        this.renderRecipeDetails();
    }

    getRecipeById(id) {
        // Sample recipe database - can be expanded
        const recipes = {
            'avocado-toast': this.getDefaultRecipe(),
            'quinoa-salad': {
                id: 'quinoa-salad',
                title: 'Mediterranean Quinoa Salad',
                category: 'Salads',
                image: './images/stories/featuredrecipe2.png',
                prepTime: '15 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                ingredients: [
                    { amount: '1 cup', name: 'quinoa, cooked and cooled' },
                    { amount: '1/2 cup', name: 'cherry tomatoes, halved' },
                    { amount: '1/4 cup', name: 'red onion, diced' },
                    { amount: '1/4 cup', name: 'kalamata olives, pitted' },
                    { amount: '2 tbsp', name: 'olive oil' },
                    { amount: '1 tbsp', name: 'lemon juice' },
                    { amount: 'Optional:', name: 'fresh herbs, cucumber' }
                ],
                instructions: [
                    'Cook quinoa according to package directions and let cool.',
                    'Dice the red onion and halve the cherry tomatoes.',
                    'Combine quinoa, tomatoes, onion, and olives in a large bowl.',
                    'Whisk together olive oil and lemon juice.',
                    'Pour dressing over salad and toss to combine.',
                    'Season with salt and pepper to taste.',
                    'Garnish with fresh herbs if desired and serve.'
                ]
            }
        };
        
        return recipes[id] || null;
    }

    getDefaultRecipe() {
        return {
            id: 'avocado-toast',
            title: 'Avocado Toast with Everything Bagel Seasoning',
            category: 'Breakfast',
            image: './images/stories/Breakfast1.png',
            prepTime: '10 minutes',
            servings: '1 serving',
            difficulty: 'Easy',
            ingredients: [
                { amount: '1 slice', name: 'whole-grain bread' },
                { amount: '1/2', name: 'ripe avocado' },
                { amount: '1/4 teaspoon', name: 'everything bagel seasoning' },
                { amount: 'Optional:', name: 'red pepper flakes, microgreens' }
            ],
            instructions: [
                'Toast the bread to your desired level of crispiness.',
                'While the bread is toasting, mash the avocado in a small bowl.',
                'Spread the mashed avocado evenly over the toasted bread.',
                'Sprinkle with everything bagel seasoning.',
                'Optional: Garnish with red pepper flakes and microgreens.',
                'Serve immediately and enjoy!'
            ]
        };
    }

    renderRecipeDetails() {
        if (!this.currentRecipe) return;

        // Update page title
        document.title = `${this.currentRecipe.title} - Broccobae | Vegan Recipe Collection`;

        // Update breadcrumb
        const breadcrumbCategory = document.getElementById('breadcrumb-category');
        if (breadcrumbCategory) {
            breadcrumbCategory.textContent = this.currentRecipe.category;
        }

        // Update recipe header
        this.updateRecipeHeader();
        
        // Update recipe content
        this.updateRecipeContent();
        
        // Update related recipes
        this.generateRelatedRecipes();
    }

    updateRecipeHeader() {
        if (!this.currentRecipe) return;

        // Update recipe image
        const recipeImage = document.getElementById('recipe-image');
        if (recipeImage) {
            recipeImage.src = this.currentRecipe.image;
            recipeImage.alt = this.currentRecipe.title;
        }

        // Update recipe title
        const recipeTitle = document.getElementById('recipe-title');
        if (recipeTitle) {
            recipeTitle.textContent = this.currentRecipe.title;
        }

        // Update category badge
        const categoryBadge = document.getElementById('recipe-category');
        if (categoryBadge) {
            categoryBadge.textContent = this.currentRecipe.category;
        }

        // Update meta information
        const prepTime = document.getElementById('prep-time');
        if (prepTime) {
            prepTime.textContent = this.currentRecipe.prepTime;
        }

        const servings = document.getElementById('servings');
        if (servings) {
            servings.textContent = this.currentRecipe.servings;
        }

        const difficulty = document.getElementById('difficulty');
        if (difficulty) {
            difficulty.textContent = this.currentRecipe.difficulty;
        }
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
    }

    updateIngredients() {
        const ingredientsList = document.getElementById('ingredients-list');
        if (!ingredientsList || !this.currentRecipe) return;

        ingredientsList.innerHTML = this.currentRecipe.ingredients.map((ingredient, index) => {
            const isOptional = ingredient.amount.toLowerCase().includes('optional');
            return `
                <li class="ingredient-item ${isOptional ? 'optional' : ''}">
                    <span class="ingredient-amount">${ingredient.amount}</span>
                    <span class="ingredient-name">${ingredient.name}</span>
                </li>
            `;
        }).join('');
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
        const instructionsList = document.getElementById('instructions-list');
        if (!instructionsList || !this.currentRecipe) return;

        instructionsList.innerHTML = this.currentRecipe.instructions.map((instruction, index) => `
            <li class="instruction-step">
                <div class="step-number">${index + 1}</div>
                <div class="step-content">${instruction}</div>
            </li>
        `).join('');
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