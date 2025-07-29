// Cuisine Page JavaScript

class CuisineManager {
    constructor() {
        this.recipes = [];
        this.currentFilter = 'all';
        this.displayedCount = 10;
        this.totalRecipes = 0;
        this.init();
    }

    init() {
        // Recipes removed - no longer generating recipes
        this.setupEventListeners();
        this.displayEmptyState();
        this.updateRecipeCount();
    }

    displayEmptyState() {
        const grid = document.getElementById('cuisineGrid');
        if (grid) {
            grid.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
                    <i class="fas fa-globe" style="font-size: 4rem; color: #ccc; margin-bottom: 1rem;"></i>
                    <h3 style="color: #666; margin-bottom: 1rem;">No Cuisine Recipes Available</h3>
                    <p style="color: #999;">Cuisine recipes have been removed from this section.</p>
                </div>
            `;
        }
    }

    // Recipe generation removed

    setupEventListeners() {
        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.filterRecipes(filter);
                
                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMoreRecipes();
            });
        }

        // Recipe card clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.cuisine-card') && !e.target.closest('.favorite-btn')) {
                const card = e.target.closest('.cuisine-card');
                const recipeId = card.dataset.id;
                if (recipeId) {
                    this.showRecipeDetails(recipeId);
                }
            }
        });

        // Cuisine spotlight button
        const spotlightBtn = document.querySelector('.spotlight-text .btn');
        if (spotlightBtn) {
            spotlightBtn.addEventListener('click', () => {
                this.filterRecipes('indian');
                document.querySelector('.cuisine-categories').scrollIntoView({ behavior: 'smooth' });
            });
        }
    }

    filterRecipes(filter) {
        this.currentFilter = filter;
        this.displayedCount = 10;
        this.displayEmptyState();
        this.updateRecipeCount();
    }

    displayRecipes() {
        this.displayEmptyState();
    }

    loadMoreRecipes() {
        // Load more functionality removed - showing empty state
        this.displayEmptyState();
    }

    updateRecipeCount() {
        const countElement = document.querySelector('.cuisine-count');
        if (countElement) {
            countElement.textContent = 'Showing 0 of 0 recipes';
        }
    }

    showRecipeDetails(recipeId) {
        // Recipe details removed
        console.log('Recipe details not available');
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);

        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        });
    }
}

// Favorite functionality
function toggleFavorite(button) {
    const card = button.closest('.cuisine-card');
    const recipeId = card.dataset.id;
    const icon = button.querySelector('i');
    
    let favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    
    if (favorites.includes(recipeId)) {
        // Remove from favorites
        favorites = favorites.filter(id => id !== recipeId);
        icon.className = 'far fa-heart';
        button.classList.remove('active');
    } else {
        // Add to favorites
        favorites.push(recipeId);
        icon.className = 'fas fa-heart';
        button.classList.add('active');
    }
    
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
}

// Load favorite states
function loadFavoriteStates() {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    
    document.querySelectorAll('.cuisine-card').forEach(card => {
        const recipeId = card.dataset.id;
        const favoriteBtn = card.querySelector('.favorite-btn');
        const icon = favoriteBtn?.querySelector('i');
        
        if (favorites.includes(recipeId) && icon) {
            icon.className = 'fas fa-heart';
            favoriteBtn.classList.add('active');
        }
    });
}

// Smooth scrolling for story links
function setupStoryLinks() {
    document.querySelectorAll('.story-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // In a real application, this would navigate to the story page
            alert('Story feature coming soon!');
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const cuisineManager = new CuisineManager();
    
    // Load favorite states after a short delay to ensure cards are rendered
    setTimeout(loadFavoriteStates, 100);
    
    // Setup story links
    setupStoryLinks();
});

// Add notification styles
const notificationStyles = `
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 300px;
    animation: slideInRight 0.3s ease;
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

.notification-close {
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
`;

// Inject notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);