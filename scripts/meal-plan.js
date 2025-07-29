// Meal Plan Page JavaScript

class MealPlanManager {
    constructor() {
        this.mealPlans = [];
        this.currentFilter = 'all';
        this.displayedCount = 6;
        this.totalPlans = 500;
        this.init();
    }

    init() {
        // Meal plans removed - no longer generating meal plans
        this.setupEventListeners();
        this.displayEmptyState();
        this.updateMealPlanCount();
    }

    // Meal plan generation removed

    setupEventListeners() {
        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.filterMealPlans(filter);
                
                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMoreMealPlans();
            });
        }

        // Meal plan form
        const mealPlanForm = document.getElementById('mealPlanForm');
        if (mealPlanForm) {
            mealPlanForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.generateCustomMealPlan();
            });
        }

        // Meal plan card clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.meal-plan-card') && !e.target.closest('.favorite-btn')) {
                const card = e.target.closest('.meal-plan-card');
                const mealPlanId = card.dataset.id;
                this.showMealPlanDetails(mealPlanId);
            }
        });
    }

    filterMealPlans(filter) {
        this.currentFilter = filter;
        this.displayedCount = 6;
        this.displayEmptyState();
        this.updateMealPlanCount();
    }

    displayEmptyState() {
        const grid = document.getElementById('mealPlanGrid');
        if (grid) {
            grid.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
                    <i class="fas fa-calendar-alt" style="font-size: 4rem; color: #ccc; margin-bottom: 1rem;"></i>
                    <h3 style="color: #666; margin-bottom: 1rem;">No Meal Plans Available</h3>
                    <p style="color: #999;">Meal plans have been removed from this section.</p>
                </div>
            `;
        }
    }

    displayMealPlans() {
        this.displayEmptyState();
    }

    createMealPlanCard(plan) {
        const card = document.createElement('div');
        card.className = 'meal-plan-card';
        card.dataset.category = plan.category;
        card.dataset.id = plan.id;

        let metaContent = '';
        let nutritionContent = '';

        // Generate category-specific content
        if (plan.category === 'high-protein') {
            metaContent = `
                <span class="protein-content"><i class="fas fa-dumbbell"></i> ${plan.protein}</span>
                <span class="meal-count"><i class="fas fa-utensils"></i> ${plan.duration} days</span>
                <span class="category">High Protein</span>
            `;
            nutritionContent = `
                <span class="nutrition-item">Protein: ${plan.protein}</span>
                <span class="nutrition-item">Calories: ${plan.calories}</span>
            `;
        } else if (plan.category === 'low-carb') {
            metaContent = `
                <span class="carb-content"><i class="fas fa-leaf"></i> ${plan.carbs}</span>
                <span class="meal-count"><i class="fas fa-utensils"></i> ${plan.duration} days</span>
                <span class="category">Low Carb</span>
            `;
            nutritionContent = `
                <span class="nutrition-item">Carbs: ${plan.carbs}</span>
                <span class="nutrition-item">Fat: ${plan.fat}</span>
            `;
        } else if (plan.category === 'gluten-free') {
            metaContent = `
                <span class="gluten-free"><i class="fas fa-check-circle"></i> ${plan.certification}</span>
                <span class="meal-count"><i class="fas fa-utensils"></i> ${plan.duration} days</span>
                <span class="category">Gluten Free</span>
            `;
            nutritionContent = `
                <span class="nutrition-item">${plan.certification}</span>
                <span class="nutrition-item">${plan.nutrition}</span>
            `;
        } else if (plan.category === 'budget-friendly') {
            metaContent = `
                <span class="cost"><i class="fas fa-dollar-sign"></i> ${plan.cost}</span>
                <span class="meal-count"><i class="fas fa-utensils"></i> ${plan.duration} days</span>
                <span class="category">Budget Friendly</span>
            `;
            nutritionContent = `
                <span class="nutrition-item">Cost: ${plan.cost}</span>
                <span class="nutrition-item">${plan.savings}</span>
            `;
        } else if (plan.category === 'weight-loss') {
            metaContent = `
                <span class="calories"><i class="fas fa-fire"></i> ${plan.calories}</span>
                <span class="meal-count"><i class="fas fa-utensils"></i> ${plan.duration} days</span>
                <span class="category">Weight Loss</span>
            `;
            nutritionContent = `
                <span class="nutrition-item">${plan.benefits}</span>
                <span class="nutrition-item">${plan.calories}</span>
            `;
        }

        card.innerHTML = `
            <img src="${plan.image}" alt="${plan.title}" class="meal-plan-image">
            <div class="meal-plan-content">
                <h3 class="meal-plan-title">${plan.title}</h3>
                <p class="meal-plan-description">${plan.description}</p>
                <div class="meal-plan-meta">
                    ${metaContent}
                </div>
                <div class="nutrition-highlights">
                    ${nutritionContent}
                </div>
                <button class="favorite-btn" onclick="toggleFavorite(this)"><i class="far fa-heart"></i></button>
            </div>
        `;

        return card;
    }

    loadMoreMealPlans() {
        // Load more functionality removed - no meal plans to load
        console.log('Load more meal plans functionality has been removed');
    }

    updateMealPlanCount() {
        const countElement = document.querySelector('.meal-plan-count');
        if (countElement) {
            countElement.textContent = 'No meal plans available';
        }
    }

    generateCustomMealPlan() {
        // Custom meal plan generation removed
        this.showNotification('Meal plan generation is no longer available.', 'info');
    }

    showMealPlanDetails(mealPlanId) {
        // Meal plan details removed
        console.log('Meal plan details functionality has been removed');
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
    const card = button.closest('.meal-plan-card');
    const mealPlanId = card.dataset.id;
    const icon = button.querySelector('i');
    
    let favorites = JSON.parse(localStorage.getItem('favoriteMealPlans') || '[]');
    
    if (favorites.includes(mealPlanId)) {
        // Remove from favorites
        favorites = favorites.filter(id => id !== mealPlanId);
        icon.className = 'far fa-heart';
        button.classList.remove('active');
    } else {
        // Add to favorites
        favorites.push(mealPlanId);
        icon.className = 'fas fa-heart';
        button.classList.add('active');
    }
    
    localStorage.setItem('favoriteMealPlans', JSON.stringify(favorites));
}

// Load favorite states
function loadFavoriteStates() {
    const favorites = JSON.parse(localStorage.getItem('favoriteMealPlans') || '[]');
    
    document.querySelectorAll('.meal-plan-card').forEach(card => {
        const mealPlanId = card.dataset.id;
        const favoriteBtn = card.querySelector('.favorite-btn');
        const icon = favoriteBtn?.querySelector('i');
        
        if (favorites.includes(mealPlanId) && icon) {
            icon.className = 'fas fa-heart';
            favoriteBtn.classList.add('active');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const mealPlanManager = new MealPlanManager();
    
    // Load favorite states after a short delay to ensure cards are rendered
    setTimeout(loadFavoriteStates, 100);
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