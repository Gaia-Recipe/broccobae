// Recipe data generator and management
class RecipeManager {
    constructor() {
        this.allRecipes = [];
        this.displayedRecipes = [];
        this.currentFilter = 'all';
        this.recipesPerPage = 12;
        this.currentPage = 1;
        this.generateAllRecipes();
    }

    generateAllRecipes() {
        // Generate 500 recipes across categories
        const categories = {
            breakfast: this.generateBreakfastRecipes(100),
            lunch: this.generateLunchRecipes(100),
            dinner: this.generateDinnerRecipes(100),
            dessert: this.generateDessertRecipes(100),
            smoothie: this.generateSmoothieRecipes(100)
        };

        // Combine all recipes
        this.allRecipes = [
            ...categories.breakfast,
            ...categories.lunch,
            ...categories.dinner,
            ...categories.dessert,
            ...categories.smoothie
        ];

        // Shuffle the array for variety
        this.shuffleArray(this.allRecipes);
    }

    generateBreakfastRecipes(count) {
        const breakfastNames = [
            'Overnight Oats', 'Chia Pudding', 'Avocado Toast', 'Smoothie Bowl', 'Pancakes',
            'French Toast', 'Granola', 'Muesli', 'Breakfast Burrito', 'Tofu Scramble',
            'Breakfast Quinoa', 'Oatmeal', 'Breakfast Bars', 'Muffins', 'Breakfast Cookies',
            'Chia Parfait', 'Breakfast Wrap', 'Hash Browns', 'Breakfast Salad', 'Porridge'
        ];
        
        const flavors = [
            'Chocolate Peanut Butter', 'Vanilla Berry', 'Tropical Mango', 'Cinnamon Apple',
            'Blueberry Lemon', 'Strawberry Banana', 'Coconut Almond', 'Maple Pecan',
            'Orange Cranberry', 'Raspberry Chia', 'Banana Walnut', 'Cherry Vanilla',
            'Pumpkin Spice', 'Matcha Green Tea', 'Chocolate Chip', 'Caramel Date',
            'Mixed Berry', 'Peach Ginger', 'Lime Coconut', 'Espresso Chocolate'
        ];

        return this.generateRecipeVariations(breakfastNames, flavors, 'breakfast', count);
    }

    generateLunchRecipes(count) {
        const lunchNames = [
            'Buddha Bowl', 'Quinoa Salad', 'Veggie Wrap', 'Soup', 'Sandwich',
            'Pasta Salad', 'Rice Bowl', 'Stuffed Peppers', 'Salad', 'Grain Bowl',
            'Noodle Soup', 'Flatbread', 'Stuffed Avocado', 'Veggie Burger', 'Spring Rolls',
            'Poke Bowl', 'Falafel Bowl', 'Hummus Plate', 'Veggie Sushi', 'Power Bowl'
        ];
        
        const styles = [
            'Mediterranean', 'Asian-Inspired', 'Mexican-Style', 'Thai-Flavored',
            'Indian-Spiced', 'Italian-Style', 'Greek-Style', 'Moroccan-Inspired',
            'Japanese-Style', 'Korean-Inspired', 'Middle Eastern', 'Tex-Mex',
            'Vietnamese-Style', 'Chinese-Inspired', 'Lebanese-Style', 'Turkish-Style',
            'Ethiopian-Inspired', 'Peruvian-Style', 'Brazilian-Inspired', 'French-Style'
        ];

        return this.generateRecipeVariations(lunchNames, styles, 'lunch', count);
    }

    generateDinnerRecipes(count) {
        const dinnerNames = [
            'Pasta', 'Curry', 'Stir Fry', 'Risotto', 'Casserole',
            'Stuffed Vegetables', 'Grain Bowl', 'Pizza', 'Tacos', 'Burrito Bowl',
            'Ramen', 'Pad Thai', 'Biryani', 'Paella', 'Lasagna',
            'Enchiladas', 'Shepherd\'s Pie', 'Chili', 'Soup', 'Roasted Vegetables'
        ];
        
        const proteins = [
            'Lentil', 'Chickpea', 'Tofu', 'Tempeh', 'Black Bean',
            'Quinoa', 'Mushroom', 'Walnut', 'Cashew', 'Hemp Seed',
            'Jackfruit', 'Cauliflower', 'Eggplant', 'Portobello', 'Seitan',
            'Edamame', 'Pinto Bean', 'White Bean', 'Kidney Bean', 'Split Pea'
        ];

        return this.generateRecipeVariations(dinnerNames, proteins, 'dinner', count);
    }

