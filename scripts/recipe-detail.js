// Recipe Detail Page JavaScript

class RecipeDetailManager {
    constructor() {
        this.recipes = {
            'avocado-toast-with-everything-bagel-seasoning': {
                id: 'breakfast-1',
                title: 'Avocado Toast with Everything Bagel Seasoning',
                category: 'breakfast',
                image: './images/stories/Recipes/All Recipes/Avocado Toast.jpg',
                prepTime: '10 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '280 kcal',
                description: 'A simple and nutritious breakfast featuring creamy avocado on toasted whole-grain bread, topped with everything bagel seasoning for extra flavor and crunch.',
                ingredients: [
                    '1 slice of whole-grain bread',
                    '1/2 ripe avocado',
                    '1/4 teaspoon everything bagel seasoning',
                    'Optional: red pepper flakes, microgreens'
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
                id: 'lunch-1',
                title: 'Quinoa Salad with Lemon Vinaigrette',
                category: 'lunch',
                image: './images/stories/Recipes/All Recipes/Quinoa Salad with Lemon Vinaigrette  .png',
                prepTime: '25 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '320 kcal',
                description: 'A refreshing and protein-packed quinoa salad loaded with fresh vegetables and herbs, dressed with a zesty lemon vinaigrette that brings all the flavors together.',
                ingredients: [
                    '1 cup quinoa, rinsed',
                    '2 cups water',
                    '1/2 cup chopped cucumber',
                    '1/2 cup cherry tomatoes, halved',
                    '1/4 cup chopped red onion',
                    '1/4 cup chopped fresh parsley',
                    '1/4 cup chopped fresh mint',
                    'For the Lemon Vinaigrette:',
                    '3 tablespoons olive oil',
                    '2 tablespoons lemon juice',
                    '1 tablespoon Dijon mustard',
                    '1 clove garlic, minced',
                    'Salt and pepper to taste'
                ],
                instructions: [
                    'Cook the quinoa: In a medium saucepan, combine the rinsed quinoa and water. Bring to a boil, then reduce heat to low, cover, and simmer for 15 minutes, or until the water is absorbed and the quinoa is cooked. Fluff with a fork and let it cool.',
                    'Prepare the vinaigrette: In a small bowl, whisk together the olive oil, lemon juice, Dijon mustard, minced garlic, salt, and pepper.',
                    'Assemble the salad: In a large bowl, combine the cooked quinoa, cucumber, cherry tomatoes, red onion, parsley, and mint.',
                    'Dress the salad: Pour the lemon vinaigrette over the quinoa mixture and toss gently to combine.',
                    'Serve: Serve the quinoa salad immediately or chill for later. Garnish with extra herbs if desired.'
                ]
            },
            'spicy-black-bean-burgers': {
                id: 'dinner-1',
                title: 'Spicy Black Bean Burgers',
                category: 'dinner',
                image: './images/stories/Recipes/All Recipes/Spicy Black Bean Burgers .png',
                prepTime: '30 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '385 kcal',
                description: 'Hearty and flavorful plant-based burgers made with black beans, quinoa, and aromatic spices that deliver a satisfying kick of heat in every bite.',
                ingredients: [
                    '1 can (15 ounces) black beans, rinsed and drained',
                    '1/2 cup cooked quinoa',
                    '1/4 cup chopped red onion',
                    '2 cloves garlic, minced',
                    '1 tablespoon chili powder',
                    '1 teaspoon cumin',
                    '1/2 teaspoon smoked paprika',
                    '1/4 teaspoon cayenne pepper (optional, for extra spice)',
                    '1/4 cup chopped fresh cilantro',
                    '2 tablespoons breadcrumbs',
                    '1 tablespoon olive oil',
                    'Salt and pepper to taste'
                ],
                instructions: [
                    'In a large bowl, mash the black beans with a fork or potato masher until mostly smooth. Some chunks are okay.',
                    'Add the cooked quinoa, red onion, garlic, chili powder, cumin, smoked paprika, cayenne pepper (if using), cilantro, and breadcrumbs to the bowl. Mix well to combine.',
                    'Heat the olive oil in a large skillet over medium heat.',
                    'Form the mixture into patties, about 1/2 inch thick.',
                    'Cook the patties for 4-5 minutes per side, or until heated through and slightly crispy on the outside.',
                    'Season with salt and pepper to taste.',
                    'Serve on buns with your favorite toppings, such as lettuce, tomato, avocado, and a vegan sauce.'
                ]
            },
            'chocolate-avocado-mousse': {
                id: 'dessert-1',
                title: 'Chocolate Avocado Mousse',
                category: 'dessert',
                image: './images/stories/Recipes/All Recipes/Chocolate Avocado Mousse .png',
                prepTime: '15 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '195 kcal',
                description: 'A rich and creamy chocolate dessert that secretly uses avocado for an incredibly smooth texture, naturally sweetened and completely guilt-free.',
                ingredients: [
                    '1 ripe avocado',
                    '1/2 cup unsweetened cocoa powder',
                    '1/2 cup maple syrup or agave nectar',
                    '1/4 cup plant-based milk (almond, soy, or oat)',
                    '1 teaspoon vanilla extract',
                    'Pinch of salt',
                    'Optional: fresh berries, chocolate shavings, or a sprinkle of cocoa powder for garnish'
                ],
                instructions: [
                    'In a blender or food processor, combine the ripe avocado, cocoa powder, maple syrup or agave nectar, plant-based milk, vanilla extract, and salt.',
                    'Blend until completely smooth and creamy, scraping down the sides as needed to ensure all ingredients are fully incorporated.',
                    'Taste and adjust sweetness if necessary, adding more maple syrup or agave nectar to your preference.',
                    'Transfer the mousse to serving dishes or ramekins.',
                    'Refrigerate for at least 30 minutes to allow the mousse to set and chill.',
                    'Before serving, garnish with fresh berries, chocolate shavings, or a sprinkle of cocoa powder, if desired.',
                    'Enjoy this delightful and healthy chocolate avocado mousse!'
                ]
            },
            'avocado-banana-smoothie': {
                id: 'smoothie-1',
                title: 'Avocado Banana Smoothie',
                category: 'smoothie',
                image: './images/stories/Recipes/All Recipes/Avocado Banana Smoothie  .png',
                prepTime: '5 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                ingredients: [
                    '1 ripe avocado',
                    '1 frozen banana',
                    '1 cup spinach',
                    '1/2 cup plant-based milk',
                    '1 tablespoon chia seeds',
                    '1 teaspoon maple syrup (optional)'
                ],
                instructions: [
                    'Combine all ingredients in a blender.',
                    'Blend until smooth and creamy.',
                    'Add more plant-based milk if needed to reach desired consistency.',
                    'Serve immediately and enjoy!'
                ]
            }
        };
        this.init();
    }

