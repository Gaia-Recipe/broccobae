class MealPlanManager {
    constructor() {
        this.mealPlans = [];
        this.filteredMealPlans = [];
        this.currentCategory = 'all';
        this.mealPlansPerPage = 12;
        this.currentPage = 1;
        this.init();
    }

    init() {
        this.generateMealPlans();
        this.filteredMealPlans = [...this.mealPlans];
        this.setupEventListeners();
        this.displayMealPlans();
        this.updateMealPlanCount();
    }

    generateMealPlans() {
        this.mealPlans = [
            // High-Protein Vegan Power
            {
                id: 'high-protein-vegan-power',
                title: 'High-Protein Vegan Power',
                category: 'high-protein',
                image: '../../images/stories/Recipes/All Mealplan/High-Protein Vegan Power.jpg',
                duration: '7 days',
                meals: '21 meals',
                difficulty: 'Medium',
                description: 'Power-packed meal plan focused on plant-based proteins to fuel your active lifestyle.',
                features: ['High protein content', 'Plant-based nutrition', 'Muscle building support', 'Energy boosting meals'],
                price: '$89',
                calories: '2200-2500 per day'
            },
            {
                id: 'high-protein-vegan-power-2',
                title: 'High-Protein Vegan Power Plus',
                category: 'high-protein',
                image: '../../images/stories/Recipes/All Mealplan/High-Protein Vegan Power Plus.jpg',
                duration: '14 days',
                meals: '42 meals',
                difficulty: 'Medium',
                description: 'Extended high-protein vegan meal plan for serious fitness enthusiasts.',
                features: ['Extended protein support', 'Variety of protein sources', 'Workout nutrition', 'Recovery meals'],
                price: '$169',
                calories: '2300-2600 per day'
            },

            // Low-Carb Vegan Delights
            {
                id: 'low-carb-vegan-delights',
                title: 'Low-Carb Vegan Delights',
                category: 'low-carb',
                image: '../../images/stories/Recipes/All Mealplan/Low-Carb Vegan Delights.jpg',
                duration: '7 days',
                meals: '21 meals',
                difficulty: 'Easy',
                description: 'Delicious low-carb vegan meals that satisfy without the carbs.',
                features: ['Low carbohydrate content', 'High fiber meals', 'Weight management', 'Blood sugar friendly'],
                price: '$79',
                calories: '1800-2100 per day'
            },
            {
                id: 'low-carb-vegan-delights-2',
                title: 'Low-Carb Vegan Delights Premium',
                category: 'low-carb',
                image: '../../images/stories/Recipes/All Mealplan/Low-Carb Vegan Delights Premium.jpg',
                duration: '14 days',
                meals: '42 meals',
                difficulty: 'Easy',
                description: 'Premium low-carb vegan meal plan with gourmet recipes.',
                features: ['Gourmet low-carb meals', 'Premium ingredients', 'Ketogenic friendly', 'Sustained energy'],
                price: '$149',
                calories: '1900-2200 per day'
            },

            // Budget-Friendly Vegan Eats
            {
                id: 'budget-friendly-vegan-eats',
                title: 'Budget-Friendly Vegan Eats',
                category: 'budget-friendly',
                image: '../../images/stories/Recipes/All Mealplan/Budget-Friendly Vegan Eats.jpg',
                duration: '7 days',
                meals: '21 meals',
                difficulty: 'Easy',
                description: 'Affordable vegan meals that don\'t compromise on nutrition or taste.',
                features: ['Cost-effective ingredients', 'Bulk cooking friendly', 'Nutritious meals', 'Simple preparation'],
                price: '$49',
                calories: '2000-2300 per day'
            },
            {
                id: 'budget-friendly-vegan-eats-2',
                title: 'Budget-Friendly Vegan Eats Family',
                category: 'budget-friendly',
                image: '../../images/stories/Recipes/All Mealplan/Budget-Friendly Vegan Eats Family.jpg',
                duration: '14 days',
                meals: '42 meals',
                difficulty: 'Easy',
                description: 'Family-sized budget-friendly vegan meal plan for larger households.',
                features: ['Family portions', 'Bulk savings', 'Kid-friendly options', 'Meal prep friendly'],
                price: '$89',
                calories: '2100-2400 per day'
            },

            // Weight Loss Vegan Plan
            {
                id: 'weight-loss-vegan-plan',
                title: 'Weight Loss Vegan Plan',
                category: 'weight-loss',
                image: '../../images/stories/Recipes/All Mealplan/Weight Loss Vegan Plan.jpg',
                duration: '7 days',
                meals: '21 meals',
                difficulty: 'Medium',
                description: 'Scientifically designed vegan meal plan for healthy weight loss.',
                features: ['Calorie controlled', 'Nutrient dense', 'Metabolism boosting', 'Sustainable weight loss'],
                price: '$69',
                calories: '1500-1800 per day'
            },
            {
                id: 'weight-loss-vegan-plan-2',
                title: 'Weight Loss Vegan Plan Intensive',
                category: 'weight-loss',
                image: '../../images/stories/Recipes/All Mealplan/Weight Loss Vegan Plan Intensive.jpg',
                duration: '14 days',
                meals: '42 meals',
                difficulty: 'Medium',
                description: 'Intensive 14-day vegan weight loss program with coaching support.',
                features: ['Intensive program', 'Coaching included', 'Progress tracking', 'Rapid results'],
                price: '$129',
                calories: '1400-1700 per day'
            },

            // All Recipe Plans
            {
                id: 'all-recipe-complete',
                title: 'Complete Vegan Recipe Collection',
                category: 'all',
                image: '../../images/stories/Recipes/All Mealplan/Complete Vegan Collection.jpg',
                duration: '30 days',
                meals: '90 meals',
                difficulty: 'Varied',
                description: 'Comprehensive collection of all our vegan recipes across all categories.',
                features: ['All recipe categories', 'Maximum variety', 'Flexible planning', 'Complete nutrition'],
                price: '$199',
                calories: '1800-2500 per day'
            },
            {
                id: 'all-recipe-starter',
                title: 'Vegan Recipe Starter Pack',
                category: 'all',
                image: '../../images/stories/Recipes/All Mealplan/Vegan Starter Pack.jpg',
                duration: '7 days',
                meals: '21 meals',
                difficulty: 'Easy',
                description: 'Perfect introduction to vegan cooking with recipes from all categories.',
                features: ['Beginner friendly', 'Recipe variety', 'Easy preparation', 'Nutritional guidance'],
                price: '$59',
                calories: '2000-2300 per day'
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
                this.filterMealPlans(category);
                this.updateActiveFilter(button);
            });
        });

        // Load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMoreMealPlans();
            });
        }

        // Customize meal plan buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('customize-btn')) {
                const mealPlanId = e.target.getAttribute('data-meal-plan-id');
                this.generateCustomMealPlan(mealPlanId);
            }
        });
    }

    filterMealPlans(category) {
        this.currentCategory = category;
        this.currentPage = 1;
        
        if (category === 'all') {
            this.filteredMealPlans = [...this.mealPlans];
        } else {
            this.filteredMealPlans = this.mealPlans.filter(plan => plan.category === category);
        }
        
        this.displayMealPlans();
        this.updateMealPlanCount();
    }

    updateActiveFilter(activeButton) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => button.classList.remove('active'));
        activeButton.classList.add('active');
    }

    displayMealPlans() {
        const mealPlanGrid = document.getElementById('mealPlanGrid');
        if (!mealPlanGrid) return;

        const startIndex = 0;
        const endIndex = this.currentPage * this.mealPlansPerPage;
        const plansToShow = this.filteredMealPlans.slice(startIndex, endIndex);

        if (plansToShow.length === 0) {
            this.displayEmptyState();
            return;
        }

        mealPlanGrid.innerHTML = plansToShow.map(plan => `
            <div class="meal-plan-card" data-plan-id="${plan.id}">
                <div class="meal-plan-image">
                    <img src="${plan.image}" alt="${plan.title}" loading="lazy">
                    <div class="meal-plan-overlay">
                        <button class="view-plan-btn" onclick="window.location.href='meal-plan-detail.html?id=${plan.id}'">
                            View Plan
                        </button>
                    </div>
                </div>
                <div class="meal-plan-content">
                    <h3 class="meal-plan-title">${plan.title}</h3>
                    <div class="meal-plan-meta">
                        <span class="duration">
                            <i class="icon-calendar"></i>
                            ${plan.duration}
                        </span>
                        <span class="meals">
                            <i class="icon-utensils"></i>
                            ${plan.meals}
                        </span>
                        <span class="difficulty ${plan.difficulty.toLowerCase()}">
                            ${plan.difficulty}
                        </span>
                    </div>
                    <p class="meal-plan-description">${plan.description}</p>
                    <div class="meal-plan-features">
                        ${plan.features.slice(0, 2).map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                    </div>
                    <div class="meal-plan-footer">
                        <span class="price">${plan.price}</span>
                        <button class="customize-btn" data-meal-plan-id="${plan.id}">
                            Customize
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        this.updateLoadMoreButton();
    }

    displayEmptyState() {
        const mealPlanGrid = document.getElementById('mealPlanGrid');
        mealPlanGrid.innerHTML = `
            <div class="empty-state">
                <h3>No meal plans found</h3>
                <p>Try selecting a different category or check back later for new meal plans.</p>
            </div>
        `;
        this.updateLoadMoreButton();
    }

    loadMoreMealPlans() {
        this.currentPage++;
        this.displayMealPlans();
    }

    updateLoadMoreButton() {
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (!loadMoreBtn) return;

        const totalShown = this.currentPage * this.mealPlansPerPage;
        const hasMore = totalShown < this.filteredMealPlans.length;
        
        loadMoreBtn.style.display = hasMore ? 'block' : 'none';
    }

    updateMealPlanCount() {
        const countElement = document.querySelector('.meal-plan-count');
        if (countElement) {
            const total = this.filteredMealPlans.length;
            const categoryText = this.currentCategory === 'all' ? 'meal plans' : `${this.currentCategory} meal plans`;
            countElement.textContent = `Showing ${total} ${categoryText}`;
        }
    }

    generateCustomMealPlan(mealPlanId) {
        const plan = this.mealPlans.find(p => p.id === mealPlanId);
        if (!plan) return;

        // Show customization modal or redirect to customization page
        this.showNotification(`Customizing ${plan.title}...`);
        
        // Simulate customization process
        setTimeout(() => {
            this.showNotification(`${plan.title} has been added to your meal plan!`);
        }, 1500);
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    getMealPlanById(id) {
        return this.mealPlans.find(plan => plan.id === id);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MealPlanManager();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MealPlanManager;
}