    generateDessertRecipes(count) {
        const dessertNames = [
            'Chocolate Mousse', 'Nice Cream', 'Energy Balls', 'Brownies', 'Cookies',
            'Cake', 'Pudding', 'Tart', 'Pie', 'Cheesecake',
            'Truffles', 'Fudge', 'Bars', 'Muffins', 'Donuts',
            'Ice Cream', 'Sorbet', 'Parfait', 'Tiramisu', 'Panna Cotta'
        ];
        
        const flavors = [
            'Chocolate Avocado', 'Vanilla Coconut', 'Strawberry Cashew', 'Lemon Tahini',
            'Peanut Butter', 'Almond Butter', 'Coconut Lime', 'Raspberry Chia',
            'Banana Walnut', 'Date Caramel', 'Matcha White Chocolate', 'Orange Cardamom',
            'Cinnamon Spice', 'Maple Pecan', 'Cherry Chocolate', 'Mint Chocolate',
            'Salted Caramel', 'Espresso', 'Lavender Honey', 'Rose Pistachio'
        ];

        return this.generateRecipeVariations(dessertNames, flavors, 'dessert', count);
    }

    generateSmoothieRecipes(count) {
        const smoothieNames = [
            'Green Smoothie', 'Protein Smoothie', 'Tropical Smoothie', 'Berry Smoothie', 'Chocolate Smoothie',
            'Detox Smoothie', 'Breakfast Smoothie', 'Post-Workout Smoothie', 'Antioxidant Smoothie', 'Immunity Smoothie',
            'Energy Smoothie', 'Recovery Smoothie', 'Superfood Smoothie', 'Cleanse Smoothie', 'Power Smoothie',
            'Wellness Smoothie', 'Vitality Smoothie', 'Refresh Smoothie', 'Boost Smoothie', 'Glow Smoothie'
        ];
        
        const ingredients = [
            'Spinach Mango', 'Kale Pineapple', 'Spirulina Banana', 'Acai Berry',
            'Cacao Almond', 'Matcha Coconut', 'Turmeric Ginger', 'Beetroot Cherry',
            'Carrot Orange', 'Cucumber Mint', 'Celery Apple', 'Avocado Lime',
            'Blueberry Vanilla', 'Strawberry Basil', 'Peach Ginger', 'Pear Cinnamon',
            'Pomegranate Grape', 'Watermelon Mint', 'Papaya Lime', 'Dragon Fruit'
        ];

        return this.generateRecipeVariations(smoothieNames, ingredients, 'smoothie', count);
    }

    generateRecipeVariations(baseNames, modifiers, category, count) {
        const recipes = [];
        const difficulties = ['Easy', 'Medium', 'Hard'];
        const prepTimes = ['5 min', '10 min', '15 min', '20 min', '25 min', '30 min', '45 min', '60 min'];
        
        for (let i = 0; i < count; i++) {
            const baseName = baseNames[i % baseNames.length];
            const modifier = modifiers[i % modifiers.length];
            const title = `${modifier} ${baseName}`;
            
            recipes.push({
                id: `${category}-${i + 1}`,
                title: title,
                description: this.generateDescription(title, category),
                category: category,
                prepTime: prepTimes[Math.floor(Math.random() * prepTimes.length)],
                difficulty: difficulties[Math.floor(Math.random() * difficulties.length)],
                image: `../../images/recipes/${category}-${(i % 20) + 1}.svg`,
                ingredients: this.generateIngredients(category),
                instructions: this.generateInstructions(category),
                nutrition: this.generateNutrition(),
                tags: this.generateTags(category)
            });
        }
        
        return recipes;
    }

    generateDescription(title, category) {
        const descriptions = {
            breakfast: [
                'A nutritious and energizing way to start your day.',
                'Perfect morning fuel packed with plant-based goodness.',
                'Quick and easy breakfast that will keep you satisfied.',
                'Wholesome breakfast option loaded with nutrients.',
                'Delicious morning treat that\'s both healthy and satisfying.'
            ],
            lunch: [
                'A satisfying midday meal packed with fresh ingredients.',
                'Perfect lunch option that\'s both nutritious and delicious.',
                'Wholesome lunch that will fuel your afternoon.',
                'Fresh and vibrant meal perfect for lunch time.',
                'Balanced lunch option with amazing flavors.'
            ],
            dinner: [
                'A hearty and comforting dinner for the whole family.',
                'Perfect evening meal that\'s both satisfying and nutritious.',
                'Delicious dinner option packed with plant-based protein.',
                'Comforting dinner that will end your day perfectly.',
                'Flavorful dinner dish that\'s sure to impress.'
            ],
            dessert: [
                'Indulgent yet healthy dessert that satisfies your sweet tooth.',
                'Guilt-free dessert made with wholesome ingredients.',
                'Sweet treat that\'s both delicious and nutritious.',
                'Perfect dessert for any special occasion.',
                'Decadent dessert that\'s surprisingly healthy.'
            ],
            smoothie: [
                'Refreshing and nutritious smoothie packed with vitamins.',
                'Perfect blend of fruits and vegetables for optimal nutrition.',
                'Energizing smoothie that\'s perfect any time of day.',
                'Delicious and healthy smoothie loaded with superfoods.',
                'Creamy and satisfying smoothie that\'s naturally sweet.'
            ]
        };
        
        const categoryDescriptions = descriptions[category];
        return categoryDescriptions[Math.floor(Math.random() * categoryDescriptions.length)];
    }

