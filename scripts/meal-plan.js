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
            // Main Category Plans
            {
                id: 'high-protein-plan',
                title: 'High-Protein Vegan Power',
                category: 'high-protein',
                image: '../../images/stories/Recipes/All Mealplan/High-Protein Vegan Power.png',
                duration: '7 days',
                meals: '21 meals',
                calories: '1800-2200',
                price: '$89',
                description: 'Fuel your workouts with plant-based protein powerhouses.',
                features: ['25g+ protein per meal', 'Post-workout recipes', 'Muscle-building focus']
            },
            {
                id: 'low-carb-plan',
                title: 'Low-Carb Vegan Delights',
                category: 'low-carb',
                image: '../../images/stories/Recipes/All Mealplan/Low-Carb Vegan Delights.png',
                duration: '7 days',
                meals: '21 meals',
                calories: '1400-1800',
                price: '$79',
                description: 'Delicious low-carb meals that keep you satisfied.',
                features: ['<30g carbs per meal', 'High fiber content', 'Blood sugar friendly']
            },
            {
                id: 'budget-plan',
                title: 'Budget-Friendly Vegan Eats',
                category: 'budget-friendly',
                image: '../../images/stories/Recipes/All Mealplan/Budget-Friendly Vegan Eats.png',
                duration: '7 days',
                meals: '21 meals',
                calories: '1600-2000',
                price: '$49',
                description: 'Nutritious meals that won\'t break the bank.',
                features: ['Under $7 per day', 'Pantry staples', 'Bulk cooking tips']
            },
            {
                id: 'weight-loss-plan',
                title: 'Weight Loss Vegan Plan',
                category: 'weight-loss',
                image: '../../images/stories/Recipes/All Mealplan/Weight Loss Vegan Plan.jpg',
                duration: '7 days',
                meals: '21 meals',
                calories: '1200-1600',
                price: '$69',
                description: 'Sustainable weight loss with satisfying plant-based meals.',
                features: ['Calorie controlled', 'High volume foods', 'Metabolism boosting']
            },
            
            // High-Protein Individual Recipes
            {
                id: 'chickpea-omelette',
                title: 'Chickpea Flour Omelette with Veggies',
                category: 'high-protein',
                image: '../../images/stories/Recipes/All Mealplan/Chickpea Flour Omelette with Veggies 12.48.16.jpeg',
                duration: '1 meal',
                meals: '1 serving',
                calories: '320-380',
                price: '$3',
                description: 'Protein-packed breakfast with fresh vegetables.',
                features: ['18g protein', 'Gluten-free', 'Quick prep']
            },
            {
                id: 'quinoa-black-bean-salad',
                title: 'Quinoa Salad with Black Beans and Avocado',
                category: 'high-protein',
                image: '../../images/stories/Recipes/All Mealplan/Quinoa Salad with Black Beans and Avocado.jpg',
                duration: '1 meal',
                meals: '1 serving',
                calories: '420-480',
                price: '$4',
                description: 'Complete protein salad with healthy fats.',
                features: ['22g protein', 'Complete amino acids', 'Heart healthy']
            },
            {
                id: 'tempeh-stir-fry',
                title: 'Tempeh Stir-Fry with Brown Rice',
                category: 'high-protein',
                image: '../../images/stories/Recipes/All Mealplan/Tempeh Stir-Fry with Brown Rice.jpg',
                duration: '1 meal',
                meals: '1 serving',
                calories: '450-520',
                price: '$5',
                description: 'Fermented protein with wholesome grains.',
                features: ['24g protein', 'Probiotics', 'Fiber rich']
            },
            {
                id: 'roasted-chickpeas',
                title: 'Roasted Chickpeas with Spices',
                category: 'high-protein',
                image: '../../images/stories/Recipes/All Mealplan/Roasted Chickpeas with Spices.jpg',
                duration: '1 snack',
                meals: '1 serving',
                calories: '180-220',
                price: '$2',
                description: 'Crunchy protein-rich snack.',
                features: ['12g protein', 'Portable', 'Spice blend']
            },
            {
                id: 'protein-smoothie',
                title: 'Protein Smoothie with Plant-Based Protein Powder',
                category: 'high-protein',
                image: '../../images/stories/Recipes/All Mealplan/Protein Smoothie with Plant-Based Protein Powder.webp',
                duration: '1 drink',
                meals: '1 serving',
                calories: '280-340',
                price: '$4',
                description: 'Post-workout protein boost.',
                features: ['25g protein', 'Quick absorption', 'Customizable']
            },
            
            // Low-Carb Individual Recipes
             {
                 id: 'chia-seed-pudding-berries',
                 title: 'Chia Seed Pudding with Berries',
                 category: 'low-carb',
                 image: '../../images/stories/Recipes/All Mealplan/Chia Seed Pudding with Berries.jpg',
                 duration: '1 meal',
                 meals: '1 serving',
                 calories: '220-280',
                 price: '$3',
                 description: 'Creamy pudding with antioxidant-rich berries.',
                 features: ['8g net carbs', 'Omega-3 rich', 'Make ahead']
             },
             {
                 id: 'spinach-mushroom-salad',
                 title: 'Spinach and Mushroom Salad with Lemon Vinaigrette',
                 category: 'low-carb',
                 image: '../../images/stories/Recipes/All Mealplan/Spinach and Mushroom Salad with Lemon Vinaigrette.jpg',
                 duration: '1 meal',
                 meals: '1 serving',
                 calories: '180-220',
                 price: '$4',
                 description: 'Fresh salad with tangy dressing.',
                 features: ['5g net carbs', 'High iron', 'Light meal']
             },
             {
                 id: 'grilled-eggplant-steaks',
                 title: 'Grilled Eggplant Steaks with Roasted Vegetables',
                 category: 'low-carb',
                 image: '../../images/stories/Recipes/All Mealplan/Grilled Eggplant Steaks with Roasted Vegetables.jpg',
                 duration: '1 meal',
                 meals: '1 serving',
                 calories: '250-300',
                 price: '$4',
                 description: 'Hearty grilled vegetables with Mediterranean flavors.',
                 features: ['10g net carbs', 'High fiber', 'Satisfying']
             },
             {
                 id: 'celery-almond-butter',
                 title: 'Celery Sticks with Almond Butter',
                 category: 'low-carb',
                 image: '../../images/stories/Recipes/All Mealplan/Celery Sticks with Almond Butter.jpg',
                 duration: '1 snack',
                 meals: '1 serving',
                 calories: '150-180',
                 price: '$2',
                 description: 'Crunchy snack with healthy fats.',
                 features: ['3g net carbs', 'Portable', 'Protein rich']
             },
             {
                 id: 'coconut-cream-raspberries',
                 title: 'Coconut Cream with Raspberries',
                 category: 'low-carb',
                 image: '../../images/stories/Recipes/All Mealplan/Coconut Cream with Raspberries.jpeg',
                 duration: '1 dessert',
                 meals: '1 serving',
                 calories: '180-220',
                 price: '$3',
                 description: 'Rich dessert with fresh berries.',
                 features: ['6g net carbs', 'Keto friendly', 'Antioxidants']
             },
            
            // Budget-Friendly Individual Recipes
             {
                 id: 'vegan-chili',
                 title: 'Vegan Chili',
                 category: 'budget-friendly',
                 image: '../../images/stories/Recipes/All Mealplan/Vegan Chili.jpg',
                 duration: '1 meal',
                 meals: '6 servings',
                 calories: '320-380',
                 price: '$8 total',
                 description: 'Hearty chili that feeds the whole family.',
                 features: ['$1.30 per serving', 'Freezer friendly', 'High protein']
             },
             {
                 id: 'vegetable-stir-fry',
                 title: 'Vegetable Stir-Fry',
                 category: 'budget-friendly',
                 image: '../../images/stories/Recipes/All Mealplan/Vegetable Stir-Fry.avif',
                 duration: '1 meal',
                 meals: '1 serving',
                 calories: '280-340',
                 price: '$3',
                 description: 'Quick and nutritious vegetable medley.',
                 features: ['Seasonal vegetables', 'One pan meal', 'Versatile']
             },
             {
                 id: 'vegan-tacos',
                 title: 'Vegan Tacos',
                 category: 'budget-friendly',
                 image: '../../images/stories/Recipes/All Mealplan/Vegan Tacos.jpg',
                 duration: '1 meal',
                 meals: '1 serving',
                 calories: '350-420',
                 price: '$3',
                 description: 'Flavorful tacos with plant-based fillings.',
                 features: ['Bean protein', 'Fresh toppings', 'Family favorite']
             },
             {
                 id: 'pasta-primavera',
                 title: 'Pasta Primavera',
                 category: 'budget-friendly',
                 image: '../../images/stories/Recipes/All Mealplan/Pasta Primavera.jpg',
                 duration: '1 meal',
                 meals: '1 serving',
                 calories: '380-450',
                 price: '$2',
                 description: 'Classic pasta with seasonal vegetables.',
                 features: ['Pantry staples', 'Colorful', 'Quick prep']
             },
             {
                 id: 'vegan-shepherds-pie',
                 title: 'Vegan Shepherd\'s Pie',
                 category: 'budget-friendly',
                 image: '../../images/stories/Recipes/All Mealplan/Vegan Shepherd\'s Pie.jpg',
                 duration: '1 meal',
                 meals: '8 servings',
                 calories: '420-480',
                 price: '$12 total',
                 description: 'Comfort food that feeds a crowd.',
                 features: ['$1.50 per serving', 'Make ahead', 'Satisfying']
             },
            
            // Weight Loss Individual Recipes
            {
                id: 'spinach-mushroom-salad',
                title: 'Spinach and Mushroom Salad with Lemon Vinaigrette',
                category: 'weight-loss',
                image: '../../images/stories/Recipes/All Mealplan/Spinach and Mushroom Salad with Lemon Vinaigrette.jpg',
                duration: '1 meal',
                meals: '1 serving',
                calories: '180-220',
                price: '$4',
                description: 'Light, nutrient-dense salad.',
                features: ['Low calorie', 'High volume', 'Metabolism boosting']
            },
            {
                id: 'vegetable-stir-fry',
                title: 'Vegetable Stir-Fry with Tofu',
                category: 'weight-loss',
                image: '../../images/stories/Recipes/All Mealplan/Vegetable Stir-Fry with Tofu.jpg',
                duration: '1 meal',
                meals: '1 serving',
                calories: '250-300',
                price: '$4',
                description: 'Colorful vegetables with lean protein.',
                features: ['Portion controlled', 'High protein', 'Low calorie density']
            },
            
            // Gluten-Free Individual Recipes
            {
                id: 'buckwheat-pancakes',
                title: 'Gluten-Free Buckwheat Pancakes',
                category: 'gluten-free',
                image: '../../images/stories/Recipes/All Mealplan/Gluten-Free Buckwheat Pancakes.jpg',
                duration: '1 meal',
                meals: '1 serving',
                calories: '320-380',
                price: '$3',
                description: 'Fluffy pancakes without the gluten.',
                features: ['Certified GF', 'High fiber', 'Mineral rich']
            },
            {
                id: 'rice-bowl-vegetables',
                title: 'Rice Bowl with Vegetables',
                category: 'gluten-free',
                image: '../../images/stories/Recipes/All Mealplan/Rice Bowl with Vegetables.jpg',
                duration: '1 meal',
                meals: '1 serving',
                calories: '380-450',
                price: '$4',
                description: 'Wholesome grain bowl with fresh vegetables.',
                features: ['Naturally GF', 'Customizable', 'Balanced nutrition']
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