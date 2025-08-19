// Recipe data generator and management
class RecipeManager {
    constructor() {
        this.allRecipes = [];
        this.displayedRecipes = [];
        this.currentFilter = 'all';
        this.recipesPerPage = 12;
        this.currentPage = 1;
        this.init();
    }

    init() {
        this.generateRecipes();
        this.setupEventListeners();
        this.filterRecipes('all');
        this.updateRecipeCount();
    }

    generateRecipes() {
        this.allRecipes = [
            {
                id: 'recipe-all1',
                title: 'Plant-Based Buddha Bowl',
                category: 'lunch',
                image: '../../images/stories/Recipes/All/all1.png',
                prepTime: '25 minutes',
                servings: '2 servings',
                difficulty: 'Medium',
                description: 'A colorful and nutritious Buddha bowl packed with quinoa, roasted vegetables, and tahini dressing.',
                ingredients: ['1 cup quinoa', '1 sweet potato', '1 cup broccoli', '1/2 cup chickpeas', '2 tbsp tahini', 'Mixed greens', 'Pumpkin seeds']
            },
            {
                id: 'recipe-all2',
                title: 'Vegan Mushroom Risotto',
                category: 'dinner',
                image: '../../images/stories/Recipes/All/all2.png',
                prepTime: '35 minutes',
                servings: '4 servings',
                difficulty: 'Hard',
                description: 'Creamy and rich mushroom risotto made with arborio rice, mixed mushrooms, and nutritional yeast.',
                ingredients: ['1.5 cups arborio rice', '4 cups vegetable broth', '300g mixed mushrooms', '1/2 cup white wine', '1/4 cup nutritional yeast', 'Fresh herbs']
            },
            {
                id: 'recipe-all3',
                title: 'Green Smoothie Power Bowl',
                category: 'breakfast',
                image: '../../images/stories/Recipes/All/all3.png',
                prepTime: '10 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                description: 'Energizing green smoothie bowl topped with fresh fruits, nuts, and seeds for a perfect morning boost.',
                ingredients: ['1 frozen banana', '1 cup spinach', '1/2 avocado', '1 cup almond milk', 'Chia seeds', 'Fresh berries', 'Granola']
            },
            {
                id: 'recipe-all4',
                title: 'Mediterranean Stuffed Peppers',
                category: 'dinner',
                image: '../../images/stories/Recipes/All/all4.png',
                prepTime: '45 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                description: 'Colorful bell peppers stuffed with a Mediterranean mixture of rice, vegetables, and herbs.',
                ingredients: ['4 bell peppers', '1 cup brown rice', '1 zucchini', '1/2 cup sun-dried tomatoes', '1/4 cup pine nuts', 'Fresh basil', 'Olive oil']
            },
            {
                id: 'recipe-all5',
                title: 'Raw Chocolate Avocado Mousse',
                category: 'dessert',
                image: '../../images/stories/Recipes/All/all5.png',
                prepTime: '15 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                description: 'Decadent and healthy chocolate mousse made with ripe avocados, cocoa, and natural sweeteners.',
                ingredients: ['2 ripe avocados', '1/4 cup cocoa powder', '3 tbsp maple syrup', '1 tsp vanilla extract', 'Pinch of salt', 'Fresh berries for garnish']
            },
            {
                id: 'recipe-all6',
                title: 'Quinoa Power Salad',
                category: 'lunch',
                image: '../../images/stories/Recipes/All/all6.png',
                prepTime: '20 minutes',
                servings: '3 servings',
                difficulty: 'Easy',
                description: 'Protein-packed quinoa salad with fresh vegetables, herbs, and a zesty lemon dressing.',
                ingredients: ['1 cup quinoa', '1 cucumber', '2 tomatoes', '1/4 cup red onion', '1/4 cup fresh parsley', 'Lemon juice', 'Olive oil']
            },
            {
                id: 'recipe-all7',
                title: 'Coconut Curry Lentils',
                category: 'dinner',
                image: '../../images/stories/Recipes/All/all7.png',
                prepTime: '30 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                description: 'Warming and aromatic lentil curry with coconut milk, spices, and fresh vegetables.',
                ingredients: ['1 cup red lentils', '1 can coconut milk', '1 onion', '2 cloves garlic', '1 tbsp curry powder', 'Fresh spinach', 'Basmati rice']
            },
            {
                id: 'recipe-all8',
                title: 'Overnight Chia Pudding',
                category: 'breakfast',
                image: '../../images/stories/Recipes/All/all8.png',
                prepTime: '5 minutes',
                servings: '2 servings',
                difficulty: 'Easy',
                description: 'Creamy and nutritious chia pudding prepared overnight with plant milk and natural sweeteners.',
                ingredients: ['1/4 cup chia seeds', '1 cup almond milk', '2 tbsp maple syrup', '1 tsp vanilla extract', 'Fresh fruits', 'Nuts for topping']
            },
            {
                id: 'recipe-all9',
                title: 'Roasted Vegetable Pasta',
                category: 'dinner',
                image: '../../images/stories/Recipes/All/all9.png',
                prepTime: '40 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                description: 'Colorful roasted vegetables tossed with whole grain pasta and fresh herbs.',
                ingredients: ['300g whole grain pasta', '1 zucchini', '1 bell pepper', '1 eggplant', '2 tbsp olive oil', 'Fresh basil', 'Nutritional yeast']
            }
        ];
    }