    generateIngredients(category) {
        const baseIngredients = {
            breakfast: ['oats', 'almond milk', 'chia seeds', 'maple syrup', 'vanilla extract'],
            lunch: ['quinoa', 'mixed greens', 'cherry tomatoes', 'cucumber', 'olive oil'],
            dinner: ['brown rice', 'vegetables', 'herbs', 'spices', 'plant-based protein'],
            dessert: ['dates', 'nuts', 'coconut oil', 'vanilla', 'natural sweetener'],
            smoothie: ['banana', 'berries', 'plant milk', 'spinach', 'protein powder']
        };
        
        return baseIngredients[category] || [];
    }

    generateInstructions(category) {
        const baseInstructions = {
            breakfast: [
                'Combine all dry ingredients in a bowl.',
                'Add wet ingredients and mix well.',
                'Let sit for 5 minutes to thicken.',
                'Top with your favorite fruits and nuts.',
                'Enjoy immediately or refrigerate overnight.'
            ],
            lunch: [
                'Prepare all vegetables by washing and chopping.',
                'Cook grains according to package instructions.',
                'Combine all ingredients in a large bowl.',
                'Drizzle with dressing and toss gently.',
                'Serve immediately or store for later.'
            ],
            dinner: [
                'Preheat oven to 375°F (190°C).',
                'Prepare all ingredients and seasonings.',
                'Cook according to recipe instructions.',
                'Season to taste with salt and pepper.',
                'Serve hot with your favorite sides.'
            ],
            dessert: [
                'Combine all ingredients in a food processor.',
                'Process until smooth and creamy.',
                'Taste and adjust sweetness if needed.',
                'Chill in refrigerator for at least 2 hours.',
                'Serve chilled and enjoy!'
            ],
            smoothie: [
                'Add all ingredients to a high-speed blender.',
                'Blend on high until smooth and creamy.',
                'Add more liquid if needed for consistency.',
                'Taste and adjust sweetness if desired.',
                'Pour into glasses and serve immediately.'
            ]
        };
        
        return baseInstructions[category] || [];
    }

    generateNutrition() {
        return {
            calories: Math.floor(Math.random() * 400) + 100,
            protein: Math.floor(Math.random() * 20) + 5,
            carbs: Math.floor(Math.random() * 50) + 10,
            fat: Math.floor(Math.random() * 15) + 2,
            fiber: Math.floor(Math.random() * 10) + 2
        };
    }

