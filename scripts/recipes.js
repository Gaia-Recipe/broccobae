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
        // Recipes removed - no longer generating recipes
        this.displayedRecipes = [];
        this.setupEventListeners();
        this.renderEmptyState();
        this.updateRecipeCount();
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

    // Recipe generation methods removed

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    filterRecipes(category) {
        this.currentFilter = category;
        // No recipes to filter - show empty state
        this.displayedRecipes = [];
        this.renderEmptyState();
        this.updateRecipeCount();
    }

    loadMoreRecipes() {
        this.currentPage++;
        this.renderRecipes(false);
        this.updateRecipeCount();
    }

    renderRecipes(clearExisting = true) {
        // Recipes removed - show empty state
        this.renderEmptyState();
        
        // Hide load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
    }

    // Recipe card creation removed

    showRecipeDetails(recipe) {
        // Navigate to the recipe detail page with the recipe ID
        const recipeSlug = recipe.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        window.location.href = `../../recipe-detail.html?recipe=${recipeSlug}&id=${recipe.id}`;
    }

    updateRecipeCount() {
        const recipeCount = document.querySelector('.recipe-count');
        
        recipeCount.textContent = `Showing 0 of 0 recipes`;
    }

    searchRecipes(query) {
        // No recipes to search - show empty state
        this.displayedRecipes = [];
        this.renderEmptyState();
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