    setupEventListeners() {
        // Set up filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter recipes
                this.filterRecipes(filter);
            });
        });
        
        // Set up load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMoreRecipes();
            });
        }
        
        // Set up search functionality
        const searchInput = document.querySelector('.search-input');
        const searchButton = document.querySelector('.search-button');
        
        if (searchInput && searchButton) {
            searchButton.addEventListener('click', () => {
                const query = searchInput.value.trim();
                if (query) {
                    this.searchRecipes(query);
                }
            });
            
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const query = searchInput.value.trim();
                    if (query) {
                        this.searchRecipes(query);
                    }
                }
            });
            
            // Clear search
            searchInput.addEventListener('input', () => {
                if (searchInput.value === '') {
                    this.filterRecipes(this.currentFilter);
                }
            });
        }
    }

    renderEmptyState() {
        const recipeGrid = document.getElementById('recipeGrid');
        if (recipeGrid) {
            recipeGrid.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
                    <i class="fas fa-utensils" style="font-size: 4rem; color: #ccc; margin-bottom: 1rem;"></i>
                    <h3 style="color: #666; margin-bottom: 1rem;">No Recipes Available</h3>
                    <p style="color: #999;">Recipes have been removed from this section.</p>
                </div>
            `;
        }
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
        
        this.shuffleArray(this.displayedRecipes);
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
        if (!recipeGrid) return;
        
        if (clearExisting) {
            recipeGrid.innerHTML = '';
        }
        
        if (this.displayedRecipes.length === 0) {
            this.renderEmptyState();
            return;
        }
        
        const recipesToShow = this.displayedRecipes.slice(0, this.currentPage * this.recipesPerPage);
        
        recipesToShow.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.innerHTML = `
                <div class="recipe-image-container">
                    <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" loading="lazy">
                    <div class="recipe-category-badge">${recipe.category}</div>
                </div>
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <p class="recipe-description">${recipe.description}</p>
                    <button class="recipe-btn" onclick="recipeManager.showRecipeDetails(${JSON.stringify(recipe).replace(/"/g, '&quot;')})">
                        View Recipe <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            `;
            recipeGrid.appendChild(recipeCard);
        });
        
        // Show/hide load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            if (recipesToShow.length < this.displayedRecipes.length) {
                loadMoreBtn.style.display = 'block';
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }
        
        // Load favorite states
        loadFavoriteStates();
    }

    showRecipeDetails(recipe) {
        // Navigate to the recipe detail page with the recipe ID
        const recipeSlug = recipe.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        window.location.href = `../../recipe-detail.html?recipe=${recipeSlug}&id=${recipe.id}`;
    }

    updateRecipeCount() {
        const recipeCount = document.querySelector('.recipe-count');
        if (recipeCount) {
            const showing = Math.min(this.currentPage * this.recipesPerPage, this.displayedRecipes.length);
            const total = this.displayedRecipes.length;
            recipeCount.textContent = `Showing ${showing} of ${total} recipes`;
        }
    }

    searchRecipes(query) {
        const searchTerm = query.toLowerCase();
        this.displayedRecipes = this.allRecipes.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.category.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
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
});

// Enhanced favorite functionality
function toggleFavorite(button) {
    const icon = button.querySelector('i');
    const isActive = button.classList.contains('active');
    const recipeId = button.getAttribute('data-recipe-id');
    
    // Find the recipe data from the recipe manager
    const recipeData = recipeManager.allRecipes.find(recipe => recipe.id === recipeId);
    if (!recipeData) return;
    
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
        if (typeof showNotification === 'function') {
            showNotification('Added to favorites!', 'success');
        }
    }
}

function removeFavoriteRecipe(recipe) {
    let favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    favorites = favorites.filter(fav => fav.id !== recipe.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    if (typeof showNotification === 'function') {
        showNotification('Removed from favorites!', 'info');
    }
}

// Load favorite states
function loadFavoriteStates() {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(button => {
        const recipeId = button.getAttribute('data-recipe-id');
        if (recipeId) {
            const isFavorite = favorites.some(fav => fav.id === recipeId);
            
            if (isFavorite) {
                button.classList.add('active');
                button.querySelector('i').className = 'fas fa-heart';
            }
        }
    });
}