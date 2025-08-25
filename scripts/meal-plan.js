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
        this.generateMealPlans();
        this.setupEventListeners();
        this.filterMealPlans('all');
        this.updateMealPlanCount();
    }

    generateMealPlans() {
        this.mealPlans = [
            // High Protein Plans
            {
                id: 'high-protein-1',
                title: 'High-Protein Vegan Power',
                category: 'high-protein',
                image: '../../images/stories/Recipes/All Mealplan/High-Protein Vegan Power.png',
                description: 'Boost your protein intake with this power-packed vegan meal plan featuring protein-rich plant foods.',
                duration: '7',
                protein: '25-30g per meal',
                calories: '1800-2000 cal/day',
                benefits: 'Muscle building support'
            },
            {
                id: 'high-protein-2',
                title: 'Protein Smoothie Power Plan',
                category: 'high-protein',
                image: '../../images/stories/Recipes/All Mealplan/Protein Smoothie with Plant-Based Protein Powder.webp',
                description: 'Start your day with protein-packed smoothies and maintain high protein throughout the day.',
                duration: '5',
                protein: '20-25g per meal',
                calories: '1600-1800 cal/day',
                benefits: 'Quick protein absorption'
            },
            // Low Carb Plans
            {
                id: 'low-carb-1',
                title: 'Low-Carb Vegan Delights',
                category: 'low-carb',
                image: '../../images/stories/Recipes/All Mealplan/Low-Carb Vegan Delights.png',
                description: 'Enjoy delicious low-carb vegan meals that keep you satisfied while maintaining ketosis.',
                duration: '7',
                carbs: '20-30g per day',
                fat: '70-80g per day',
                nutrition: 'Ketogenic friendly'
            },
            {
                id: 'low-carb-2',
                title: 'Cauliflower Rice Curry Plan',
                category: 'low-carb',
                image: '../../images/stories/Recipes/All Mealplan/Chickpea Curry with Cauliflower Rice.jpg',
                description: 'Replace traditional rice with cauliflower rice in flavorful curry dishes.',
                duration: '5',
                carbs: '15-25g per day',
                fat: '60-70g per day',
                nutrition: 'Low glycemic index'
            },
            // Budget Friendly Plans
            {
                id: 'budget-1',
                title: 'Budget-Friendly Vegan Eats',
                category: 'budget-friendly',
                image: '../../images/stories/Recipes/All Mealplan/Budget-Friendly Vegan Eats.png',
                description: 'Nutritious and delicious vegan meals that won\'t break the bank.',
                duration: '7',
                cost: '$3-5 per day',
                savings: 'Save 40% vs eating out',
                nutrition: 'Complete nutrition on budget'
            },
            {
                id: 'budget-2',
                title: 'Chickpea Power Meals',
                category: 'budget-friendly',
                image: '../../images/stories/Recipes/All Mealplan/Roasted Chickpeas with Spices.jpg',
                description: 'Affordable protein-rich meals centered around versatile chickpeas.',
                duration: '5',
                cost: '$2-4 per day',
                savings: 'Bulk buying savings',
                nutrition: 'High protein, low cost'
            },
            // Weight Loss Plans
            {
                id: 'weight-loss-1',
                title: 'Weight Loss Vegan Plan',
                category: 'weight-loss',
                image: '../../images/stories/Recipes/All Mealplan/Weight Loss Vegan Plan.jpg',
                description: 'Carefully portioned meals designed to support healthy weight loss goals.',
                duration: '14',
                calories: '1200-1400 cal/day',
                benefits: 'Sustainable weight loss',
                nutrition: 'Nutrient dense, calorie controlled'
            },
            {
                id: 'weight-loss-2',
                title: 'Green Detox Meal Plan',
                category: 'weight-loss',
                image: '../../images/stories/Recipes/All Mealplan/Spinach and Mushroom Salad with Lemon Vinaigrette.jpg',
                description: 'Fresh, green-focused meals that support natural detoxification and weight management.',
                duration: '7',
                calories: '1000-1200 cal/day',
                benefits: 'Detox and cleanse',
                nutrition: 'High fiber, low calorie'
            },
            // Gluten Free Plans
            {
                id: 'gluten-free-1',
                title: 'Gluten-Free Buckwheat Delights',
                category: 'gluten-free',
                image: '../../images/stories/Recipes/All Mealplan/Gluten-Free Buckwheat Pancakes.jpg',
                description: 'Delicious gluten-free meals featuring buckwheat and other safe grains.',
                duration: '7',
                certification: '100% Gluten-Free',
                nutrition: 'Celiac safe options'
            },
            {
                id: 'gluten-free-2',
                title: 'Quinoa Power Bowl Plan',
                category: 'gluten-free',
                image: '../../images/stories/Recipes/All Mealplan/Quinoa Salad with Black Beans and Avocado.jpg',
                description: 'Nutritious quinoa-based meals that are naturally gluten-free and protein-rich.',
                duration: '5',
                certification: 'Certified GF',
                nutrition: 'Complete amino acids'
            }
        ];
    }

    filterMealPlans(category) {
        this.currentFilter = category;
        
        if (category === 'all') {
            this.displayedMealPlans = [...this.mealPlans];
        } else {
            this.displayedMealPlans = this.mealPlans.filter(plan => plan.category === category);
        }
        
        this.displayedCount = 6;
        this.displayMealPlans();
        this.updateMealPlanCount();
    }

    displayEmptyState() {
        const grid = document.getElementById('mealPlanGrid');
        if (!grid) return;
        
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">
                    <i class="fas fa-calendar-alt"></i>
                </div>
                <h3 class="empty-state-title">No Meal Plans Found</h3>
                <p class="empty-state-description">Try selecting a different category or check back later for new meal plans!</p>
            </div>
        `;
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
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
        
        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        });
    }

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
        const grid = document.getElementById('mealPlanGrid');
        if (!grid) return;

        if (this.displayedMealPlans.length === 0) {
            this.displayEmptyState();
            return;
        }

        grid.innerHTML = '';
        
        this.displayedMealPlans.slice(0, this.displayedCount).forEach(plan => {
            const card = this.createMealPlanCard(plan);
            grid.appendChild(card);
        });

        // Show/hide load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            if (this.displayedCount >= this.displayedMealPlans.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }
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
        this.displayedCount += 6;
        this.displayMealPlans();
    }

    updateMealPlanCount() {
        const countElement = document.querySelector('.meal-plan-count');
        if (countElement) {
            const count = this.displayedMealPlans ? this.displayedMealPlans.length : this.mealPlans.length;
            countElement.textContent = `${count} meal plans available`;
        }
    }

    generateCustomMealPlan() {
        const formData = new FormData(document.getElementById('mealPlanForm'));
        const planType = formData.get('planType');
        const duration = formData.get('duration');
        const servings = formData.get('servings');
        
        // Filter meal plans based on selected type
        if (planType && planType !== '') {
            this.filterMealPlans(planType);
            
            // Scroll to meal plans section
            document.getElementById('meal-plan-categories').scrollIntoView({
                behavior: 'smooth'
            });
            
            this.showNotification(`Generated ${planType} meal plan for ${duration} days!`, 'success');
        }
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
const mealPlanNotificationStyles = `
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
const mealPlanStyleSheet = document.createElement('style');
mealPlanStyleSheet.textContent = mealPlanNotificationStyles;
document.head.appendChild(mealPlanStyleSheet);