    init() {
        this.loadRecipeFromURL();
    }

    loadRecipeFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const recipeSlug = urlParams.get('recipe');
        const recipeId = urlParams.get('id');
        
        let recipe = null;
        
        // Try to find recipe by slug first, then by ID
        if (recipeSlug && this.recipes[recipeSlug]) {
            recipe = this.recipes[recipeSlug];
        } else if (recipeId) {
            // Find recipe by ID
            recipe = Object.values(this.recipes).find(r => r.id === recipeId);
        }
        
        // If no specific recipe found, default to avocado toast
        if (!recipe) {
            recipe = this.recipes['avocado-toast-with-everything-bagel-seasoning'];
        }
        
        this.displayRecipe(recipe);
    }

    displayRecipe(recipe) {
        // Update recipe header
        const recipeImage = document.getElementById('recipe-image');
        if (recipeImage) {
            recipeImage.src = recipe.image;
            recipeImage.alt = recipe.title;
        }

        const recipeCategory = document.getElementById('recipe-category');
        if (recipeCategory) {
            recipeCategory.textContent = `RECIPE/${recipe.category.toUpperCase()}`;
        }

        const recipeTitle = document.getElementById('recipe-title');
        if (recipeTitle) {
            recipeTitle.textContent = recipe.title;
        }

        const recipeDescription = document.getElementById('recipe-description');
        if (recipeDescription) {
            recipeDescription.textContent = recipe.description || 'A delicious and nutritious plant-based recipe.';
        }

        const prepTime = document.getElementById('prep-time');
        if (prepTime) {
            prepTime.textContent = recipe.prepTime;
        }

        const servings = document.getElementById('servings');
        if (servings) {
            servings.textContent = recipe.servings;
        }

        const difficulty = document.getElementById('difficulty');
        if (difficulty) {
            difficulty.textContent = recipe.difficulty;
        }

        const calories = document.getElementById('recipe-calories');
        if (calories) {
            calories.textContent = recipe.calories || '250 kcal';
        }

        // Update ingredients list
        const ingredientsList = document.getElementById('ingredients-list');
        if (ingredientsList) {
            ingredientsList.innerHTML = '';
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.className = 'ingredient-item';
                li.innerHTML = `<span class="ingredient-text">${ingredient}</span>`;
                ingredientsList.appendChild(li);
            });
        }

        // Update instructions list
        const instructionsList = document.getElementById('instructions-list');
        if (instructionsList) {
            instructionsList.innerHTML = '';
            recipe.instructions.forEach((instruction, index) => {
                const li = document.createElement('li');
                li.className = 'instruction-item';
                li.innerHTML = `<span class="instruction-text">Step ${index + 1}: ${instruction}</span>`;
                instructionsList.appendChild(li);
            });
        }

        // Update page title
        document.title = `${recipe.title} - Broccobae | Vegan Recipe Collection`;
    }
}

// Initialize the recipe detail manager when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new RecipeDetailManager();
});