    generateTags(category) {
        const allTags = {
            breakfast: ['quick', 'healthy', 'energizing', 'make-ahead', 'protein-rich'],
            lunch: ['fresh', 'satisfying', 'portable', 'colorful', 'balanced'],
            dinner: ['hearty', 'comforting', 'family-friendly', 'one-pot', 'filling'],
            dessert: ['sweet', 'indulgent', 'guilt-free', 'no-bake', 'celebration'],
            smoothie: ['refreshing', 'nutritious', 'energizing', 'detox', 'superfood']
        };
        
        return allTags[category] || [];
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    filterRecipes(category) {
        this.currentFilter = category;
        this.currentPage = 1;
        
        if (category === 'all') {
            this.displayedRecipes = [...this.allRecipes];
        } else {
            this.displayedRecipes = this.allRecipes.filter(recipe => recipe.category === category);
        }
        
        this.renderRecipes();
        this.updateRecipeCount();
    }

    loadMoreRecipes() {
        this.currentPage++;
        this.renderRecipes(false);
        this.updateRecipeCount();
    }

    renderRecipes(clearExisting = true) {
        const recipeGrid = document.getElementById('recipeGrid');
        
        if (clearExisting) {
            recipeGrid.innerHTML = '';
        }
        
        const startIndex = clearExisting ? 0 : (this.currentPage - 1) * this.recipesPerPage;
        const endIndex = this.currentPage * this.recipesPerPage;
        const recipesToShow = this.displayedRecipes.slice(startIndex, endIndex);
        
        recipesToShow.forEach((recipe, index) => {
            const recipeCard = this.createRecipeCard(recipe);
            recipeCard.style.animationDelay = `${(index % 6) * 0.1}s`;
            recipeGrid.appendChild(recipeCard);
        });
        
        // Update load more button visibility
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (endIndex >= this.displayedRecipes.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    }

    createRecipeCard(recipe) {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.setAttribute('data-category', recipe.category);
        card.setAttribute('data-recipe-id', recipe.id);
        
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" onerror="this.src='../../images/placeholder-recipe.svg'">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span class="prep-time"><i class="fas fa-clock"></i> ${recipe.prepTime}</span>
                    <span class="difficulty"><i class="fas fa-star"></i> ${recipe.difficulty}</span>
                    <span class="category">${recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}</span>
                </div>
                <button class="favorite-btn" onclick="toggleFavorite(this)" data-recipe='${JSON.stringify(recipe).replace(/'/g, "&apos;")}'>
                    <i class="far fa-heart"></i>
                </button>
            </div>
        `;
        
        // Add click handler for recipe details
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.favorite-btn')) {
                this.showRecipeDetails(recipe);
            }
        });
        
        return card;
    }

    showRecipeDetails(recipe) {
        // Navigate to the recipe detail page with the recipe ID
        const recipeSlug = recipe.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        window.location.href = `../../recipe-detail.html?recipe=${recipeSlug}&id=${recipe.id}`;
    }

    updateRecipeCount() {
        const recipeCount = document.querySelector('.recipe-count');
        const totalShown = Math.min(this.currentPage * this.recipesPerPage, this.displayedRecipes.length);
        const totalAvailable = this.displayedRecipes.length;
        
        recipeCount.textContent = `Showing ${totalShown} of ${totalAvailable} recipes`;
    }

    searchRecipes(query) {
        const searchTerm = query.toLowerCase();
        this.displayedRecipes = this.allRecipes.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        
        this.currentPage = 1;
        this.renderRecipes();
        this.updateRecipeCount();
    }
}

// Initialize recipe manager when page loads
let recipeManager;

document.addEventListener('DOMContentLoaded', function() {
    recipeManager = new RecipeManager();
    
    // Initialize with all recipes
    recipeManager.filterRecipes('all');
    
    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter recipes
            recipeManager.filterRecipes(filter);
        });
    });
    
    // Set up load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            recipeManager.loadMoreRecipes();
        });
    }
    
    // Set up search functionality
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                recipeManager.searchRecipes(query);
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    recipeManager.searchRecipes(query);
                }
            }
        });
        
        // Clear search
        searchInput.addEventListener('input', function() {
            if (this.value === '') {
                recipeManager.filterRecipes(recipeManager.currentFilter);
            }
        });
    }
});

// Enhanced favorite functionality
function toggleFavorite(button) {
    const icon = button.querySelector('i');
    const isActive = button.classList.contains('active');
    const recipeData = JSON.parse(button.getAttribute('data-recipe').replace(/&apos;/g, "'"));
    
    if (isActive) {
        button.classList.remove('active');
        icon.className = 'far fa-heart';
        removeFavoriteRecipe(recipeData);
    } else {
        button.classList.add('active');
        icon.className = 'fas fa-heart';
        addFavoriteRecipe(recipeData);
    }
}

function addFavoriteRecipe(recipe) {
    let favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    
    // Check if recipe is already in favorites
    if (!favorites.find(fav => fav.id === recipe.id)) {
        favorites.push(recipe);
        localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
        showNotification('Added to favorites!', 'success');
    }
}

function removeFavoriteRecipe(recipe) {
    let favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    favorites = favorites.filter(fav => fav.id !== recipe.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    showNotification('Removed from favorites!', 'info');
}

// Load favorite states
function loadFavoriteStates() {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(button => {
        const recipeData = JSON.parse(button.getAttribute('data-recipe').replace(/&apos;/g, "'"));
        const isFavorite = favorites.some(fav => fav.id === recipeData.id);
        
        if (isFavorite) {
            button.classList.add('active');
            button.querySelector('i').className = 'fas fa-heart';
        }
    });
}

// Update load favorite states to run after recipes are rendered
const originalRenderRecipes = RecipeManager.prototype.renderRecipes;
RecipeManager.prototype.renderRecipes = function(clearExisting = true) {
    originalRenderRecipes.call(this, clearExisting);
    // Small delay to ensure DOM is updated
    setTimeout(loadFavoriteStates, 100);
};