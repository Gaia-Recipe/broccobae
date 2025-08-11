// Main JavaScript file for recipe website functionality

// Recipe data loader
class RecipeManager {
    constructor() {
        this.recipes = window.recipes || {};
        this.currentCategory = null;
        this.currentRecipe = null;
    }

    // Get recipes by category
    getRecipesByCategory(category) {
        return this.recipes[category] || [];
    }

    // Get recipe by ID (index in category)
    getRecipeById(category, id) {
        const categoryRecipes = this.getRecipesByCategory(category);
        return categoryRecipes[id] || null;
    }

    // Search recipes by title
    searchRecipes(query, category = null) {
        const searchIn = category ? [category] : Object.keys(this.recipes);
        const results = [];
        
        searchIn.forEach(cat => {
            const categoryRecipes = this.getRecipesByCategory(cat);
            categoryRecipes.forEach((recipe, index) => {
                if (recipe.title.toLowerCase().includes(query.toLowerCase())) {
                    results.push({ ...recipe, category: cat, id: index });
                }
            });
        });
        
        return results;
    }
}

// Recipe card renderer
class RecipeRenderer {
    static createRecipeCard(recipe, category, index) {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.setAttribute('data-category', category);
        card.setAttribute('data-id', index);
        
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" onerror="this.innerHTML='🍽️'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.style.fontSize='3rem'; this.style.color='#999';">
            <div class="recipe-card-content">
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <span>🕒 ${recipe.cookTime || '30 min'}</span>
                    <span>👥 ${recipe.servings || '4 servings'}</span>
                </div>
            </div>
        `;
        
        // Add click event to navigate to recipe detail
        card.addEventListener('click', () => {
            this.openRecipeDetail(category, index);
        });
        
        return card;
    }
    
    static openRecipeDetail(category, id) {
        // Store recipe info in localStorage for recipe detail page
        localStorage.setItem('currentRecipe', JSON.stringify({ category, id }));
        window.location.href = 'recipe-detail.html';
    }
    
    static renderRecipeGrid(recipes, category, container) {
        if (!container) return;
        
        container.innerHTML = '';
        
        if (!recipes || recipes.length === 0) {
            container.innerHTML = '<div class="loading">No recipes found in this category.</div>';
            return;
        }
        
        recipes.forEach((recipe, index) => {
            const card = this.createRecipeCard(recipe, category, index);
            container.appendChild(card);
        });
    }
}

// Page controller
class PageController {
    constructor() {
        this.recipeManager = new RecipeManager();
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.handlePageLoad());
        } else {
            this.handlePageLoad();
        }
    }
    
    handlePageLoad() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        
        // Handle different page types
        if (filename === 'recipe-detail.html') {
            this.loadRecipeDetail();
        } else if (filename !== 'index.html' && filename !== '') {
            // Category page
            const category = filename.replace('.html', '');
            this.loadCategoryPage(category);
        }
        
        // Add navigation event listeners
        this.setupNavigation();
    }
    
    loadCategoryPage(category) {
        const container = document.getElementById('recipe-grid');
        const titleElement = document.getElementById('category-title');
        
        if (titleElement) {
            titleElement.textContent = this.formatCategoryTitle(category);
        }
        
        const recipes = this.recipeManager.getRecipesByCategory(category);
        RecipeRenderer.renderRecipeGrid(recipes, category, container);
    }
    
    loadRecipeDetail() {
        const recipeInfo = JSON.parse(localStorage.getItem('currentRecipe') || '{}');
        
        if (!recipeInfo.category || recipeInfo.id === undefined) {
            document.body.innerHTML = '<div class="container"><div class="loading">Recipe not found. <a href="index.html">Go back to home</a></div></div>';
            return;
        }
        
        const recipe = this.recipeManager.getRecipeById(recipeInfo.category, recipeInfo.id);
        
        if (!recipe) {
            document.body.innerHTML = '<div class="container"><div class="loading">Recipe not found. <a href="index.html">Go back to home</a></div></div>';
            return;
        }
        
        this.renderRecipeDetail(recipe, recipeInfo.category);
    }
    
    renderRecipeDetail(recipe, category) {
        const titleElement = document.getElementById('recipe-title');
        const imageElement = document.getElementById('recipe-image');
        const ingredientsElement = document.getElementById('ingredients-list');
        const instructionsElement = document.getElementById('instructions-list');
        const backButton = document.getElementById('back-button');
        
        if (titleElement) titleElement.textContent = recipe.title;
        
        if (imageElement) {
            imageElement.src = recipe.image;
            imageElement.alt = recipe.title;
            imageElement.onerror = function() {
                this.style.display = 'flex';
                this.style.alignItems = 'center';
                this.style.justifyContent = 'center';
                this.style.fontSize = '4rem';
                this.style.color = '#999';
                this.innerHTML = '🍽️';
            };
        }
        
        if (ingredientsElement && recipe.ingredients) {
            ingredientsElement.innerHTML = recipe.ingredients
                .map(ingredient => `<li>${ingredient}</li>`)
                .join('');
        }
        
        if (instructionsElement && recipe.instructions) {
            instructionsElement.innerHTML = recipe.instructions
                .map(instruction => `<li>${instruction}</li>`)
                .join('');
        }
        
        if (backButton) {
            backButton.href = `${category}.html`;
        }
    }
    
    formatCategoryTitle(category) {
        return category
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ') + ' Recipes';
    }
    
    setupNavigation() {
        // Add smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        
        // Add loading states for navigation
        document.querySelectorAll('a[href$=".html"]').forEach(link => {
            link.addEventListener('click', function() {
                // Add loading state if needed
                const loadingDiv = document.createElement('div');
                loadingDiv.className = 'loading';
                loadingDiv.textContent = 'Loading...';
                document.body.appendChild(loadingDiv);
            });
        });
    }
}

// Search functionality
class SearchManager {
    constructor(recipeManager) {
        this.recipeManager = recipeManager;
        this.setupSearch();
    }
    
    setupSearch() {
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');
        const searchResults = document.getElementById('search-results');
        
        if (!searchInput) return;
        
        const performSearch = () => {
            const query = searchInput.value.trim();
            if (query.length < 2) {
                if (searchResults) searchResults.innerHTML = '';
                return;
            }
            
            const results = this.recipeManager.searchRecipes(query);
            this.displaySearchResults(results, searchResults);
        };
        
        searchInput.addEventListener('input', performSearch);
        if (searchButton) {
            searchButton.addEventListener('click', performSearch);
        }
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    displaySearchResults(results, container) {
        if (!container) return;
        
        if (results.length === 0) {
            container.innerHTML = '<div class="loading">No recipes found.</div>';
            return;
        }
        
        container.innerHTML = '';
        results.forEach(result => {
            const card = RecipeRenderer.createRecipeCard(result, result.category, result.id);
            container.appendChild(card);
        });
    }
}

// Initialize the application
const app = new PageController();

// Initialize search if search elements exist
if (document.getElementById('search-input')) {
    new SearchManager(app.recipeManager);
}

// Export for global access
window.RecipeApp = {
    PageController,
    RecipeManager,
    RecipeRenderer,
    SearchManager
};