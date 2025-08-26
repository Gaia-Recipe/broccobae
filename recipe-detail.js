// Recipe Detail Page Manager
class RecipeDetailManager {
    constructor() {
        this.recipes = {
            'avocado-toast-with-everything-bagel-seasoning': {
                id: 'avocado-toast-with-everything-bagel-seasoning',
                title: 'Avocado Toast with Everything Bagel Seasoning',
                category: 'Breakfast',
                description: 'A simple and nutritious breakfast featuring creamy avocado on toasted whole-grain bread, topped with everything bagel seasoning for extra flavor.',
                image: './images/stories/Recipes/All/Avocado Toast with Everything Bagel Seasoning.jpg',
                prepTime: '10 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                ingredients: [
                    { amount: '1 slice', name: 'whole-grain bread' },
                    { amount: '1/2', name: 'ripe avocado' },
                    { amount: '1/4 teaspoon', name: 'everything bagel seasoning' },
                    { amount: 'Optional:', name: 'red pepper flakes, microgreens' }
                ],
                instructions: [
                    'Toast the bread to your desired level of crispiness.',
                    'While the bread is toasting, mash the avocado in a small bowl.',
                    'Spread the mashed avocado evenly over the toasted bread.',
                    'Sprinkle with everything bagel seasoning.',
                    'Optional: Garnish with red pepper flakes and microgreens.',
                    'Serve immediately and enjoy!'
                ]
            },
            'quinoa-salad-with-lemon-vinaigrette': {
                id: 'quinoa-salad-with-lemon-vinaigrette',
                title: 'Quinoa Salad with Lemon Vinaigrette',
                category: 'Lunch',
                description: 'A refreshing and protein-packed quinoa salad with fresh vegetables and a zesty lemon vinaigrette dressing.',
                image: './images/stories/Recipes/All/Quinoa Salad with Lemon Vinaigrette.jpg',
                prepTime: '20 minutes',
                servings: '2 servings',
                difficulty: 'Easy',
                ingredients: [
                    { amount: '1 cup', name: 'cooked quinoa' },
                    { amount: '1/2 cup', name: 'cherry tomatoes, halved' },
                    { amount: '1/4 cup', name: 'red onion, diced' },
                    { amount: '1/4 cup', name: 'cucumber, diced' },
                    { amount: '2 tablespoons', name: 'fresh lemon juice' },
                    { amount: '2 tablespoons', name: 'olive oil' },
                    { amount: '1 teaspoon', name: 'Dijon mustard' },
                    { amount: 'To taste', name: 'salt and pepper' }
                ],
                instructions: [
                    'Cook quinoa according to package instructions and let cool.',
                    'In a large bowl, combine cooled quinoa, cherry tomatoes, red onion, and cucumber.',
                    'In a small bowl, whisk together lemon juice, olive oil, and Dijon mustard.',
                    'Pour the vinaigrette over the quinoa mixture and toss to combine.',
                    'Season with salt and pepper to taste.',
                    'Chill for at least 30 minutes before serving.'
                ]
            },
            'lentil-curry-with-coconut-milk': {
                id: 'lentil-curry-with-coconut-milk',
                title: 'Lentil Curry with Coconut Milk',
                category: 'Dinner',
                description: 'A hearty and flavorful lentil curry made with coconut milk, aromatic spices, and fresh vegetables.',
                image: './images/stories/Recipes/All/Lentil Curry with Coconut Milk.jpg',
                prepTime: '45 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                ingredients: [
                    { amount: '1 cup', name: 'red lentils' },
                    { amount: '1 can', name: 'coconut milk' },
                    { amount: '1', name: 'onion, diced' },
                    { amount: '3 cloves', name: 'garlic, minced' },
                    { amount: '1 tablespoon', name: 'curry powder' },
                    { amount: '1 teaspoon', name: 'ground cumin' },
                    { amount: '1/2 teaspoon', name: 'turmeric' },
                    { amount: '2 cups', name: 'vegetable broth' }
                ],
                instructions: [
                    'Rinse lentils and set aside.',
                    'In a large pot, sauté onion and garlic until fragrant.',
                    'Add curry powder, cumin, and turmeric. Cook for 1 minute.',
                    'Add lentils, coconut milk, and vegetable broth.',
                    'Bring to a boil, then reduce heat and simmer for 25-30 minutes.',
                    'Season with salt and pepper. Serve over rice.'
                ]
            },
            'chocolate-avocado-mousse': {
                id: 'chocolate-avocado-mousse',
                title: 'Chocolate Avocado Mousse',
                category: 'Dessert',
                description: 'A rich and creamy chocolate mousse made with ripe avocados for a healthy and indulgent dessert.',
                image: './images/stories/Recipes/All/Chocolate Avocado Mousse.jpg',
                prepTime: '15 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                ingredients: [
                    { amount: '2', name: 'ripe avocados' },
                    { amount: '1/4 cup', name: 'cocoa powder' },
                    { amount: '1/4 cup', name: 'maple syrup' },
                    { amount: '1 teaspoon', name: 'vanilla extract' },
                    { amount: 'Pinch', name: 'salt' },
                    { amount: 'Optional:', name: 'berries for garnish' }
                ],
                instructions: [
                    'Scoop avocado flesh into a food processor.',
                    'Add cocoa powder, maple syrup, vanilla, and salt.',
                    'Process until smooth and creamy.',
                    'Taste and adjust sweetness if needed.',
                    'Chill for at least 2 hours before serving.',
                    'Garnish with berries if desired.'
                ]
            },
            'green-smoothie-bowl': {
                id: 'green-smoothie-bowl',
                title: 'Green Smoothie Bowl',
                category: 'Smoothie',
                description: 'A nutritious and energizing smoothie bowl packed with leafy greens, fruits, and topped with crunchy granola.',
                image: './images/stories/Recipes/All/Green Smoothie Bowl.jpg',
                prepTime: '10 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                ingredients: [
                    { amount: '1 cup', name: 'spinach' },
                    { amount: '1', name: 'frozen banana' },
                    { amount: '1/2 cup', name: 'mango chunks' },
                    { amount: '1/2 cup', name: 'coconut milk' },
                    { amount: '1 tablespoon', name: 'chia seeds' },
                    { amount: 'For topping:', name: 'granola, berries, coconut flakes' }
                ],
                instructions: [
                    'Add spinach, banana, mango, and coconut milk to blender.',
                    'Blend until smooth and creamy.',
                    'Pour into a bowl.',
                    'Top with chia seeds, granola, berries, and coconut flakes.',
                    'Serve immediately and enjoy!'
                ]
            }
        };
        
        this.init();
    }

    init() {
        this.loadRecipeFromURL();
        this.initNavigationBadges();
    }

    loadRecipeFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get('recipe');
        
        if (recipeId && this.recipes[recipeId]) {
            this.displayRecipe(this.recipes[recipeId]);
        } else {
            // Default to first recipe if no valid ID found
            this.displayRecipe(this.recipes['avocado-toast-with-everything-bagel-seasoning']);
        }
    }

    displayRecipe(recipe) {
        // Update recipe information
        const categoryFormat = `RECIPE/${recipe.category.toUpperCase()}`;
        document.getElementById('recipe-category-format').textContent = categoryFormat;
        document.getElementById('recipe-title').textContent = recipe.title;
        document.getElementById('recipe-description').textContent = recipe.description;
        document.getElementById('recipe-image').src = recipe.image;
        document.getElementById('recipe-image').alt = recipe.title;
        document.getElementById('prep-time').textContent = recipe.prepTime;
        document.getElementById('servings').textContent = recipe.servings;
        document.getElementById('difficulty').textContent = recipe.difficulty;

        // Update ingredients
        this.displayIngredients(recipe.ingredients);
        
        // Update instructions
        this.displayInstructions(recipe.instructions);
        
        // Update page title
        document.title = `${recipe.title} - Broccobae | Vegan Recipe Collection`;
    }

    displayIngredients(ingredients) {
        const ingredientsList = document.getElementById('ingredients-list');
        ingredientsList.innerHTML = '';
        
        ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.className = 'ingredient-item';
            
            li.innerHTML = `
                <span class="ingredient-amount">${ingredient.amount}</span>
                <span class="ingredient-name">${ingredient.name}</span>
            `;
            
            ingredientsList.appendChild(li);
        });
    }

    displayInstructions(instructions) {
        const instructionsList = document.getElementById('instructions-list');
        instructionsList.innerHTML = '';
        
        instructions.forEach((instruction, index) => {
            const li = document.createElement('li');
            li.className = 'instruction-step';
            
            li.innerHTML = `
                <div class="step-label">Step ${index + 1}</div>
                <div class="step-content">${instruction}</div>
            `;
            
            instructionsList.appendChild(li);
        });
    }

    initNavigationBadges() {
        const badges = document.querySelectorAll('.nav-badge');
        badges.forEach(badge => {
            badge.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = badge.getAttribute('href').substring(1); // Remove the '#'
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Add slide-up class to trigger animation
                    targetSection.classList.add('slide-up');
                    
                    // Smooth scroll to the target section
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Optional: Add a slight delay before showing the section
                    setTimeout(() => {
                        targetSection.style.opacity = '1';
                        targetSection.style.transform = 'translateY(0)';
                    }, 100);
                }
            });
        });
        
        // Initialize target sections on page load
        this.initTargetSections();
    }
    
    initTargetSections() {
        const targetSections = document.querySelectorAll('.target-section');
        
        // Set up intersection observer for slide-up animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-up');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        targetSections.forEach(section => {
            observer.observe(section);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RecipeDetailManager();
});