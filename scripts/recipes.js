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
                id: 'avocado-toast',
                title: 'Avocado Toast with Everything Bagel Seasoning',
                category: 'breakfast',
                image: '../../images/stories/Breakfast1.png',
                prepTime: '10 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                description: 'Creamy avocado on toasted bread topped with everything bagel seasoning for a perfect breakfast.',
                ingredients: ['2 slices whole grain bread', '1 ripe avocado', '1 tbsp everything bagel seasoning', 'Salt and pepper to taste', 'Optional: lemon juice']
            },
            {
                id: 'quinoa-breakfast-bowl',
                title: 'Quinoa Breakfast Bowl',
                category: 'breakfast',
                image: '../../images/stories/featuredrecipe1.png',
                prepTime: '15 minutes',
                servings: '2 servings',
                difficulty: 'Easy',
                description: 'Nutritious quinoa bowl with fresh fruits and nuts for a healthy start to your day.',
                ingredients: ['1 cup cooked quinoa', '1/2 cup berries', '1/4 cup nuts', '2 tbsp maple syrup', 'Plant milk']
            },
            {
                id: 'mediterranean-quinoa-salad',
                title: 'Mediterranean Quinoa Salad',
                category: 'lunch',
                image: '../../images/stories/featuredrecipe2.png',
                prepTime: '15 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                description: 'Fresh and flavorful quinoa salad with Mediterranean vegetables and herbs.',
                ingredients: ['1 cup quinoa', '1/2 cup cherry tomatoes', '1/4 cup red onion', '1/4 cup olives', 'Olive oil', 'Lemon juice']
            },
            {
                id: 'veggie-stir-fry',
                title: 'Colorful Veggie Stir Fry',
                category: 'dinner',
                image: '../../images/stories/featuredrecipe3.png',
                prepTime: '20 minutes',
                servings: '3 servings',
                difficulty: 'Medium',
                description: 'Quick and healthy stir fry packed with colorful vegetables and Asian flavors.',
                ingredients: ['Mixed vegetables', 'Soy sauce', 'Garlic', 'Ginger', 'Sesame oil', 'Brown rice']
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
                    <button class="favorite-btn" onclick="toggleFavorite(this)" data-recipe-id="${recipe.id}">
                        <i class="far fa-heart"></i>
                    </button>
                    <div class="recipe-category-badge">${recipe.category}</div>
                </div>
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <p class="recipe-description">${recipe.description}</p>
                    <div class="recipe-meta">
                        <span class="recipe-time"><i class="far fa-clock"></i> ${recipe.prepTime}</span>
                        <span class="recipe-servings"><i class="fas fa-users"></i> ${recipe.servings}</span>
                        <span class="recipe-difficulty"><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                    </div>
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
        const recipeData = JSON.parse(button.getAttribute('data-recipe').replace(/&apos;/g, "'"));
        const isFavorite = favorites.some(fav => fav.id === recipeData.id);
        
        if (isFavorite) {
            button.classList.add('active');
            button.querySelector('i').className = 'fas fa-heart';
        }
    });
}