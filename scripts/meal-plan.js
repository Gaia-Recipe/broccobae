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
        this.displayMealPlans();
        this.updateMealPlanCount();
    }

    generateMealPlans() {
        const categories = {
            'high-protein': {
                names: [
                    'Protein Power Bowl', 'Lentil Muscle Builder', 'Quinoa Protein Pack', 'Bean & Grain Fusion',
                    'Tofu Strength Stack', 'Chickpea Champion', 'Hemp Heart Hero', 'Spirulina Superfood',
                    'Tempeh Titan', 'Seitan Strength', 'Chia Power Plate', 'Almond Protein Paradise',
                    'Pea Protein Perfection', 'Edamame Energy', 'Nutritional Yeast Boost', 'Pumpkin Seed Power',
                    'Sunflower Strength', 'Walnut Warrior', 'Cashew Muscle', 'Pistachio Power'
                ],
                descriptions: [
                    'High-protein vegan meals featuring legumes, quinoa, and plant-based proteins.',
                    'Lentil-focused meal plan designed for muscle building and recovery.',
                    'Quinoa-based high-protein meals for active lifestyles.',
                    'Perfect combination of beans and grains for complete proteins.'
                ],
                protein: ['25-35g', '30-40g', '20-30g', '25-30g'],
                calories: ['400-600', '500-700', '350-550', '450-650']
            },
            'low-carb': {
                names: [
                    'Keto Vegan Delight', 'Low-Carb Green Machine', 'Cauliflower Cloud', 'Zucchini Zen',
                    'Avocado Adventure', 'Leafy Green Luxury', 'Broccoli Bliss', 'Spinach Spectacular',
                    'Cucumber Cool', 'Asparagus Awesome', 'Bell Pepper Brilliance', 'Mushroom Magic',
                    'Cabbage Crunch', 'Kale Kingdom', 'Lettuce Luxury', 'Celery Sensation',
                    'Radish Revolution', 'Artichoke Artistry', 'Brussels Sprout Bonanza', 'Bok Choy Beauty'
                ],
                descriptions: [
                    'Low-carb, high-fat vegan meals perfect for ketogenic lifestyle.',
                    'Green vegetable-focused low-carb meal plans.',
                    'Cauliflower-based alternatives for low-carb living.',
                    'Zucchini noodles and spiralized vegetable meals.'
                ],
                carbs: ['15-20g', '10-25g', '12-18g', '8-22g'],
                fat: ['60-70%', '55-65%', '65-75%', '58-68%']
            },
            'gluten-free': {
                names: [
                    'Gluten-Free Goodness', 'Rice & Shine', 'Quinoa Queen', 'Buckwheat Bliss',
                    'Millet Marvel', 'Amaranth Amazing', 'Teff Terrific', 'Sorghum Supreme',
                    'Corn Celebration', 'Potato Paradise', 'Sweet Potato Sensation', 'Cassava Comfort',
                    'Tapioca Treat', 'Arrowroot Adventure', 'Coconut Flour Fantasy', 'Almond Flour Artistry',
                    'Rice Flour Radiance', 'Chickpea Flour Champion', 'Oat Flour Oasis', 'Banana Flour Bliss'
                ],
                descriptions: [
                    'Delicious gluten-free vegan meals using naturally gluten-free ingredients.',
                    'Rice-based gluten-free meal plans for every occasion.',
                    'Quinoa-centered gluten-free nutrition.',
                    'Buckwheat-based hearty gluten-free meals.'
                ],
                certification: ['100% GF', 'Certified GF', 'Naturally GF', 'Lab Tested GF'],
                nutrition: ['Balanced nutrition', 'Complete proteins', 'Rich in fiber', 'Vitamin packed']
            },
            'budget-friendly': {
                names: [
                    'Budget Bean Bonanza', 'Penny-Wise Plant Power', 'Frugal & Fresh', 'Dollar Stretcher Delights',
                    'Thrifty Thirty', 'Economical Eats', 'Bargain Bowl Bonanza', 'Cheap & Cheerful',
                    'Value Veggie Victory', 'Affordable Abundance', 'Budget Breakfast Boost', 'Economical Evening',
                    'Frugal Feast', 'Penny Pincher Paradise', 'Wallet-Friendly Wonders', 'Cost-Conscious Cuisine',
                    'Savings Spectacular', 'Budget Brilliance', 'Thrifty Treats', 'Economical Excellence'
                ],
                descriptions: [
                    'Affordable vegan meals using budget-friendly ingredients like beans and grains.',
                    'Nutritious plant-based meals that won\'t break the bank.',
                    'Fresh, healthy meals on a tight budget.',
                    'Delicious vegan cuisine for dollar-conscious diners.'
                ],
                cost: ['<$5/meal', '<$4/meal', '<$3/meal', '<$6/meal'],
                savings: ['Bulk ingredients', 'Seasonal produce', 'Pantry staples', 'Meal prep friendly']
            },
            'weight-loss': {
                names: [
                    'Lean Green Machine', 'Slim & Trim Triumph', 'Calorie-Conscious Creation', 'Light & Lovely',
                    'Skinny Sensation', 'Trim Time Treats', 'Slender Selections', 'Lightweight Luxury',
                    'Calorie Cutting Champions', 'Portion Perfect Plans', 'Metabolism Boosters', 'Fat-Burning Fuel',
                    'Lean Living Luxury', 'Svelte Selections', 'Trim & Terrific', 'Slimming Sensations',
                    'Weight Warrior Meals', 'Lean Machine Menu', 'Skinny Success Stories', 'Trim Triumph Tales'
                ],
                descriptions: [
                    'Calorie-controlled vegan meals designed to support healthy weight loss.',
                    'Low-calorie, high-nutrition meals for sustainable weight management.',
                    'Portion-controlled plant-based meals for weight loss goals.',
                    'Metabolism-boosting vegan meals for effective weight management.'
                ],
                calories: ['1200-1500 cal', '1000-1400 cal', '1300-1600 cal', '1100-1500 cal'],
                benefits: ['Low calorie', 'High fiber', 'Metabolism boost', 'Appetite control']
            }
        };

        // Generate 100 meal plans for each category
        Object.keys(categories).forEach(category => {
            const categoryData = categories[category];
            for (let i = 0; i < 100; i++) {
                const nameIndex = i % categoryData.names.length;
                const descIndex = i % categoryData.descriptions.length;
                
                const mealPlan = {
                    id: `${category}-${i + 1}`,
                    title: `${categoryData.names[nameIndex]} ${Math.floor(i / categoryData.names.length) + 1}`,
                    description: categoryData.descriptions[descIndex],
                    category: category,
                    image: `../../images/meal-plans/${category}-${(i % 10) + 1}.svg`,
                    duration: [3, 7, 14, 30][i % 4],
                    servings: [1, 2, 4, 6][i % 4],
                    difficulty: ['Easy', 'Medium', 'Advanced'][i % 3],
                    prepTime: `${15 + (i % 45)} mins`,
                    totalTime: `${30 + (i % 90)} mins`
                };

                // Add category-specific properties
                if (category === 'high-protein') {
                    mealPlan.protein = categoryData.protein[i % categoryData.protein.length];
                    mealPlan.calories = categoryData.calories[i % categoryData.calories.length];
                } else if (category === 'low-carb') {
                    mealPlan.carbs = categoryData.carbs[i % categoryData.carbs.length];
                    mealPlan.fat = categoryData.fat[i % categoryData.fat.length];
                } else if (category === 'gluten-free') {
                    mealPlan.certification = categoryData.certification[i % categoryData.certification.length];
                    mealPlan.nutrition = categoryData.nutrition[i % categoryData.nutrition.length];
                } else if (category === 'budget-friendly') {
                    mealPlan.cost = categoryData.cost[i % categoryData.cost.length];
                    mealPlan.savings = categoryData.savings[i % categoryData.savings.length];
                } else if (category === 'weight-loss') {
                    mealPlan.calories = categoryData.calories[i % categoryData.calories.length];
                    mealPlan.benefits = categoryData.benefits[i % categoryData.benefits.length];
                }

                this.mealPlans.push(mealPlan);
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
        this.displayMealPlans();
        this.updateMealPlanCount();
    }

    displayMealPlans() {
        const grid = document.getElementById('mealPlanGrid');
        if (!grid) return;

        // Clear existing cards except the static ones
        const existingCards = grid.querySelectorAll('.meal-plan-card');
        existingCards.forEach(card => {
            if (!card.hasAttribute('data-static')) {
                card.remove();
            }
        });

        // Filter meal plans
        let filteredPlans = this.mealPlans;
        if (this.currentFilter !== 'all') {
            filteredPlans = this.mealPlans.filter(plan => plan.category === this.currentFilter);
        }

        // Display meal plans
        const plansToShow = filteredPlans.slice(0, this.displayedCount);
        plansToShow.forEach((plan, index) => {
            if (index >= 6) { // Skip the first 6 static cards
                const card = this.createMealPlanCard(plan);
                grid.appendChild(card);
            }
        });

        // Update load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            if (this.displayedCount >= filteredPlans.length) {
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
        this.updateMealPlanCount();
    }

    updateMealPlanCount() {
        const countElement = document.querySelector('.meal-plan-count');
        if (!countElement) return;

        let totalCount = this.mealPlans.length;
        if (this.currentFilter !== 'all') {
            totalCount = this.mealPlans.filter(plan => plan.category === this.currentFilter).length;
        }

        const displayedCount = Math.min(this.displayedCount, totalCount);
        countElement.textContent = `Showing ${displayedCount} of ${totalCount} meal plans`;
    }

    generateCustomMealPlan() {
        const form = document.getElementById('mealPlanForm');
        const formData = new FormData(form);
        
        const planData = {
            type: formData.get('planType'),
            duration: formData.get('duration'),
            servings: formData.get('servings'),
            allergies: formData.getAll('allergies')
        };

        // Show success message
        this.showNotification('Custom meal plan generated successfully! Check your email for details.', 'success');
        
        // Reset form
        form.reset();
        
        // In a real application, this would send data to a server
        console.log('Generated custom meal plan:', planData);
    }

    showMealPlanDetails(mealPlanId) {
        const plan = this.mealPlans.find(p => p.id === mealPlanId);
        if (!plan) return;

        // Create modal or navigate to detail page
        // For now, we'll show an alert with plan details
        const details = `
            Meal Plan: ${plan.title}
            Category: ${plan.category}
            Duration: ${plan.duration} days
            Servings: ${plan.servings} people
            Prep Time: ${plan.prepTime}
            Total Time: ${plan.totalTime}
            Difficulty: ${plan.difficulty}
            
            ${plan.description}
        `;
        
        alert(details);
        
        // In a real application, you would navigate to a detailed page
        // window.location.href = `meal-plan-detail.html?id=${mealPlanId}`;
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