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
                servings: '4 servings',
                difficulty: 'Easy',
                ingredients: [
                    { amount: '1 cup', name: 'quinoa, rinsed' },
                    { amount: '2 cups', name: 'water' },
                    { amount: '1/2 cup', name: 'chopped cucumber' },
                    { amount: '1/2 cup', name: 'cherry tomatoes, halved' },
                    { amount: '1/4 cup', name: 'chopped red onion' },
                    { amount: '1/4 cup', name: 'chopped fresh parsley' },
                    { amount: '1/4 cup', name: 'chopped fresh mint' },
                    { amount: '3 tablespoons', name: 'olive oil' },
                    { amount: '2 tablespoons', name: 'lemon juice' },
                    { amount: '1 tablespoon', name: 'Dijon mustard' },
                    { amount: '1 clove', name: 'garlic, minced' },
                    { amount: 'To taste', name: 'salt and pepper' }
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
                id: 'spicy-black-bean-burgers',
                title: 'Spicy Black Bean Burgers',
                category: 'Dinner',
                description: 'Flavorful and protein-rich black bean burgers with a perfect blend of spices and herbs.',
                image: './images/stories/Recipes/All/Spicy Black Bean Burgers.jpg',
                prepTime: '25 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                ingredients: [
                    { amount: '1 can (15 ounces)', name: 'black beans, rinsed and drained' },
                    { amount: '1/2 cup', name: 'cooked quinoa' },
                    { amount: '1/4 cup', name: 'chopped red onion' },
                    { amount: '2 cloves', name: 'garlic, minced' },
                    { amount: '1 tablespoon', name: 'chili powder' },
                    { amount: '1 teaspoon', name: 'cumin' },
                    { amount: '1/2 teaspoon', name: 'smoked paprika' },
                    { amount: '1/4 teaspoon', name: 'cayenne pepper (optional, for extra spice)' },
                    { amount: '1/4 cup', name: 'chopped fresh cilantro' },
                    { amount: '2 tablespoons', name: 'breadcrumbs' },
                    { amount: '1 tablespoon', name: 'olive oil' },
                    { amount: 'To taste', name: 'salt and pepper' }
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
                    { amount: '1', name: 'ripe avocado' },
                    { amount: '1/2 cup', name: 'unsweetened cocoa powder' },
                    { amount: '1/2 cup', name: 'maple syrup or agave nectar' },
                    { amount: '1/4 cup', name: 'plant-based milk (almond, soy, or oat)' },
                    { amount: '1 teaspoon', name: 'vanilla extract' },
                    { amount: 'Pinch', name: 'salt' },
                    { amount: 'Optional:', name: 'fresh berries, chocolate shavings, or cocoa powder for garnish' }
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
                id: 'avocado-banana-smoothie',
                title: 'Avocado Banana Smoothie',
                category: 'Smoothie',
                description: 'A creamy and nutritious smoothie packed with healthy fats, fiber, and natural sweetness.',
                image: './images/stories/Recipes/All/Avocado Banana Smoothie.jpg',
                prepTime: '5 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                ingredients: [
                    { amount: '1', name: 'ripe avocado' },
                    { amount: '1', name: 'frozen banana' },
                    { amount: '1 cup', name: 'spinach' },
                    { amount: '1/2 cup', name: 'plant-based milk' },
                    { amount: '1 tablespoon', name: 'chia seeds' },
                    { amount: '1 teaspoon', name: 'maple syrup (optional)' }
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
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RecipeDetailManager();
});