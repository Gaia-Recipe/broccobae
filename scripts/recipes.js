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
        this.generateRecipes();
        this.setupEventListeners();
        this.filterRecipes('all');
        this.updateRecipeCount();
    }

    generateRecipes() {
        this.allRecipes = [
            // Breakfast Recipes
            {
                id: 'breakfast-1',
                title: 'Avocado Toast',
                category: 'breakfast',
                image: '../../images/stories/Recipes/All Recipes/Avocado Toast.jpg',
                prepTime: '10 minutes',
                servings: '2 servings',
                difficulty: 'Easy',
                description: 'Creamy avocado on toasted sourdough with a sprinkle of hemp seeds.',
                ingredients: ['2 slices sourdough bread', '1 ripe avocado', 'Hemp seeds', 'Salt', 'Pepper', 'Lemon juice']
            },
            {
                id: 'breakfast-2',
                title: 'Chia Seed Pudding',
                category: 'breakfast',
                image: '../../images/stories/Recipes/All Recipes/Chia Seed Pudding.jpg',
                prepTime: '5 minutes (+ overnight)',
                servings: '2 servings',
                difficulty: 'Easy',
                description: 'Nutritious overnight chia pudding with vanilla and fresh berries.',
                ingredients: ['3 tbsp chia seeds', '1 cup almond milk', 'Vanilla extract', 'Maple syrup', 'Fresh berries']
            },
            {
                id: 'breakfast-3',
                title: 'Vegan Pancakes',
                category: 'breakfast',
                image: '../../images/stories/Recipes/All Recipes/Vegan Pancake.jpg',
                prepTime: '20 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                description: 'Fluffy vegan pancakes perfect for weekend mornings.',
                ingredients: ['2 cups flour', 'Baking powder', 'Plant milk', 'Vanilla', 'Maple syrup', 'Coconut oil']
            },
            {
                id: 'breakfast-4',
                title: 'Smoothie Bowl',
                category: 'breakfast',
                image: '../../images/stories/Recipes/All Recipes/Smoothie Bowl.jpg',
                prepTime: '10 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                description: 'Thick and creamy smoothie bowl topped with fresh fruits and granola.',
                ingredients: ['Frozen berries', 'Banana', 'Coconut milk', 'Granola', 'Fresh fruits', 'Chia seeds']
            },
            {
                id: 'breakfast-5',
                title: 'Tofu Scramble',
                category: 'breakfast',
                image: '../../images/stories/Recipes/All Recipes/Tofu Scramble.jpg',
                prepTime: '15 minutes',
                servings: '3 servings',
                difficulty: 'Medium',
                description: 'Protein-rich tofu scramble with vegetables and nutritional yeast.',
                ingredients: ['1 block firm tofu', 'Nutritional yeast', 'Turmeric', 'Bell peppers', 'Onion', 'Spinach']
            },
            {
                id: 'breakfast-6',
                title: 'Spicy Tofu Scramble',
                category: 'breakfast',
                image: '../../images/stories/Recipes/All Recipes/Spicy Tofu Scramble.jpg',
                prepTime: '20 minutes',
                servings: '3 servings',
                difficulty: 'Medium',
                description: 'Spicy version of tofu scramble with jalapeños and bold flavors.',
                ingredients: ['1 block firm tofu', 'Jalapeños', 'Bell peppers', 'Onion', 'Garlic', 'Cumin', 'Paprika', 'Nutritional yeast']
            },
            // Lunch Recipes
            {
                id: 'lunch-1',
                title: 'Mediterranean Quinoa Salad',
                category: 'lunch',
                image: '../../images/stories/Recipes/All Recipes/Mediterranean Quinoa Salad.jpg',
                prepTime: '25 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                description: 'Fresh Mediterranean flavors with quinoa, olives, and herbs.',
                ingredients: ['1 cup quinoa', 'Cherry tomatoes', 'Cucumber', 'Kalamata olives', 'Red onion', 'Fresh herbs', 'Lemon juice', 'Olive oil']
            },
            {
                id: 'lunch-2',
                title: 'Avocado & Chickpea Sandwich',
                category: 'lunch',
                image: '../../images/stories/Recipes/All Recipes/Avocado & Chickpea Sandwich.jpg',
                prepTime: '15 minutes',
                servings: '2 servings',
                difficulty: 'Easy',
                description: 'Protein-packed sandwich with mashed chickpeas and creamy avocado.',
                ingredients: ['1 can chickpeas', '1 ripe avocado', 'Whole grain bread', 'Lettuce', 'Tomato', 'Red onion', 'Lemon juice', 'Dijon mustard']
            },
            {
                id: 'lunch-3',
                title: 'Quinoa Salad with Lemon Vinaigrette',
                category: 'lunch',
                image: '../../images/stories/Recipes/All Recipes/Quinoa Salad with Lemon Vinaigrette  .png',
                prepTime: '20 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                description: 'Light and refreshing quinoa salad with zesty lemon dressing.',
                ingredients: ['1 cup quinoa', 'Mixed greens', 'Cherry tomatoes', 'Cucumber', 'Lemon juice', 'Olive oil', 'Fresh herbs']
            },
            {
                id: 'lunch-4',
                title: 'Fresh Vegan Salad',
                category: 'lunch',
                image: '../../images/stories/Recipes/All Recipes/Fresh Vegan Salad.png',
                prepTime: '15 minutes',
                servings: '2 servings',
                difficulty: 'Easy',
                description: 'Crisp and colorful salad with seasonal vegetables.',
                ingredients: ['Mixed greens', 'Cherry tomatoes', 'Cucumber', 'Bell peppers', 'Red onion', 'Balsamic vinaigrette']
            },
            {
                id: 'lunch-5',
                title: 'Vegan Burrito Bowl',
                category: 'lunch',
                image: '../../images/stories/Recipes/All Recipes/Vegan Burrito Bowl.jpg',
                prepTime: '30 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                description: 'Hearty burrito bowl with black beans, rice, and fresh toppings.',
                ingredients: ['Brown rice', 'Black beans', 'Corn', 'Bell peppers', 'Avocado', 'Salsa', 'Lime', 'Cilantro']
            },
             {
                 id: 'lunch-4',
                 title: 'Lentil Soup with Kale',
                 category: 'lunch',
                 image: '../../images/stories/Recipes/All/Lentil Soup with Kale.avif',
                 prepTime: '35 minutes',
                 servings: '6 servings',
                 difficulty: 'Medium',
                 ingredients: ['1 cup red lentils', 'Kale', 'Carrots', 'Celery', 'Onion', 'Garlic', 'Vegetable broth', 'Bay leaves', 'Thyme']
             },
             {
                 id: 'lunch-5',
                 title: 'Vegan Burrito Bowl',
                 category: 'lunch',
                 image: '../../images/stories/Recipes/All/Vegan Burrito Bowl.jpg',
                 prepTime: '30 minutes',
                 servings: '4 servings',
                 difficulty: 'Medium',
                 ingredients: ['Black beans', 'Quinoa', 'Brown rice', 'Corn', 'Bell peppers', 'Avocado', 'Salsa', 'Lime', 'Cilantro']
             },
            {
                id: 'lunch-6',
                title: 'The Ultimate Vegan Burger',
                category: 'lunch',
                image: '../../images/stories/Recipes/All/The Ultimate Vegan Burger.png',
                prepTime: '25 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                 ingredients: ['Black beans', 'Quinoa', 'Mushrooms', 'Onion', 'Garlic', 'Burger buns', 'Lettuce', 'Tomato', 'Vegan mayo']
             },
             // Dinner Recipes
             // Dinner Recipes
             {
                 id: 'dinner-1',
                 title: 'Creamy Tomato Pasta',
                 category: 'dinner',
                 image: '../../images/stories/Recipes/All Recipes/Creamy Tomato Pasta .jpg',
                 prepTime: '25 minutes',
                 servings: '4 servings',
                 difficulty: 'Easy',
                 description: 'Rich and creamy tomato pasta with fresh basil and nutritional yeast.',
                 ingredients: ['Pasta', 'Canned tomatoes', 'Coconut cream', 'Garlic', 'Onion', 'Fresh basil', 'Nutritional yeast', 'Olive oil']
             },
             {
                 id: 'dinner-2',
                 title: 'Lentil Shepherd\'s Pie',
                 category: 'dinner',
                 image: '../../images/stories/Recipes/All Recipes/Lentil Shepherd\'s Pie.jpg',
                 prepTime: '45 minutes',
                 servings: '6 servings',
                 difficulty: 'Medium',
                 description: 'Hearty lentil shepherd\'s pie topped with creamy mashed potatoes.',
                 ingredients: ['Green lentils', 'Potatoes', 'Carrots', 'Peas', 'Onion', 'Garlic', 'Vegetable broth', 'Thyme', 'Rosemary']
             },
             {
                 id: 'dinner-3',
                 title: 'Spicy Tofu Stir-Fry',
                 category: 'dinner',
                 image: '../../images/stories/Recipes/All Recipes/Spicy Tofu Stir-fry.jpg',
                 prepTime: '20 minutes',
                 servings: '3 servings',
                 difficulty: 'Medium',
                 description: 'Quick and flavorful tofu stir-fry with mixed vegetables and spicy sauce.',
                 ingredients: ['Firm tofu', 'Bell peppers', 'Broccoli', 'Snap peas', 'Garlic', 'Ginger', 'Soy sauce', 'Chili flakes']
             },
             {
                 id: 'dinner-4',
                 title: 'Spicy Black Bean Burgers',
                 category: 'dinner',
                 image: '../../images/stories/Recipes/All Recipes/Spicy Black Bean Burgers .png',
                 prepTime: '30 minutes',
                 servings: '4 servings',
                 difficulty: 'Medium',
                 description: 'Protein-rich black bean burgers with spices and fresh herbs.',
                 ingredients: ['Black beans', 'Breadcrumbs', 'Onion', 'Garlic', 'Cumin', 'Paprika', 'Fresh cilantro', 'Burger buns']
             },
             {
                 id: 'dinner-5',
                 title: 'Vegan Lasagna',
                 category: 'dinner',
                 image: '../../images/stories/Recipes/All Recipes/Vegan Lasagna .jpg',
                 prepTime: '60 minutes',
                 servings: '8 servings',
                 difficulty: 'Hard',
                 description: 'Layered vegan lasagna with cashew ricotta and marinara sauce.',
                 ingredients: ['Lasagna noodles', 'Cashews', 'Spinach', 'Marinara sauce', 'Nutritional yeast', 'Garlic', 'Herbs']
             },
             {
                 id: 'dinner-6',
                 title: 'Creamy Vegan Pasta',
                 category: 'dinner',
                 image: '../../images/stories/Recipes/All Recipes/Creamy Vgean Pasta.png',
                 prepTime: '25 minutes',
                 servings: '4 servings',
                 difficulty: 'Easy',
                 description: 'Silky smooth vegan pasta with cashew cream sauce and herbs.',
                 ingredients: ['Pasta', 'Cashews', 'Nutritional yeast', 'Garlic', 'Lemon juice', 'Fresh herbs', 'Olive oil']
             },
             // Dessert Recipes
             {
                 id: 'dessert-1',
                 title: 'Chocolate Avocado Mousse',
                 category: 'dessert',
                 image: '../../images/stories/Recipes/All Recipes/Chocolate Avocado Mousse .png',
                 prepTime: '15 minutes',
                 servings: '4 servings',
                 difficulty: 'Easy',
                 description: 'Rich and creamy chocolate mousse made with ripe avocados.',
                 ingredients: ['Ripe avocados', 'Cocoa powder', 'Maple syrup', 'Vanilla extract', 'Coconut cream', 'Dark chocolate']
             },
             {
                 id: 'dessert-2',
                 title: 'Berry Coconut Panna Cotta',
                 category: 'dessert',
                 image: '../../images/stories/Recipes/All Recipes/Berry Coconut Panna Cotta.webp',
                 prepTime: '20 minutes',
                 servings: '6 servings',
                 difficulty: 'Medium',
                 description: 'Silky coconut panna cotta topped with fresh mixed berries.',
                 ingredients: ['Coconut milk', 'Agar powder', 'Maple syrup', 'Vanilla', 'Mixed berries', 'Mint leaves']
             },
             {
                 id: 'dessert-3',
                 title: 'Mango Sticky Rice',
                 category: 'dessert',
                 image: '../../images/stories/Recipes/All Recipes/Mango Sticky Rice.webp',
                 prepTime: '40 minutes',
                 servings: '4 servings',
                 difficulty: 'Medium',
                 description: 'Traditional Thai-inspired mango sticky rice with coconut sauce.',
                 ingredients: ['Glutinous rice', 'Coconut milk', 'Palm sugar', 'Fresh mango', 'Salt', 'Toasted sesame seeds']
             },
             {
                 id: 'dessert-4',
                 title: 'Banana Nice Cream',
                 category: 'dessert',
                 image: '../../images/stories/Recipes/All Recipes/Banana Nice Cream.png',
                 prepTime: '5 minutes',
                 servings: '2 servings',
                 difficulty: 'Easy',
                 description: 'Healthy frozen banana ice cream with natural sweetness.',
                 ingredients: ['Frozen bananas', 'Almond milk', 'Vanilla extract', 'Cinnamon', 'Chopped nuts', 'Dark chocolate chips']
             },
             {
                 id: 'dessert-5',
                 title: 'Vegan Chocolate Chip Cookies',
                 category: 'dessert',
                 image: '../../images/stories/Recipes/All Recipes/Vegan Chocolate Chip Cookies.webp',
                 prepTime: '25 minutes',
                 servings: '12 cookies',
                 difficulty: 'Easy',
                 description: 'Soft and chewy vegan chocolate chip cookies with perfect texture.',
                 ingredients: ['Flour', 'Vegan butter', 'Brown sugar', 'Vanilla', 'Baking soda', 'Vegan chocolate chips', 'Almond milk']
             },
             // Smoothie Recipes
             {
                 id: 'smoothie-1',
                 title: 'Green Detox Smoothie',
                 category: 'smoothie',
                 image: '../../images/stories/Recipes/All Recipes/Green Detox Smoothie .webp',
                 prepTime: '5 minutes',
                 servings: '1 serving',
                 difficulty: 'Easy',
                 description: 'Refreshing green smoothie packed with nutrients and natural detox ingredients.',
                 ingredients: ['Spinach', 'Cucumber', 'Green apple', 'Lemon juice', 'Ginger', 'Coconut water', 'Mint']
             },
             {
                 id: 'smoothie-2',
                 title: 'Berry Blast Smoothie',
                 category: 'smoothie',
                 image: '../../images/stories/Recipes/All Recipes/Berry Blast Smoothie.avif',
                 prepTime: '5 minutes',
                 servings: '1 serving',
                 difficulty: 'Easy',
                 description: 'Antioxidant-rich berry smoothie with creamy banana base.',
                 ingredients: ['Mixed berries', 'Banana', 'Almond milk', 'Chia seeds', 'Maple syrup', 'Vanilla extract']
             },
             {
                 id: 'smoothie-3',
                 title: 'Tropical Sunrise Smoothie',
                 category: 'smoothie',
                 image: '../../images/stories/Recipes/All Recipes/Tropical Sunrise Smoothie.jpg',
                 prepTime: '7 minutes',
                 servings: '1 serving',
                 difficulty: 'Easy',
                 description: 'Tropical smoothie with mango, pineapple, and coconut flavors.',
                 ingredients: ['Mango', 'Pineapple', 'Coconut milk', 'Banana', 'Lime juice', 'Coconut flakes']
             },
             {
                 id: 'smoothie-4',
                 title: 'Chocolate Peanut Butter Smoothie',
                 category: 'smoothie',
                 image: '../../images/stories/Recipes/All Recipes/Chocolate Peanut Butter Smoothie.jpg',
                 prepTime: '5 minutes',
                 servings: '1 serving',
                 difficulty: 'Easy',
                 description: 'Indulgent chocolate peanut butter smoothie that tastes like dessert.',
                 ingredients: ['Banana', 'Peanut butter', 'Cocoa powder', 'Almond milk', 'Dates', 'Ice cubes']
             },
             {
                 id: 'smoothie-5',
                 title: 'Mango Lassi Smoothie',
                 category: 'smoothie',
                 image: '../../images/stories/Recipes/All Recipes/Mango Lassi.jpg',
                 prepTime: '5 minutes',
                 servings: '1 serving',
                 difficulty: 'Easy',
                 description: 'Creamy mango lassi-inspired smoothie with cardamom and coconut.',
                 ingredients: ['Mango', 'Coconut yogurt', 'Coconut milk', 'Cardamom', 'Honey or maple syrup', 'Ice']
             }
         ];
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

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    filterRecipes(category) {
        this.currentFilter = category;
        this.currentPage = 1;
        
        if (category === 'all') {
            this.displayedRecipes = [...this.allRecipes];
        } else {
            this.displayedRecipes = this.allRecipes.filter(recipe => recipe.category === category);
        }
        
        this.shuffleArray(this.displayedRecipes);
        this.renderRecipes();
        this.updateRecipeCount();
    }

    loadMoreRecipes() {
        const recipeGrid = document.getElementById('recipeGrid');
        if (!recipeGrid) return;
        
        const startIndex = this.currentPage * this.recipesPerPage;
        const endIndex = startIndex + this.recipesPerPage;
        const newRecipes = this.displayedRecipes.slice(startIndex, endIndex);
        
        if (newRecipes.length === 0) return;
        
        // Store current scroll position
        const scrollPosition = window.pageYOffset;
        
        // Add new recipes
        newRecipes.forEach(recipe => {
            const recipeCard = this.createRecipeCard(recipe);
            recipeGrid.appendChild(recipeCard);
        });
        
        this.currentPage++;
        
        // Smooth scroll to new content
        setTimeout(() => {
            const newCards = recipeGrid.querySelectorAll('.recipe-card');
            if (newCards.length > startIndex) {
                newCards[startIndex].scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        }, 100);
        
        this.updateRecipeCount();
        this.updateLoadMoreButton();
        loadFavoriteStates();
    }

    createRecipeCard(recipe) {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.onclick = () => this.showRecipeDetails(recipe);
        
        const categoryText = `RECIPE / ${recipe.category.toUpperCase()}`;
        
        recipeCard.innerHTML = `
            <div class="recipe-image-container">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" loading="lazy">
            </div>
            <div class="recipe-content">
                <div class="recipe-category-text">${categoryText}</div>
                <h3 class="recipe-title">${recipe.title}</h3>
            </div>
        `;
        return recipeCard;
    }

    updateLoadMoreButton() {
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            const totalShown = this.currentPage * this.recipesPerPage;
            if (totalShown >= this.displayedRecipes.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }
    }

    renderRecipes(clearExisting = true) {
        const recipeGrid = document.getElementById('recipeGrid');
        if (!recipeGrid) return;
        
        if (clearExisting) {
            recipeGrid.innerHTML = '';
            this.currentPage = 1;
        }
        
        if (this.displayedRecipes.length === 0) {
            this.renderEmptyState();
            return;
        }
        
        const recipesToShow = this.displayedRecipes.slice(0, this.recipesPerPage);
        
        recipesToShow.forEach(recipe => {
            const recipeCard = this.createRecipeCard(recipe);
            recipeGrid.appendChild(recipeCard);
        });
        
        this.updateLoadMoreButton();
        loadFavoriteStates();
    }

    showRecipeDetails(recipe) {
        // Navigate to the recipe detail page with the recipe ID
        const recipeSlug = recipe.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        window.location.href = `../../recipe-detail.html?recipe=${recipeSlug}&id=${recipe.id}`;
    }

    updateRecipeCount() {
        const recipeCount = document.querySelector('.recipe-count');
        if (recipeCount) {
            const showing = Math.min(this.currentPage * this.recipesPerPage, this.displayedRecipes.length);
            const total = this.displayedRecipes.length;
            recipeCount.textContent = `Showing ${showing} of ${total} recipes`;
        }
    }

    searchRecipes(query) {
        const searchTerm = query.toLowerCase();
        this.displayedRecipes = this.allRecipes.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.category.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
        );
        
        this.currentPage = 1;
        this.renderRecipes();
        this.updateRecipeCount();
    }
}

function loadFavoriteStates() {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    
    document.querySelectorAll('.recipe-card').forEach(card => {
        const recipeId = card.dataset.id;
        const favoriteBtn = card.querySelector('.favorite-btn');
        const icon = favoriteBtn?.querySelector('i');
        
        if (favorites.includes(recipeId) && icon) {
            icon.className = 'fas fa-heart';
            favoriteBtn.classList.add('active');
        }
    });
}

// Initialize recipe manager when page loads
let recipeManager;

document.addEventListener('DOMContentLoaded', function() {
    recipeManager = new RecipeManager();
    
    // Initialize with all recipes
    recipeManager.filterRecipes('all');
});




