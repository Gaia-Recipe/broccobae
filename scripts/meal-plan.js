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
                image: 'images/stories/Recipes/All Mealplan/High-Protein Vegan Power.png',
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
                image: 'images/stories/Recipes/All Mealplan/High-Protein Vegan Power.png',
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
                image: 'images/stories/Recipes/All Mealplan/Low-Carb Vegan Delights.png',
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
                title: 'Low-Carb Vegan Delights Extended',
                category: 'low-carb',
                image: 'images/stories/Recipes/All Mealplan/Low-Carb Vegan Delights.png',
                duration: '14 days',
                meals: '42 meals',
                difficulty: 'Easy',
                description: 'Extended low-carb vegan meal plan for sustained healthy eating.',
                features: ['Sustained low-carb nutrition', 'Variety of vegetables', 'Healthy fats focus', 'Metabolic support'],
                price: '$149',
                calories: '1900-2200 per day'
            },

            // Budget-Friendly Vegan Eats
            {
                id: 'budget-friendly-vegan-eats',
                title: 'Budget-Friendly Vegan Eats',
                category: 'budget-friendly',
                image: 'images/stories/Recipes/All Mealplan/Budget-Friendly Vegan Eats.png',
                duration: '7 days',
                meals: '21 meals',
                difficulty: 'Easy',
                description: 'Affordable vegan meals that don\'t compromise on nutrition or taste.',
                features: ['Cost-effective ingredients', 'Bulk cooking friendly', 'Nutritious and filling', 'Simple preparation'],
                price: '$49',
                calories: '2000-2300 per day'
            },
            {
                id: 'budget-friendly-vegan-eats-2',
                title: 'Budget-Friendly Vegan Eats Family',
                category: 'budget-friendly',
                image: 'images/stories/Recipes/All Mealplan/Budget-Friendly Vegan Eats.png',
                duration: '14 days',
                meals: '42 meals',
                difficulty: 'Easy',
                description: 'Extended budget-friendly meal plan perfect for families.',
                features: ['Family-sized portions', 'Economical shopping lists', 'Kid-friendly options', 'Meal prep friendly'],
                price: '$89',
                calories: '2100-2400 per day'
            },

            // Weight Loss Vegan Plan
            {
                id: 'weight-loss-vegan-plan',
                title: 'Weight Loss Vegan Plan',
                category: 'weight-loss',
                image: 'images/stories/Recipes/All Mealplan/Weight Loss Vegan Plan.jpg',
                duration: '7 days',
                meals: '21 meals',
                difficulty: 'Medium',
                description: 'Carefully crafted meal plan designed to support healthy weight loss goals.',
                features: ['Calorie controlled', 'High fiber content', 'Metabolism boosting', 'Satisfying portions'],
                price: '$69',
                calories: '1500-1800 per day'
            },
            {
                id: 'weight-loss-vegan-plan-2',
                title: 'Weight Loss Vegan Plan Intensive',
                category: 'weight-loss',
                image: 'images/stories/Recipes/All Mealplan/Weight Loss Vegan Plan.jpg',
                duration: '14 days',
                meals: '42 meals',
                difficulty: 'Medium',
                description: 'Intensive weight loss meal plan with structured nutrition and portion control.',
                features: ['Structured meal timing', 'Portion control guidance', 'Exercise meal pairing', 'Progress tracking'],
                price: '$129',
                calories: '1400-1700 per day'
            },

            // All Recipe Plans
            {
                id: 'complete-vegan-collection',
                title: 'Complete Vegan Collection',
                category: 'all',
                image: 'images/stories/Recipes/All Recipes/Fresh Vegan Salad.png',
                duration: '30 days',
                meals: '90 meals',
                difficulty: 'Varied',
                description: 'Comprehensive collection of all our vegan meal plans for the ultimate variety.',
                features: ['All meal plan types', 'Maximum variety', 'Flexible scheduling', 'Complete nutrition'],
                price: '$299',
                calories: '1500-2500 per day'
            },
            {
                id: 'vegan-starter-pack',
                title: 'Vegan Starter Pack',
                category: 'all',
                image: 'images/stories/Recipes/All Recipes/Smoothie Bowl.jpg',
                duration: '14 days',
                meals: '42 meals',
                difficulty: 'Easy',
                description: 'Perfect introduction to vegan meal planning with easy-to-follow recipes.',
                features: ['Beginner friendly', 'Simple ingredients', 'Step-by-step guides', 'Gradual transition'],
                price: '$99',
                calories: '1800-2200 per day'
            }
        ];
    }

    setupEventListeners() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        const generateButtons = document.querySelectorAll('.generate-btn');

        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.filterMealPlans(category);
                this.updateActiveFilter(e.target);
            });
        });

        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMoreMealPlans();
            });
        }

        generateButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const mealPlanId = e.target.closest('.meal-plan-card').dataset.mealPlanId;
                this.generateCustomMealPlan(mealPlanId);
            });
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
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        activeButton.classList.add('active');
    }

    displayMealPlans() {
        const mealPlansGrid = document.getElementById('mealPlansGrid');
        if (!mealPlansGrid) return;

        const startIndex = 0;
        const endIndex = this.currentPage * this.mealPlansPerPage;
        const plansToShow = this.filteredMealPlans.slice(startIndex, endIndex);

        if (plansToShow.length === 0) {
            this.displayEmptyState();
            return;
        }

        mealPlansGrid.innerHTML = plansToShow.map(plan => `
            <div class="meal-plan-card" data-meal-plan-id="${plan.id}">
                <div class="meal-plan-image">
                    <img src="${plan.image}" alt="${plan.title}" loading="lazy">
                    <div class="meal-plan-overlay">
                        <button class="generate-btn">
                            Generate Plan
                        </button>
                    </div>
                </div>
                <div class="meal-plan-content">
                    <h3 class="meal-plan-title">${plan.title}</h3>
                    <div class="meal-plan-meta">
                        <span class="duration">
                            <i class="fas fa-calendar"></i>
                            ${plan.duration}
                        </span>
                        <span class="meals">
                            <i class="fas fa-utensils"></i>
                            ${plan.meals}
                        </span>
                        <span class="difficulty ${plan.difficulty.toLowerCase()}">
                            <i class="fas fa-signal"></i>
                            ${plan.difficulty}
                        </span>
                    </div>
                    <p class="meal-plan-description">${plan.description}</p>
                    <div class="meal-plan-features">
                        ${plan.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                    </div>
                    <div class="meal-plan-footer">
                        <div class="price">${plan.price}</div>
                        <div class="calories">${plan.calories}</div>
                    </div>
                </div>
            </div>
        `).join('');

        this.updateLoadMoreButton();
    }

    displayEmptyState() {
        const mealPlansGrid = document.getElementById('mealPlansGrid');
        mealPlansGrid.innerHTML = `
            <div class="empty-state">
                <h3>No meal plans found</h3>
                <p>Try selecting a different category or check back later for new meal plans.</p>
            </div>
        `;
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
        const countElement = document.getElementById('mealPlanCount');
        if (countElement) {
            const count = this.filteredMealPlans.length;
            const categoryText = this.currentCategory === 'all' ? 'meal plans' : `${this.currentCategory} meal plans`;
            countElement.textContent = `${count} ${categoryText} found`;
        }
    }

    generateCustomMealPlan(mealPlanId) {
        const mealPlan = this.getMealPlanById(mealPlanId);
        if (!mealPlan) return;

        // Simulate meal plan generation
        this.showNotification(`Generating your ${mealPlan.title}...`);
        
        setTimeout(() => {
            this.showNotification(`Your ${mealPlan.title} has been generated! Check your email for details.`);
        }, 2000);
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
            </div>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Hide and remove notification
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    getMealPlanById(id) {
        return this.mealPlans.find(plan => plan.id === id);
    }
}

// Initialize the meal plan manager when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MealPlanManager();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MealPlanManager;
}