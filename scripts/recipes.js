class RecipeManager {
    constructor() {
        this.recipes = [];
        this.filteredRecipes = [];
        this.currentCategory = 'all';
        this.recipesPerPage = 12;
        this.currentPage = 1;
        this.init();
    }

    init() {
        this.generateRecipes();
        this.filteredRecipes = [...this.recipes];
        this.setupEventListeners();
        this.displayRecipes();
        this.updateRecipeCount();
    }

    generateRecipes() {
        this.recipes = [
            // High-Protein Recipes
            {
                id: 'high-protein-1',
                title: 'Chickpea Flour Omelette with Veggies',
                category: 'high-protein',
                image: '../../images/stories/Recipes/All Recipes/Chickpea Flour Omelette.jpg',
                prepTime: '15 minutes',
                servings: '2 servings',
                difficulty: 'Easy',
                description: 'Protein-rich chickpea flour omelette packed with fresh vegetables.',
                ingredients: ['Chickpea flour', 'Bell peppers', 'Onions', 'Spinach', 'Nutritional yeast', 'Turmeric', 'Plant milk']
            },
            {
                id: 'high-protein-2',
                title: 'Quinoa Salad with Black Beans and Avocado',
                category: 'high-protein',
                image: '../../images/stories/Recipes/All Recipes/Quinoa Black Bean Salad.jpg',
                prepTime: '20 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                description: 'Nutritious quinoa salad with protein-rich black beans and creamy avocado.',
                ingredients: ['Quinoa', 'Black beans', 'Avocado', 'Cherry tomatoes', 'Cilantro', 'Lime juice', 'Olive oil']
            },
            {
                id: 'high-protein-3',
                title: 'Tempeh Stir-Fry with Brown Rice',
                category: 'high-protein',
                image: '../../images/stories/Recipes/All Recipes/Tempeh Stir Fry.jpg',
                prepTime: '25 minutes',
                servings: '3 servings',
                difficulty: 'Medium',
                description: 'High-protein tempeh stir-fry served over nutritious brown rice.',
                ingredients: ['Tempeh', 'Brown rice', 'Broccoli', 'Carrots', 'Snap peas', 'Soy sauce', 'Ginger', 'Garlic']
            },
            {
                id: 'high-protein-4',
                title: 'Roasted Chickpeas with Spices',
                category: 'high-protein',
                image: '../../images/stories/Recipes/All Recipes/Roasted Chickpeas.jpg',
                prepTime: '30 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                description: 'Crispy roasted chickpeas seasoned with aromatic spices.',
                ingredients: ['Chickpeas', 'Cumin', 'Paprika', 'Garlic powder', 'Olive oil', 'Sea salt', 'Cayenne pepper']
            },
            {
                id: 'high-protein-5',
                title: 'Protein Smoothie with Plant-Based Protein Powder',
                category: 'high-protein',
                image: '../../images/stories/Recipes/All Recipes/Protein Smoothie.jpg',
                prepTime: '5 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                description: 'Power-packed protein smoothie perfect for post-workout nutrition.',
                ingredients: ['Plant protein powder', 'Banana', 'Spinach', 'Almond milk', 'Peanut butter', 'Chia seeds']
            },

            // Low-Carb Recipes
            {
                id: 'low-carb-1',
                title: 'Chia Seed Pudding with Berries',
                category: 'low-carb',
                image: '../../images/stories/Recipes/All Recipes/Chia Seed Pudding.jpg',
                prepTime: '10 minutes',
                servings: '2 servings',
                difficulty: 'Easy',
                description: 'Low-carb chia pudding topped with fresh berries.',
                ingredients: ['Chia seeds', 'Coconut milk', 'Mixed berries', 'Vanilla extract', 'Stevia', 'Coconut flakes']
            },
            {
                id: 'low-carb-2',
                title: 'Spinach and Mushroom Salad with Lemon Vinaigrette',
                category: 'low-carb',
                image: '../../images/stories/Recipes/All Recipes/Spinach Mushroom Salad.jpg',
                prepTime: '15 minutes',
                servings: '3 servings',
                difficulty: 'Easy',
                description: 'Fresh spinach and mushroom salad with zesty lemon dressing.',
                ingredients: ['Baby spinach', 'Mushrooms', 'Lemon juice', 'Olive oil', 'Dijon mustard', 'Garlic', 'Herbs']
            },
            {
                id: 'low-carb-3',
                title: 'Grilled Eggplant Steaks with Roasted Vegetables',
                category: 'low-carb',
                image: '../../images/stories/Recipes/All Recipes/Grilled Eggplant.jpg',
                prepTime: '35 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                description: 'Hearty grilled eggplant steaks with colorful roasted vegetables.',
                ingredients: ['Eggplant', 'Zucchini', 'Bell peppers', 'Cherry tomatoes', 'Olive oil', 'Herbs', 'Balsamic vinegar']
            },
            {
                id: 'low-carb-4',
                title: 'Celery Sticks with Almond Butter',
                category: 'low-carb',
                image: '../../images/stories/Recipes/All Recipes/Celery Almond Butter.jpg',
                prepTime: '5 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                description: 'Simple and satisfying low-carb snack with protein-rich almond butter.',
                ingredients: ['Celery stalks', 'Almond butter', 'Hemp seeds', 'Cinnamon']
            },
            {
                id: 'low-carb-5',
                title: 'Coconut Cream with Raspberries',
                category: 'low-carb',
                image: '../../images/stories/Recipes/All Recipes/Coconut Cream Raspberries.jpg',
                prepTime: '10 minutes',
                servings: '2 servings',
                difficulty: 'Easy',
                description: 'Rich coconut cream dessert topped with fresh raspberries.',
                ingredients: ['Coconut cream', 'Fresh raspberries', 'Vanilla extract', 'Stevia', 'Mint leaves']
            },

            // Gluten-Free Recipes
            {
                id: 'gluten-free-1',
                title: 'Gluten-Free Buckwheat Pancakes',
                category: 'gluten-free',
                image: '../../images/stories/Recipes/All Recipes/Buckwheat Pancakes.jpg',
                prepTime: '20 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                description: 'Fluffy gluten-free pancakes made with nutritious buckwheat flour.',
                ingredients: ['Buckwheat flour', 'Plant milk', 'Baking powder', 'Vanilla extract', 'Maple syrup', 'Coconut oil']
            },
            {
                id: 'gluten-free-2',
                title: 'Rainbow Veggie Wraps',
                category: 'gluten-free',
                image: '../../images/stories/Recipes/All Recipes/Rainbow Veggie Wraps.jpg',
                prepTime: '15 minutes',
                servings: '2 servings',
                difficulty: 'Easy',
                description: 'Colorful vegetable wraps using gluten-free tortillas.',
                ingredients: ['Gluten-free tortillas', 'Bell peppers', 'Carrots', 'Cucumber', 'Avocado', 'Hummus', 'Sprouts']
            },
            {
                id: 'gluten-free-3',
                title: 'Chickpea Curry with Cauliflower Rice',
                category: 'gluten-free',
                image: '../../images/stories/Recipes/All Recipes/Chickpea Curry.jpg',
                prepTime: '30 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                description: 'Aromatic chickpea curry served over low-carb cauliflower rice.',
                ingredients: ['Chickpeas', 'Cauliflower', 'Coconut milk', 'Curry powder', 'Turmeric', 'Ginger', 'Garlic']
            },
            {
                id: 'gluten-free-4',
                title: 'Trail Mix with Dried Fruits and Nuts',
                category: 'gluten-free',
                image: '../../images/stories/Recipes/All Recipes/Trail Mix.jpg',
                prepTime: '5 minutes',
                servings: '8 servings',
                difficulty: 'Easy',
                description: 'Energy-boosting trail mix with nuts, seeds, and dried fruits.',
                ingredients: ['Almonds', 'Walnuts', 'Pumpkin seeds', 'Dried cranberries', 'Dried apricots', 'Dark chocolate chips']
            },
            {
                id: 'gluten-free-5',
                title: 'Coconut Chia Seed Pudding',
                category: 'gluten-free',
                image: '../../images/stories/Recipes/All Recipes/Coconut Chia Pudding.jpg',
                prepTime: '10 minutes',
                servings: '3 servings',
                difficulty: 'Easy',
                description: 'Creamy coconut chia pudding that\'s naturally gluten-free.',
                ingredients: ['Chia seeds', 'Coconut milk', 'Shredded coconut', 'Vanilla extract', 'Maple syrup', 'Fresh fruit']
            },

            // Budget-Friendly Recipes
            {
                id: 'budget-friendly-1',
                title: 'Vegan Chili',
                category: 'budget-friendly',
                image: '../../images/stories/Recipes/All Recipes/Vegan Chili.jpg',
                prepTime: '45 minutes',
                servings: '6 servings',
                difficulty: 'Easy',
                description: 'Hearty and affordable vegan chili packed with beans and vegetables.',
                ingredients: ['Kidney beans', 'Black beans', 'Diced tomatoes', 'Onions', 'Bell peppers', 'Chili powder', 'Cumin']
            },
            {
                id: 'budget-friendly-2',
                title: 'Vegetable Stir-Fry',
                category: 'budget-friendly',
                image: '../../images/stories/Recipes/All Recipes/Vegetable Stir Fry.jpg',
                prepTime: '20 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                description: 'Quick and economical vegetable stir-fry with seasonal vegetables.',
                ingredients: ['Mixed vegetables', 'Soy sauce', 'Garlic', 'Ginger', 'Sesame oil', 'Rice', 'Green onions']
            },
            {
                id: 'budget-friendly-3',
                title: 'Vegan Tacos',
                category: 'budget-friendly',
                image: '../../images/stories/Recipes/All Recipes/Vegan Tacos.jpg',
                prepTime: '25 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                description: 'Delicious and affordable vegan tacos with seasoned lentils.',
                ingredients: ['Lentils', 'Taco shells', 'Lettuce', 'Tomatoes', 'Onions', 'Avocado', 'Lime', 'Spices']
            },
            {
                id: 'budget-friendly-4',
                title: 'Pasta Primavera',
                category: 'budget-friendly',
                image: '../../images/stories/Recipes/All Recipes/Pasta Primavera.jpg',
                prepTime: '30 minutes',
                servings: '5 servings',
                difficulty: 'Easy',
                description: 'Colorful pasta dish with fresh seasonal vegetables.',
                ingredients: ['Pasta', 'Zucchini', 'Cherry tomatoes', 'Broccoli', 'Garlic', 'Olive oil', 'Basil', 'Nutritional yeast']
            },
            {
                id: 'budget-friendly-5',
                title: 'Vegan Shepherd\'s Pie',
                category: 'budget-friendly',
                image: '../../images/stories/Recipes/All Recipes/Vegan Shepherds Pie.jpg',
                prepTime: '60 minutes',
                servings: '8 servings',
                difficulty: 'Medium',
                description: 'Comforting shepherd\'s pie with lentils and mashed potatoes.',
                ingredients: ['Lentils', 'Potatoes', 'Carrots', 'Peas', 'Onions', 'Vegetable broth', 'Herbs', 'Plant milk']
            },

            // Weight Loss Recipes
            {
                id: 'weight-loss-1',
                title: 'Tropical Chia Seed Pudding',
                category: 'weight-loss',
                image: '../../images/stories/Recipes/All Recipes/Tropical Chia Pudding.jpg',
                prepTime: '10 minutes',
                servings: '2 servings',
                difficulty: 'Easy',
                description: 'Low-calorie tropical chia pudding perfect for weight management.',
                ingredients: ['Chia seeds', 'Coconut water', 'Mango', 'Pineapple', 'Lime juice', 'Coconut flakes']
            },
            {
                id: 'weight-loss-2',
                title: 'Mediterranean Chickpea Salad',
                category: 'weight-loss',
                image: '../../images/stories/Recipes/All Recipes/Mediterranean Chickpea Salad.jpg',
                prepTime: '15 minutes',
                servings: '3 servings',
                difficulty: 'Easy',
                description: 'Light and filling Mediterranean-style chickpea salad.',
                ingredients: ['Chickpeas', 'Cucumber', 'Cherry tomatoes', 'Red onion', 'Olives', 'Lemon juice', 'Herbs']
            },
            {
                id: 'weight-loss-3',
                title: 'Spiced Tofu Stir-Fry',
                category: 'weight-loss',
                image: '../../images/stories/Recipes/All Recipes/Spiced Tofu Stir Fry.jpg',
                prepTime: '20 minutes',
                servings: '3 servings',
                difficulty: 'Medium',
                description: 'Low-calorie spiced tofu stir-fry with plenty of vegetables.',
                ingredients: ['Firm tofu', 'Broccoli', 'Bell peppers', 'Snap peas', 'Ginger', 'Garlic', 'Low-sodium soy sauce']
            },
            {
                id: 'weight-loss-4',
                title: 'Cucumber and Hummus Bites',
                category: 'weight-loss',
                image: '../../images/stories/Recipes/All Recipes/Cucumber Hummus Bites.jpg',
                prepTime: '10 minutes',
                servings: '2 servings',
                difficulty: 'Easy',
                description: 'Light and refreshing cucumber bites with protein-rich hummus.',
                ingredients: ['Cucumber', 'Hummus', 'Cherry tomatoes', 'Fresh herbs', 'Paprika', 'Lemon zest']
            },
            {
                id: 'weight-loss-5',
                title: 'Handful of Mixed Nuts',
                category: 'weight-loss',
                image: '../../images/stories/Recipes/All Recipes/Mixed Nuts.jpg',
                prepTime: '2 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                description: 'Portion-controlled mixed nuts for healthy snacking.',
                ingredients: ['Almonds', 'Walnuts', 'Cashews', 'Brazil nuts', 'Pecans']
            }
        ];
    }

    setupEventListeners() {
        // Category filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const category = button.getAttribute('data-category');
                this.filterRecipes(category);
                this.updateActiveFilter(button);
            });
        });

        // Load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMoreRecipes();
            });
        }
    }

    filterRecipes(category) {
        this.currentCategory = category;
        this.currentPage = 1;
        
        if (category === 'all') {
            this.filteredRecipes = [...this.recipes];
        } else {
            this.filteredRecipes = this.recipes.filter(recipe => recipe.category === category);
        }
        
        this.displayRecipes();
        this.updateRecipeCount();
    }

    updateActiveFilter(activeButton) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => button.classList.remove('active'));
        activeButton.classList.add('active');
    }

    displayRecipes() {
        const recipeGrid = document.getElementById('recipeGrid');
        if (!recipeGrid) return;

        const startIndex = 0;
        const endIndex = this.currentPage * this.recipesPerPage;
        const recipesToShow = this.filteredRecipes.slice(startIndex, endIndex);

        if (recipesToShow.length === 0) {
            this.displayEmptyState();
            return;
        }

        recipeGrid.innerHTML = recipesToShow.map(recipe => `
            <div class="recipe-card" data-recipe-id="${recipe.id}">
                <div class="recipe-image">
                    <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                    <div class="recipe-overlay">
                        <button class="view-recipe-btn" onclick="window.location.href='recipe-detail.html?id=${recipe.id}'">
                            View Recipe
                        </button>
                    </div>
                </div>
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <div class="recipe-meta">
                        <span class="prep-time">
                            <i class="icon-clock"></i>
                            ${recipe.prepTime}
                        </span>
                        <span class="servings">
                            <i class="icon-users"></i>
                            ${recipe.servings}
                        </span>
                        <span class="difficulty ${recipe.difficulty.toLowerCase()}">
                            ${recipe.difficulty}
                        </span>
                    </div>
                    <p class="recipe-description">${recipe.description}</p>
                </div>
            </div>
        `).join('');

        this.updateLoadMoreButton();
    }

    displayEmptyState() {
        const recipeGrid = document.getElementById('recipeGrid');
        recipeGrid.innerHTML = `
            <div class="empty-state">
                <h3>No recipes found</h3>
                <p>Try selecting a different category or check back later for new recipes.</p>
            </div>
        `;
        this.updateLoadMoreButton();
    }

    loadMoreRecipes() {
        this.currentPage++;
        this.displayRecipes();
    }

    updateLoadMoreButton() {
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (!loadMoreBtn) return;

        const totalShown = this.currentPage * this.recipesPerPage;
        const hasMore = totalShown < this.filteredRecipes.length;
        
        loadMoreBtn.style.display = hasMore ? 'block' : 'none';
    }

    updateRecipeCount() {
        const countElement = document.querySelector('.recipe-count');
        if (countElement) {
            const total = this.filteredRecipes.length;
            const categoryText = this.currentCategory === 'all' ? 'recipes' : `${this.currentCategory} recipes`;
            countElement.textContent = `Showing ${total} ${categoryText}`;
        }
    }

    getRecipeById(id) {
        return this.recipes.find(recipe => recipe.id === id);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RecipeManager();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RecipeManager;
}




