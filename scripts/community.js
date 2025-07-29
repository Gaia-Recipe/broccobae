// Community Page JavaScript

class CommunityManager {
    constructor() {
        this.recipes = [];
        this.currentFilter = 'all';
        this.displayedCount = 10;
        this.totalRecipes = 500;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.displayRecipes();
        this.updateRecipeCount();
    }

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

        // Recipe form submission
        const recipeForm = document.getElementById('recipeSubmissionForm');
        if (recipeForm) {
            recipeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleRecipeSubmission(e.target);
            });
        }

        // Recipe card clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.community-card') && !e.target.closest('.favorite-btn') && !e.target.closest('.engagement-btn')) {
                const card = e.target.closest('.community-card');
                const recipeId = card.dataset.id;
                if (recipeId) {
                    this.showRecipeDetails(recipeId);
                }
            }
        });

        // Engagement buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.engagement-btn')) {
                const btn = e.target.closest('.engagement-btn');
                const icon = btn.querySelector('i');
                
                if (icon.classList.contains('fa-heart')) {
                    this.handleLike(btn);
                } else if (icon.classList.contains('fa-comment')) {
                    this.handleComment(btn);
                } else if (icon.classList.contains('fa-share')) {
                    this.handleShare(btn);
                }
            }
        });
    }

    filterRecipes(filter) {
        this.currentFilter = filter;
        this.displayedCount = 10;
        this.displayRecipes();
        this.updateRecipeCount();
    }

    displayRecipes() {
        const grid = document.getElementById('communityGrid');
        if (!grid) return;

        // Clear existing cards except the static ones
        const existingCards = grid.querySelectorAll('.community-card:not([data-static])');
        existingCards.forEach(card => card.remove());

        // Filter recipes
        let filteredRecipes = this.recipes;
        if (this.currentFilter !== 'all') {
            filteredRecipes = this.recipes.filter(recipe => recipe.category === this.currentFilter);
        }

        // Display recipes (skip the first 4 static cards)
        const recipesToShow = filteredRecipes.slice(0, this.displayedCount - 4);
        recipesToShow.forEach((recipe, index) => {
            const card = this.createRecipeCard(recipe);
            grid.appendChild(card);
        });

        // Update load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            if (this.displayedCount >= filteredRecipes.length + 4) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }
    }

    createRecipeCard(recipe) {
        const card = document.createElement('div');
        card.className = 'community-card';
        card.dataset.category = recipe.category;
        card.dataset.id = recipe.id;

        // Get season icon based on category
        let seasonIcon = '';
        let seasonText = '';
        
        switch (recipe.category) {
            case 'festive':
                seasonIcon = 'fas fa-star';
                seasonText = 'Festive';
                break;
            case 'summer':
                seasonIcon = 'fas fa-sun';
                seasonText = 'Summer';
                break;
            case 'monsoon':
                seasonIcon = 'fas fa-cloud-rain';
                seasonText = 'Monsoon';
                break;
            case 'winter':
                seasonIcon = 'fas fa-snowflake';
                seasonText = 'Winter';
                break;
        }

        const tagsHtml = recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="community-image">
            <div class="community-content">
                <div class="community-author">
                    <img src="${recipe.author.avatar}" alt="${recipe.author.name}" class="author-avatar">
                    <div class="author-info">
                        <span class="author-name">${recipe.author.name}</span>
                        <span class="post-time">${recipe.postTime}</span>
                    </div>
                </div>
                <h3 class="community-title">${recipe.title}</h3>
                <p class="community-description">${recipe.description}</p>
                <div class="community-meta">
                    <span class="prep-time"><i class="fas fa-clock"></i> ${recipe.prepTime}</span>
                    <span class="difficulty" data-level="${recipe.difficulty.toLowerCase()}"><i class="fas fa-chart-bar"></i> ${recipe.difficulty}</span>
                    <span class="season" data-level="${recipe.category}"><i class="${seasonIcon}"></i> ${seasonText}</span>
                </div>
                <div class="community-engagement">
                    <button class="engagement-btn" data-count="${recipe.likes}"><i class="fas fa-heart"></i> ${recipe.likes}</button>
                    <button class="engagement-btn" data-count="${recipe.comments}"><i class="fas fa-comment"></i> ${recipe.comments}</button>
                    <button class="engagement-btn" data-count="${recipe.shares}"><i class="fas fa-share"></i> ${recipe.shares}</button>
                </div>
                <button class="favorite-btn" onclick="toggleFavorite(this)"><i class="far fa-heart"></i></button>
            </div>
        `;

        return card;
    }

    loadMoreRecipes() {
        this.displayedCount += 6;
        this.displayRecipes();
        this.updateRecipeCount();
    }

    updateRecipeCount() {
        const countElement = document.querySelector('.recipe-count');
        if (!countElement) return;

        let totalCount = this.recipes.length;
        if (this.currentFilter !== 'all') {
            totalCount = this.recipes.filter(recipe => recipe.category === this.currentFilter).length;
        }

        const displayedCount = Math.min(this.displayedCount, totalCount + 4);
        countElement.textContent = `Showing ${displayedCount} of ${totalCount + 4} community recipes`;
    }

    handleRecipeSubmission(form) {
        const formData = new FormData(form);
        const recipeData = {
            name: formData.get('recipeName'),
            category: formData.get('recipeCategory'),
            prepTime: formData.get('prepTime'),
            cookTime: formData.get('cookTime'),
            servings: formData.get('servings'),
            description: formData.get('recipeDescription'),
            ingredients: formData.get('ingredients'),
            instructions: formData.get('instructions'),
            difficulty: formData.get('difficulty'),
            tags: formData.get('tags'),
            tips: formData.get('tips')
        };

        // Validate required fields
        const requiredFields = ['name', 'category', 'prepTime', 'cookTime', 'servings', 'description', 'ingredients', 'instructions', 'difficulty'];
        const missingFields = requiredFields.filter(field => !recipeData[field]);
        
        if (missingFields.length > 0) {
            this.showNotification(`Please fill in all required fields: ${missingFields.join(', ')}`, 'error');
            return;
        }

        // Simulate recipe submission
        this.showNotification('Thank you for sharing your recipe! It will be reviewed and published soon.', 'success');
        
        // Reset form
        form.reset();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    handleLike(button) {
        const currentCount = parseInt(button.dataset.count);
        const newCount = currentCount + 1;
        button.dataset.count = newCount;
        button.innerHTML = `<i class="fas fa-heart"></i> ${newCount}`;
        button.style.color = '#FF6B6B';
        
        // Add animation
        button.style.transform = 'scale(1.2)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    }

    handleComment(button) {
        // In a real application, this would open a comment modal
        this.showNotification('Comment feature coming soon!', 'info');
    }

    handleShare(button) {
        const currentCount = parseInt(button.dataset.count);
        const newCount = currentCount + 1;
        button.dataset.count = newCount;
        button.innerHTML = `<i class="fas fa-share"></i> ${newCount}`;
        
        // Copy to clipboard (simulate sharing)
        if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href).then(() => {
                this.showNotification('Recipe link copied to clipboard!', 'success');
            });
        } else {
            this.showNotification('Recipe shared!', 'success');
        }
    }

    showRecipeDetails(recipeId) {
        const recipe = this.recipes.find(r => r.id === recipeId);
        if (!recipe) return;

        // Create modal or navigate to detail page
        const details = `
            Recipe: ${recipe.title}
            Author: ${recipe.author.name}
            Category: ${recipe.category}
            Posted: ${recipe.postTime}
            
            Prep Time: ${recipe.prepTime}
            Cook Time: ${recipe.cookTime}
            Total Time: ${recipe.totalTime}
            Servings: ${recipe.servings}
            Difficulty: ${recipe.difficulty}
            
            Nutrition (per serving):
            Calories: ${recipe.calories}
            Protein: ${recipe.protein}
            Carbs: ${recipe.carbs}
            Fat: ${recipe.fat}
            
            ${recipe.description}
            
            Engagement:
            ❤️ ${recipe.likes} likes
            💬 ${recipe.comments} comments
            📤 ${recipe.shares} shares
        `;
        
        alert(details);
        
        // In a real application, you would navigate to a detailed page
        // window.location.href = `recipe-detail.html?id=${recipeId}`;
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
    const card = button.closest('.community-card');
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

// Reset form function
function resetForm() {
    const form = document.getElementById('recipeSubmissionForm');
    if (form) {
        form.reset();
    }
}

// Load favorite states
function loadFavoriteStates() {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    
    document.querySelectorAll('.community-card').forEach(card => {
        const recipeId = card.dataset.id;
        const favoriteBtn = card.querySelector('.favorite-btn');
        const icon = favoriteBtn?.querySelector('i');
        
        if (favorites.includes(recipeId) && icon) {
            icon.className = 'fas fa-heart';
            favoriteBtn.classList.add('active');
        }
    });
}

// Form validation helpers
function validateForm() {
    const form = document.getElementById('recipeSubmissionForm');
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#f44336';
            isValid = false;
        } else {
            input.style.borderColor = '#e0e0e0';
        }
    });
    
    return isValid;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const communityManager = new CommunityManager();
    
    // Load favorite states after a short delay to ensure cards are rendered
    setTimeout(loadFavoriteStates, 100);
    
    // Add real-time form validation
    const form = document.getElementById('recipeSubmissionForm');
    if (form) {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateForm);
        });
    }
});

// Add notification styles
const communityNotificationStyles = `
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
const communityStyleSheet = document.createElement('style');
communityStyleSheet.textContent = communityNotificationStyles;
document.head.appendChild(communityStyleSheet);