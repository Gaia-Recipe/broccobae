// Recipe Detail Page JavaScript

class RecipeDetailManager {
    constructor() {
        this.recipes = {
            // Meal Plan Recipes
            'high-protein-plan': {
                id: 'high-protein-plan',
                title: 'High-Protein Vegan Power',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Protein Smoothie with Plant-Based Protein Powder.webp',
                prepTime: '7 days',
                servings: '21 meals',
                difficulty: 'Medium',
                calories: '1800-2200 kcal',
                description: 'Fuel your workouts with plant-based protein powerhouses.',
                ingredients: [
                    'Various high-protein plant foods',
                    'Legumes and beans',
                    'Quinoa and other complete proteins',
                    'Nuts and seeds',
                    'Plant-based protein powder'
                ],
                instructions: [
                    'Follow the 7-day meal plan',
                    'Prepare protein-rich meals',
                    'Focus on post-workout nutrition',
                    'Maintain 25g+ protein per meal'
                ]
            },
            'low-carb-plan': {
                id: 'low-carb-plan',
                title: 'Low-Carb Vegan Delights',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Spinach and Mushroom Salad with Lemon Vinaigrette.jpg',
                prepTime: '7 days',
                servings: '21 meals',
                difficulty: 'Medium',
                calories: '1400-1800 kcal',
                description: 'Delicious low-carb meals that keep you satisfied.',
                ingredients: [
                    'Low-carb vegetables',
                    'Healthy fats',
                    'Plant-based proteins',
                    'Nuts and seeds',
                    'Leafy greens'
                ],
                instructions: [
                    'Follow the 7-day meal plan',
                    'Keep carbs under 30g per meal',
                    'Focus on high fiber content',
                    'Maintain blood sugar friendly options'
                ]
            },
            'budget-plan': {
                id: 'budget-plan',
                title: 'Budget-Friendly Vegan Eats',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Vegan Chili.jpg',
                prepTime: '7 days',
                servings: '21 meals',
                difficulty: 'Easy',
                calories: '1600-2000 kcal',
                description: 'Nutritious meals that won\'t break the bank.',
                ingredients: [
                    'Pantry staples',
                    'Seasonal vegetables',
                    'Dried beans and lentils',
                    'Rice and grains',
                    'Basic spices'
                ],
                instructions: [
                    'Follow the 7-day meal plan',
                    'Use bulk cooking techniques',
                    'Shop for seasonal produce',
                    'Keep costs under $7 per day'
                ]
            },
            'weight-loss-plan': {
                id: 'weight-loss-plan',
                title: 'Weight Loss Vegan Plan',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Vegetable Stir-Fry.avif',
                prepTime: '7 days',
                servings: '21 meals',
                difficulty: 'Medium',
                calories: '1200-1600 kcal',
                description: 'Sustainable weight loss with satisfying plant-based meals.',
                ingredients: [
                    'High volume, low calorie foods',
                    'Metabolism boosting spices',
                    'Lean plant proteins',
                    'Fiber-rich vegetables',
                    'Portion-controlled snacks'
                ],
                instructions: [
                    'Follow the 7-day meal plan',
                    'Focus on calorie control',
                    'Include metabolism boosting foods',
                    'Maintain high volume, low calorie approach'
                ]
            },
            'chickpea-flour-omelette': {
                id: 'chickpea-flour-omelette',
                title: 'Chickpea Flour Omelette with Veggies',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Chickpea Flour Omelette with Veggies 12.48.16.jpeg',
                prepTime: '15 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '320-380 kcal',
                description: 'Protein-packed breakfast with fresh vegetables.',
                ingredients: [
                    '1/2 cup chickpea flour',
                    '1/2 cup water',
                    '1/4 cup mixed vegetables',
                    '1 tbsp nutritional yeast',
                    'Salt and pepper to taste'
                ],
                instructions: [
                    'Mix chickpea flour with water',
                    'Add vegetables and seasonings',
                    'Cook like a regular omelette',
                    'Serve hot'
                ]
            },
            'quinoa-black-bean-salad': {
                id: 'quinoa-black-bean-salad',
                title: 'Quinoa Salad with Black Beans and Avocado',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Quinoa Salad with Black Beans and Avocado.jpg',
                prepTime: '20 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '420-480 kcal',
                description: 'Complete protein salad with healthy fats.',
                ingredients: [
                    '1/2 cup cooked quinoa',
                    '1/3 cup black beans',
                    '1/2 avocado',
                    'Mixed greens',
                    'Lime vinaigrette'
                ],
                instructions: [
                    'Cook quinoa according to package directions',
                    'Mix with black beans and greens',
                    'Top with avocado',
                    'Dress with lime vinaigrette'
                ]
            },
            'tempeh-stir-fry': {
                id: 'tempeh-stir-fry',
                title: 'Tempeh Stir-Fry with Brown Rice',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Tempeh Stir-Fry with Brown Rice.jpg',
                prepTime: '25 minutes',
                servings: '1 serving',
                difficulty: 'Medium',
                calories: '450-520 kcal',
                description: 'Fermented protein with wholesome grains.',
                ingredients: [
                    '3 oz tempeh',
                    '1/2 cup brown rice',
                    'Mixed stir-fry vegetables',
                    'Soy sauce',
                    'Ginger and garlic'
                ],
                instructions: [
                    'Cook brown rice',
                    'Sauté tempeh until golden',
                    'Add vegetables and seasonings',
                    'Serve over rice'
                ]
            },
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
            'roasted-chickpeas': {
                id: 'roasted-chickpeas',
                title: 'Roasted Chickpeas with Spices',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Roasted Chickpeas with Spices.jpg',
                prepTime: '30 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '180-220 kcal',
                description: 'Crunchy protein-rich snack.',
                ingredients: [
                    '1 cup chickpeas',
                    '1 tbsp olive oil',
                    'Spice blend',
                    'Salt to taste'
                ],
                instructions: [
                    'Drain and dry chickpeas',
                    'Toss with oil and spices',
                    'Roast until crispy',
                    'Cool before serving'
                ]
            },
            'protein-smoothie': {
                id: 'protein-smoothie',
                title: 'Protein Smoothie with Plant-Based Protein Powder',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Protein Smoothie with Plant-Based Protein Powder.webp',
                prepTime: '5 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '280-340 kcal',
                description: 'Post-workout protein boost.',
                ingredients: [
                    '1 scoop plant protein powder',
                    '1 cup plant milk',
                    '1/2 banana',
                    '1 tbsp nut butter',
                    'Ice cubes'
                ],
                instructions: [
                    'Add all ingredients to blender',
                    'Blend until smooth',
                    'Serve immediately',
                    'Enjoy post-workout'
                ]
            },
            'chia-pudding-berries': {
                id: 'chia-pudding-berries',
                title: 'Chia Seed Pudding with Berries',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Chia Seed Pudding with Berries.jpg',
                prepTime: '10 minutes + overnight',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '220-280 kcal',
                description: 'Creamy pudding with antioxidant-rich berries.',
                ingredients: [
                    '3 tbsp chia seeds',
                    '1 cup plant milk',
                    '1 tbsp maple syrup',
                    '1/2 cup mixed berries',
                    'Vanilla extract'
                ],
                instructions: [
                    'Mix chia seeds with milk and sweetener',
                    'Refrigerate overnight',
                    'Top with berries',
                    'Serve chilled'
                ]
            },
            'spinach-mushroom-salad': {
                id: 'spinach-mushroom-salad',
                title: 'Spinach and Mushroom Salad with Lemon Vinaigrette',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Spinach and Mushroom Salad with Lemon Vinaigrette.jpg',
                prepTime: '15 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '180-220 kcal',
                description: 'Fresh salad with tangy dressing.',
                ingredients: [
                    '2 cups fresh spinach',
                    '1 cup sliced mushrooms',
                    'Lemon vinaigrette',
                    'Cherry tomatoes',
                    'Red onion'
                ],
                instructions: [
                    'Wash and prepare vegetables',
                    'Sauté mushrooms lightly',
                    'Combine with spinach',
                    'Dress with vinaigrette'
                ]
            },
            'grilled-eggplant-steaks': {
                id: 'grilled-eggplant-steaks',
                title: 'Grilled Eggplant Steaks with Roasted Vegetables',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Grilled Eggplant Steaks with Roasted Vegetables.jpg',
                prepTime: '35 minutes',
                servings: '1 serving',
                difficulty: 'Medium',
                calories: '250-300 kcal',
                description: 'Hearty grilled vegetables with Mediterranean flavors.',
                ingredients: [
                    '1 large eggplant',
                    'Mixed vegetables',
                    'Olive oil',
                    'Mediterranean herbs',
                    'Balsamic glaze'
                ],
                instructions: [
                    'Slice eggplant into steaks',
                    'Grill until tender',
                    'Roast vegetables separately',
                    'Serve with herbs and glaze'
                ]
            },
            'celery-almond-butter': {
                id: 'celery-almond-butter',
                title: 'Celery Sticks with Almond Butter',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Celery Sticks with Almond Butter.jpg',
                prepTime: '5 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '150-180 kcal',
                description: 'Crunchy snack with healthy fats.',
                ingredients: [
                    '3 celery stalks',
                    '2 tbsp almond butter',
                    'Optional: raisins'
                ],
                instructions: [
                    'Wash and cut celery',
                    'Fill with almond butter',
                    'Add raisins if desired',
                    'Serve immediately'
                ]
            },
            'coconut-cream-raspberries': {
                id: 'coconut-cream-raspberries',
                title: 'Coconut Cream with Raspberries',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Coconut Cream with Raspberries 15.14.10.jpg',
                prepTime: '10 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '180-220 kcal',
                description: 'Rich dessert with fresh berries.',
                ingredients: [
                    '1/2 cup coconut cream',
                    '1/2 cup fresh raspberries',
                    '1 tbsp maple syrup',
                    'Vanilla extract'
                ],
                instructions: [
                    'Whip coconut cream',
                    'Add sweetener and vanilla',
                    'Top with raspberries',
                    'Serve chilled'
                ]
            },
            'vegan-chili': {
                id: 'vegan-chili',
                title: 'Vegan Chili',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Vegan Chili.jpg',
                prepTime: '45 minutes',
                servings: '6 servings',
                difficulty: 'Medium',
                calories: '320-380 kcal',
                description: 'Hearty chili that feeds the whole family.',
                ingredients: [
                    '2 cups mixed beans',
                    '1 can diced tomatoes',
                    'Chili spices',
                    'Vegetables',
                    'Vegetable broth'
                ],
                instructions: [
                    'Sauté vegetables',
                    'Add beans and tomatoes',
                    'Season with spices',
                    'Simmer until thick'
                ]
            },
            'vegetable-stir-fry': {
                id: 'vegetable-stir-fry',
                title: 'Vegetable Stir-Fry',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Vegetable Stir-Fry.avif',
                prepTime: '20 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '280-340 kcal',
                description: 'Quick and nutritious vegetable medley.',
                ingredients: [
                    'Mixed seasonal vegetables',
                    'Soy sauce',
                    'Garlic and ginger',
                    'Sesame oil',
                    'Green onions'
                ],
                instructions: [
                    'Heat oil in wok',
                    'Add vegetables in order of cooking time',
                    'Season with soy sauce and aromatics',
                    'Serve hot'
                ]
            },
            'vegan-tacos': {
                id: 'vegan-tacos',
                title: 'Vegan Tacos',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Vegan Tacos.jpg',
                prepTime: '25 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '350-420 kcal',
                description: 'Flavorful tacos with plant-based fillings.',
                ingredients: [
                    'Corn tortillas',
                    'Black beans',
                    'Fresh vegetables',
                    'Avocado',
                    'Lime and cilantro'
                ],
                instructions: [
                    'Warm tortillas',
                    'Prepare bean filling',
                    'Add fresh toppings',
                    'Serve with lime'
                ]
            },
            'pasta-primavera': {
                id: 'pasta-primavera',
                title: 'Pasta Primavera',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Pasta Primavera.jpg',
                prepTime: '30 minutes',
                servings: '1 serving',
                difficulty: 'Medium',
                calories: '380-450 kcal',
                description: 'Classic pasta with seasonal vegetables.',
                ingredients: [
                    'Whole grain pasta',
                    'Seasonal vegetables',
                    'Olive oil',
                    'Garlic',
                    'Fresh herbs'
                ],
                instructions: [
                    'Cook pasta al dente',
                    'Sauté vegetables',
                    'Combine with pasta',
                    'Finish with herbs'
                ]
            },
            'vegan-shepherds-pie': {
                id: 'vegan-shepherds-pie',
                title: 'Vegan Shepherd\'s Pie',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Vegan Shepherd\'s Pie.jpg',
                prepTime: '60 minutes',
                servings: '8 servings',
                difficulty: 'Medium',
                calories: '420-480 kcal',
                description: 'Comfort food that feeds a crowd.',
                ingredients: [
                    'Lentils and vegetables',
                    'Mashed potatoes',
                    'Vegetable broth',
                    'Herbs and spices',
                    'Nutritional yeast'
                ],
                instructions: [
                    'Prepare lentil filling',
                    'Make mashed potato topping',
                    'Layer in baking dish',
                    'Bake until golden'
                ]
            },
            'tropical-chia-pudding': {
                id: 'tropical-chia-pudding',
                title: 'Tropical Chia Seed Pudding',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Tropical Chia Seed Pudding.jpg',
                prepTime: '10 minutes + overnight',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '200-250 kcal',
                description: 'Tropical flavors in a filling pudding.',
                ingredients: [
                    '3 tbsp chia seeds',
                    'Coconut milk',
                    'Tropical fruits',
                    'Coconut flakes',
                    'Natural sweetener'
                ],
                instructions: [
                    'Mix chia with coconut milk',
                    'Refrigerate overnight',
                    'Top with tropical fruits',
                    'Garnish with coconut'
                ]
            },
            'mediterranean-chickpea-salad': {
                id: 'mediterranean-chickpea-salad',
                title: 'Mediterranean Chickpea Salad',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Mediterranean Chickpea Salad.jpg',
                prepTime: '15 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '280-320 kcal',
                description: 'Fresh Mediterranean flavors with protein.',
                ingredients: [
                    'Chickpeas',
                    'Mediterranean vegetables',
                    'Olive oil',
                    'Lemon juice',
                    'Fresh herbs'
                ],
                instructions: [
                    'Combine chickpeas and vegetables',
                    'Make lemon dressing',
                    'Toss with herbs',
                    'Let flavors meld'
                ]
            },
            'spiced-tofu-stir-fry': {
                id: 'spiced-tofu-stir-fry',
                title: 'Spiced Tofu Stir-Fry',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Spiced Tofu Stir-Fry.jpg',
                prepTime: '25 minutes',
                servings: '1 serving',
                difficulty: 'Medium',
                calories: '250-300 kcal',
                description: 'Flavorful tofu with metabolism-boosting spices.',
                ingredients: [
                    'Firm tofu',
                    'Thermogenic spices',
                    'Low-calorie vegetables',
                    'Minimal oil',
                    'Fresh herbs'
                ],
                instructions: [
                    'Press and cube tofu',
                    'Season with spices',
                    'Stir-fry with vegetables',
                    'Serve hot'
                ]
            },
            'cucumber-hummus-bites': {
                id: 'cucumber-hummus-bites',
                title: 'Cucumber and Hummus Bites',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Cucumber and Hummus Bites.jpg',
                prepTime: '10 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '120-150 kcal',
                description: 'Light, refreshing snack.',
                ingredients: [
                    'Cucumber slices',
                    'Hummus',
                    'Cherry tomatoes',
                    'Fresh herbs',
                    'Paprika'
                ],
                instructions: [
                    'Slice cucumber into rounds',
                    'Top with hummus',
                    'Garnish with tomatoes and herbs',
                    'Sprinkle with paprika'
                ]
            },
            'mixed-nuts-handful': {
                id: 'mixed-nuts-handful',
                title: 'Handful of Mixed Nuts',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Handful of Mixed Nuts.jpg',
                prepTime: '0 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '160-200 kcal',
                description: 'Portion-controlled healthy fats.',
                ingredients: [
                    'Mixed raw nuts',
                    'Portion control (1 oz)'
                ],
                instructions: [
                    'Measure 1 oz portion',
                    'Eat mindfully',
                    'Store remainder properly'
                ]
            },
            'buckwheat-pancakes': {
                id: 'buckwheat-pancakes',
                title: 'Gluten-Free Buckwheat Pancakes',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Gluten-Free Buckwheat Pancakes.jpg',
                prepTime: '20 minutes',
                servings: '1 serving',
                difficulty: 'Medium',
                calories: '320-380 kcal',
                description: 'Fluffy pancakes without the gluten.',
                ingredients: [
                    'Buckwheat flour',
                    'Plant milk',
                    'Baking powder',
                    'Natural sweetener',
                    'Vanilla extract'
                ],
                instructions: [
                    'Mix dry ingredients',
                    'Combine wet ingredients',
                    'Cook on griddle',
                    'Serve with toppings'
                ]
            },
            'rainbow-veggie-wraps': {
                id: 'rainbow-veggie-wraps',
                title: 'Rainbow Veggie Wraps',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Chickpea Curry with Cauliflower Rice.jpg',
                prepTime: '15 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '280-340 kcal',
                description: 'Colorful vegetables in gluten-free wraps.',
                ingredients: [
                    'Gluten-free tortillas',
                    'Rainbow vegetables',
                    'Hummus spread',
                    'Fresh herbs',
                    'Avocado'
                ],
                instructions: [
                    'Prepare vegetables',
                    'Spread hummus on tortilla',
                    'Add vegetables and herbs',
                    'Roll tightly'
                ]
            },
            'chickpea-curry-cauliflower': {
                id: 'chickpea-curry-cauliflower',
                title: 'Chickpea Curry with Cauliflower Rice',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Chickpea Curry with Cauliflower Rice.jpg',
                prepTime: '30 minutes',
                servings: '1 serving',
                difficulty: 'Medium',
                calories: '320-380 kcal',
                description: 'Spicy curry with grain-free rice.',
                ingredients: [
                    'Chickpeas',
                    'Cauliflower rice',
                    'Curry spices',
                    'Coconut milk',
                    'Fresh cilantro'
                ],
                instructions: [
                    'Prepare cauliflower rice',
                    'Make chickpea curry',
                    'Serve curry over rice',
                    'Garnish with cilantro'
                ]
            },
            'trail-mix-nuts': {
                id: 'trail-mix-nuts',
                title: 'Trail Mix with Dried Fruits and Nuts',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Trail Mix with Dried Fruits and Nuts.webp',
                prepTime: '5 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '180-220 kcal',
                description: 'Energy-boosting snack mix.',
                ingredients: [
                    'Mixed nuts',
                    'Dried fruits',
                    'Seeds',
                    'Dark chocolate chips (optional)'
                ],
                instructions: [
                    'Combine all ingredients',
                    'Store in airtight container',
                    'Portion control servings'
                ]
            },
            'coconut-chia-pudding': {
                id: 'coconut-chia-pudding',
                title: 'Coconut Chia Seed Pudding',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Coconut Chia Seed Pudding.jpg',
                prepTime: '10 minutes + overnight',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '220-280 kcal',
                description: 'Creamy coconut pudding with chia seeds.',
                ingredients: [
                    '3 tbsp chia seeds',
                    'Coconut milk',
                    'Coconut flakes',
                    'Natural sweetener',
                    'Vanilla extract'
                ],
                instructions: [
                    'Mix chia with coconut milk',
                    'Add sweetener and vanilla',
                    'Refrigerate overnight',
                    'Top with coconut flakes'
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
            },
            'vegan-pad-thai': {
                id: 'vegan-pad-thai',
                title: 'Vegan Pad Thai',
                category: 'asian',
                image: './images/stories/Recipes/All Cuisines/Vegan Pad Thai.jpg',
                prepTime: '30 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '385 kcal',
                description: 'Sweet and tangy Thai noodle dish with rice noodles, tofu, bean sprouts, and peanuts in tamarind sauce.',
                ingredients: [
                    '200g rice noodles',
                    '1 cup tofu (cubed, pan-fried)',
                    '1 cup bean sprouts',
                    '1 carrot (julienned)',
                    '2 spring onions (chopped)',
                    '2 tbsp soy sauce',
                    '1 tbsp tamarind paste',
                    '1 tbsp maple syrup',
                    '1 tsp chili flakes',
                    '2 tbsp peanuts (crushed)',
                    'Lime wedges'
                ],
                instructions: [
                    'Cook rice noodles according to package instructions.',
                    'Mix soy sauce, tamarind paste, and maple syrup as sauce.',
                    'Stir-fry tofu, carrot, and spring onions in a large pan.',
                    'Add noodles, sauce, and sprouts. Toss well.',
                    'Top with crushed peanuts and serve with lime wedges.'
                ]
            },
            'vegan-sushi-rolls': {
                id: 'vegan-sushi-rolls',
                title: 'Vegan Sushi Rolls',
                category: 'asian',
                image: './images/stories/Recipes/All Cuisines/Vegan Sushi Rolls.jpg',
                prepTime: '45 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '320 kcal',
                description: 'Fresh sushi rolls with seasoned rice, cucumber, avocado, and carrot wrapped in nori sheets.',
                ingredients: [
                    '2 cups sushi rice',
                    '3 tbsp rice vinegar',
                    '4 nori sheets',
                    '1 cucumber (julienned)',
                    '1 avocado (sliced)',
                    '1 carrot (julienned)',
                    'Soy sauce for dipping'
                ],
                instructions: [
                    'Cook rice and mix with rice vinegar when cooled.',
                    'Place rice on nori sheet, add cucumber, carrot, and avocado.',
                    'Roll tightly using a bamboo mat.',
                    'Slice with a sharp knife.',
                    'Serve with soy sauce for dipping.'
                ]
            },
            'vegan-miso-soup': {
                id: 'vegan-miso-soup',
                title: 'Vegan Miso Soup',
                category: 'asian',
                image: './images/stories/Recipes/All Cuisines/Vegan Miso Soup.jpg',
                prepTime: '15 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '120 kcal',
                description: 'Traditional Japanese soup with miso paste, tofu cubes, shiitake mushrooms, and nori strips.',
                ingredients: [
                    '4 cups vegetable broth',
                    '2 tbsp miso paste',
                    '1 cup tofu cubes',
                    '1 sheet nori (cut into strips)',
                    '1/2 cup mushrooms (shiitake)',
                    '2 spring onions'
                ],
                instructions: [
                    'Heat broth and add mushrooms.',
                    'Stir miso paste in a little warm water, then add to broth.',
                    'Add tofu and nori strips.',
                    'Garnish with chopped spring onions and serve hot.'
                ]
            },
            'vegan-thai-green-curry': {
                id: 'vegan-thai-green-curry',
                title: 'Vegan Thai Green Curry',
                category: 'asian',
                image: './images/stories/Recipes/All Cuisines/Vegan Thai Green Curry.jpg',
                prepTime: '35 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '420 kcal',
                description: 'Aromatic Thai curry with coconut milk, green curry paste, zucchini, eggplant, broccoli, and tofu.',
                ingredients: [
                    '1 can coconut milk',
                    '2 tbsp green curry paste (vegan)',
                    '1 zucchini (sliced)',
                    '1 eggplant (cubed)',
                    '1 cup broccoli',
                    '1 cup tofu (cubed, fried)',
                    'Fresh basil'
                ],
                instructions: [
                    'Heat curry paste with a little coconut milk in a large pan.',
                    'Add vegetables and simmer until tender.',
                    'Stir in remaining coconut milk and fried tofu.',
                    'Add fresh basil and simmer for 2 minutes.',
                    'Serve with jasmine rice.'
                ]
            },
            'vegan-bibimbap': {
                id: 'vegan-bibimbap',
                title: 'Vegan Bibimbap (Korean)',
                category: 'asian',
                image: './images/stories/Recipes/All Cuisines/Vegan Bibimbap (Korean).webp',
                prepTime: '40 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '450 kcal',
                description: 'Korean rice bowl with sautéed vegetables, spinach, carrots, zucchini, bean sprouts, and gochujang paste.',
                ingredients: [
                    '1 cup rice',
                    '1 cup spinach (sautéed)',
                    '1 carrot (julienned, sautéed)',
                    '1 zucchini (julienned, sautéed)',
                    '1/2 cup bean sprouts',
                    '1/2 cup mushrooms',
                    '1 tbsp gochujang paste'
                ],
                instructions: [
                    'Cook rice and prepare vegetables separately.',
                    'Sauté each vegetable with a little oil and seasoning.',
                    'Arrange vegetables over rice in separate sections.',
                    'Add gochujang paste on top.',
                    'Mix everything together before eating.'
                ]
            },
            'vegan-spring-rolls': {
                id: 'vegan-spring-rolls',
                title: 'Vegan Spring Rolls (Vietnamese)',
                category: 'asian',
                image: './images/stories/Recipes/All Cuisines/Vegan Spring Rolls (Vietnamese).jpg',
                prepTime: '30 minutes',
                servings: '6 servings',
                difficulty: 'Medium',
                calories: '180 kcal',
                description: 'Fresh Vietnamese spring rolls with rice paper, vermicelli noodles, cucumber, carrot, avocado, and herbs.',
                ingredients: [
                    '6 rice paper sheets',
                    '1 cup vermicelli noodles',
                    '1 cucumber (sliced)',
                    '1 carrot (julienned)',
                    '1 avocado (sliced)',
                    'Fresh mint & basil',
                    'Peanut dipping sauce'
                ],
                instructions: [
                    'Cook vermicelli noodles and let cool.',
                    'Soak rice paper until soft.',
                    'Place noodles, vegetables, herbs, and avocado on rice paper.',
                    'Roll tightly, tucking in sides.',
                    'Serve with peanut dipping sauce.'
                ]
            },
            'vegan-teriyaki-tofu': {
                id: 'vegan-teriyaki-tofu',
                title: 'Vegan Teriyaki Tofu',
                category: 'asian',
                image: './images/stories/Recipes/All Cuisines/Vegan Teriyaki Tofu.webp',
                prepTime: '25 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '280 kcal',
                description: 'Pan-fried tofu glazed with homemade teriyaki sauce made from soy sauce, maple syrup, and ginger.',
                ingredients: [
                    '1 block tofu (pressed, cubed)',
                    '3 tbsp soy sauce',
                    '2 tbsp maple syrup',
                    '1 tbsp rice vinegar',
                    '1 tsp ginger (grated)',
                    '1 tsp garlic (minced)',
                    'Sesame seeds'
                ],
                instructions: [
                    'Pan-fry tofu cubes until golden on all sides.',
                    'Mix soy sauce, maple syrup, vinegar, ginger, and garlic for sauce.',
                    'Pour sauce over tofu and simmer until thickened.',
                    'Sprinkle with sesame seeds.',
                    'Serve over rice with steamed vegetables.'
                ]
            },
            'vegan-pho': {
                id: 'vegan-pho',
                title: 'Vegan Pho (Vietnamese Noodle Soup)',
                category: 'asian',
                image: './images/stories/Recipes/All Cuisines/Vegan Pho (Vietnamese Noodle Soup).jpg',
                prepTime: '60 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '350 kcal',
                description: 'Aromatic Vietnamese noodle soup with spiced broth, rice noodles, mushrooms, and fresh herbs.',
                ingredients: [
                    '4 cups vegetable broth',
                    '200g rice noodles',
                    '1 onion, 1 piece ginger (charred)',
                    '2 star anise, 2 cloves',
                    '1 cinnamon stick',
                    '1 cup mushrooms',
                    'Fresh basil, bean sprouts, lime'
                ],
                instructions: [
                    'Char onion and ginger over open flame.',
                    'Simmer broth with charred vegetables and spices for 45 minutes.',
                    'Strain broth and add mushrooms.',
                    'Cook rice noodles separately.',
                    'Serve broth over noodles with fresh herbs, bean sprouts, and lime.'
                ]
            },
            'vegan-general-tsos-cauliflower': {
                id: 'vegan-general-tsos-cauliflower',
                title: 'Vegan General Tso\'s Cauliflower',
                category: 'asian',
                image: './images/stories/Recipes/All Cuisines/Vegan General Tso\'s Cauliflower.jpg',
                prepTime: '35 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '320 kcal',
                description: 'Crispy battered cauliflower florets tossed in sweet and tangy General Tso\'s sauce.',
                ingredients: [
                    '1 head cauliflower (florets)',
                    '1/2 cup flour',
                    '1/2 cup water',
                    '3 tbsp soy sauce',
                    '2 tbsp rice vinegar',
                    '2 tbsp maple syrup',
                    '1 tsp garlic, 1 tsp ginger'
                ],
                instructions: [
                    'Mix flour and water to make batter.',
                    'Dip cauliflower in batter and bake at 450°F for 15 minutes.',
                    'Mix sauce ingredients (soy, vinegar, maple, garlic, ginger).',
                    'Toss baked cauliflower in sauce.',
                    'Serve over rice with green onions.'
                ]
            },
            'vegan-ramen': {
                id: 'vegan-ramen',
                title: 'Vegan Ramen',
                category: 'asian',
                image: './images/stories/Recipes/All Cuisines/Vegan Ramen.jpg',
                prepTime: '40 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '380 kcal',
                description: 'Rich ramen with miso-based broth, ramen noodles, mushrooms, corn, tofu, and nori.',
                ingredients: [
                    '4 cups vegetable broth',
                    '200g ramen noodles',
                    '1 tbsp miso paste',
                    '1 tbsp soy sauce',
                    '1 cup mushrooms',
                    '1/2 cup corn',
                    '1 sheet nori',
                    '1/2 cup tofu cubes',
                    'Spring onions'
                ],
                instructions: [
                    'Heat broth with miso paste and soy sauce.',
                    'Add mushrooms, corn, and tofu to broth.',
                    'Cook ramen noodles separately according to package instructions.',
                    'Place noodles in bowls and pour hot broth over.',
                    'Garnish with nori strips and chopped spring onions.'
                ]
            },
            'vegan-adobo': {
                id: 'vegan-adobo',
                title: 'Vegan Adobo (Tofu & Mushroom Adobo)',
                category: 'asian',
                image: './images/stories/Recipes/All Cuisines/Vegan Adobo (Tofu & Mushroom Adobo).avif',
                prepTime: '30 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '280 kcal',
                description: 'Filipino-style adobo with tofu and mushrooms in savory soy sauce and vinegar.',
                ingredients: [
                    '1 block tofu (cubed & fried)',
                    '1 cup mushrooms (sliced)',
                    '4 cloves garlic (minced)',
                    '1 onion (chopped)',
                    '1/3 cup soy sauce',
                    '1/4 cup cane vinegar',
                    '1 bay leaf',
                    '1/2 tsp black pepper',
                    '1 cup water',
                    '1 tbsp oil'
                ],
                instructions: [
                    'Sauté garlic and onion in oil.',
                    'Add tofu and mushrooms, cook until slightly browned.',
                    'Pour soy sauce, vinegar, water, bay leaf, pepper.',
                    'Simmer 10–15 minutes until sauce reduces.',
                    'Serve with steamed rice.'
                ]
            },
            'vegan-sinigang': {
                id: 'vegan-sinigang',
                title: 'Vegan Sinigang (Tamarind Soup with Vegetables)',
                category: 'asian',
                image: './images/stories/Recipes/All Cuisines/Vegan Sinigang (Tamarind Soup with Vegetables).webp',
                prepTime: '40 minutes',
                servings: '6 servings',
                difficulty: 'Medium',
                calories: '150 kcal',
                description: 'Sour and savory Filipino soup with tamarind and fresh vegetables.',
                ingredients: [
                    '6 cups water',
                    '1 packet tamarind soup base (or fresh tamarind)',
                    '1 tomato (quartered)',
                    '1 onion (quartered)',
                    '1 cup kangkong (water spinach)',
                    '1 cup eggplant (sliced)',
                    '1 cup sitaw (string beans)',
                    '1 radish (sliced)',
                    '1 okra (sliced)',
                    'Salt & pepper to taste'
                ],
                instructions: [
                    'Boil water with tomato and onion.',
                    'Add tamarind mix (or tamarind pulp).',
                    'Add radish, eggplant, okra, and sitaw. Cook until tender.',
                    'Season with salt and pepper.',
                    'Add kangkong last, simmer 1–2 minutes.',
                    'Serve hot with rice.'
                ]
            },
            'vegan-kare-kare': {
                id: 'vegan-kare-kare',
                title: 'Vegan Kare-Kare (Peanut Stew)',
                category: 'asian',
                image: './images/stories/Recipes/All Cuisines/Vegan Kare-Kare (Peanut Stew).avif',
                prepTime: '45 minutes',
                servings: '6 servings',
                difficulty: 'Medium',
                calories: '320 kcal',
                description: 'Rich Filipino peanut stew with vegetables in creamy peanut sauce.',
                ingredients: [
                    '1 eggplant (sliced)',
                    '1 banana heart (sliced) or cabbage',
                    '1 cup string beans (cut)',
                    '1 cup pechay (bok choy)',
                    '1/2 cup peanut butter (unsweetened)',
                    '2 tbsp annatto powder (for color)',
                    '1 onion (chopped)',
                    '3 cloves garlic (minced)',
                    '4 cups vegetable broth',
                    '1 tbsp oil',
                    'Vegan bagoong (made from mushrooms or soy, optional)'
                ],
                instructions: [
                    'Sauté garlic and onion in oil.',
                    'Add vegetables (except pechay) and sauté briefly.',
                    'Stir peanut butter into broth until smooth. Add annatto for color.',
                    'Add vegetables, simmer until tender.',
                    'Add pechay last and cook 2 minutes.',
                    'Serve with vegan bagoong.'
                ]
            },
            'vegan-laing': {
                id: 'vegan-laing',
                title: 'Vegan Laing (Taro Leaves in Coconut Milk)',
                category: 'asian',
                image: './images/stories/Recipes/All Cuisines/Vegan Laing (Taro Leaves in Coconut Milk).jpg',
                prepTime: '35 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '250 kcal',
                description: 'Traditional Filipino dish with taro leaves cooked in rich coconut milk.',
                ingredients: [
                    '2 cups dried taro leaves',
                    '2 cups coconut milk',
                    '1 cup coconut cream',
                    '1 onion (chopped)',
                    '3 cloves garlic (minced)',
                    '1 thumb ginger (sliced)',
                    '2–3 chili peppers (optional)',
                    'Salt to taste'
                ],
                instructions: [
                    'In a pot, sauté garlic, onion, ginger.',
                    'Add coconut milk and bring to simmer.',
                    'Add taro leaves without stirring (to prevent itchiness).',
                    'Simmer gently until leaves soften.',
                    'Add coconut cream, chili, and salt. Cook until creamy.',
                    'Serve with rice.'
                ]
            },
            'vegan-pancit-bihon': {
                id: 'vegan-pancit-bihon',
                title: 'Vegan Pancit Bihon (Rice Noodle Stir-Fry)',
                category: 'asian',
                image: './images/stories/Recipes/All Cuisines/Vegan Pancit Bihon (Rice Noodle Stir-Fry).jpg',
                prepTime: '25 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '300 kcal',
                description: 'Filipino rice noodle stir-fry with vegetables and savory soy sauce.',
                ingredients: [
                    '200g bihon (rice noodles)',
                    '1 carrot (julienned)',
                    '1 cabbage (shredded)',
                    '1/2 cup mushrooms (sliced)',
                    '1/2 cup snow peas',
                    '1 onion (sliced)',
                    '3 cloves garlic (minced)',
                    '3 tbsp soy sauce',
                    '2 tbsp oil',
                    'Calamansi or lemon for garnish'
                ],
                instructions: [
                    'Soak noodles in warm water until soft. Drain.',
                    'Sauté garlic and onion in oil.',
                    'Add vegetables and mushrooms, stir-fry.',
                    'Add soy sauce and a little water.',
                    'Toss in noodles until fully coated.',
                    'Garnish with calamansi.'
                ]
            },
            'vegan-falafel': {
                id: 'vegan-falafel',
                title: 'Vegan Falafel',
                category: 'mediterranean',
                image: './images/stories/Recipes/All Cuisines/Vegan Falafel.png',
                prepTime: '30 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '320 kcal',
                description: 'Crispy chickpea fritters seasoned with herbs and spices, served with pita and tahini sauce.',
                ingredients: [
                    '2 cups chickpeas (soaked overnight)',
                    '1 onion (chopped)',
                    '4 cloves garlic',
                    '1 cup parsley',
                    '1 cup cilantro',
                    '2 tsp cumin',
                    '1 tsp coriander',
                    '1 tsp salt, 1/2 tsp pepper',
                    '2 tbsp flour',
                    'Oil for frying'
                ],
                instructions: [
                    'Blend chickpeas, onion, garlic, parsley, cilantro, and spices.',
                    'Mix in flour until dough-like.',
                    'Shape into balls, fry until golden.',
                    'Serve with pita and tahini sauce.'
                ]
            },
            'hummus': {
                id: 'hummus',
                title: 'Hummus (Classic Chickpea Dip)',
                category: 'mediterranean',
                image: './images/stories/Recipes/All Cuisines/Hummus (Classic Chickpea Dip).jpg',
                prepTime: '15 minutes',
                servings: '6 servings',
                difficulty: 'Easy',
                calories: '180 kcal',
                description: 'Creamy chickpea dip with tahini, lemon juice, and garlic.',
                ingredients: [
                    '2 cups chickpeas (cooked)',
                    '1/4 cup tahini',
                    '2 tbsp lemon juice',
                    '2 garlic cloves',
                    '3 tbsp olive oil',
                    'Salt to taste'
                ],
                instructions: [
                    'Blend chickpeas, tahini, lemon juice, and garlic.',
                    'Add olive oil and salt. Blend smooth.',
                    'Serve with pita bread or veggies.'
                ]
            },
            'baba-ganoush': {
                id: 'baba-ganoush',
                title: 'Baba Ganoush (Eggplant Dip)',
                category: 'mediterranean',
                image: './images/stories/Recipes/All Cuisines/Baba Ganoush (Eggplant Dip).jpg',
                prepTime: '45 minutes',
                servings: '6 servings',
                difficulty: 'Medium',
                calories: '120 kcal',
                description: 'Smoky roasted eggplant dip with tahini and lemon.',
                ingredients: [
                    '2 large eggplants',
                    '2 tbsp tahini',
                    '2 tbsp lemon juice',
                    '2 garlic cloves',
                    '2 tbsp olive oil',
                    'Salt & paprika'
                ],
                instructions: [
                    'Roast eggplants until soft, peel skin.',
                    'Blend flesh with tahini, lemon juice, garlic, olive oil.',
                    'Garnish with paprika and parsley.'
                ]
            },
            'vegan-tabbouleh': {
                id: 'vegan-tabbouleh',
                title: 'Vegan Tabbouleh',
                category: 'mediterranean',
                image: './images/stories/Recipes/All Cuisines/Vegan Tabbouleh.jpeg',
                prepTime: '20 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '150 kcal',
                description: 'Fresh parsley salad with bulgur wheat, tomatoes, and lemon dressing.',
                ingredients: [
                    '1 cup bulgur wheat',
                    '2 cups parsley (finely chopped)',
                    '1/2 cup mint (chopped)',
                    '2 tomatoes (diced)',
                    '1 cucumber (diced)',
                    '1/4 cup olive oil',
                    '2 tbsp lemon juice',
                    'Salt & pepper'
                ],
                instructions: [
                    'Soak bulgur in hot water until soft.',
                    'Mix with parsley, mint, tomato, cucumber.',
                    'Add olive oil, lemon, salt, pepper.'
                ]
            },
            'vegan-stuffed-grape-leaves': {
                id: 'vegan-stuffed-grape-leaves',
                title: 'Vegan Stuffed Grape Leaves (Dolmas)',
                category: 'mediterranean',
                image: './images/stories/Recipes/All Cuisines/Vegan Stuffed Grape Leaves.jpg',
                prepTime: '60 minutes',
                servings: '6 servings',
                difficulty: 'Hard',
                calories: '200 kcal',
                description: 'Grape leaves stuffed with herbed rice and steamed to perfection.',
                ingredients: [
                    '20 grape leaves (jarred)',
                    '1 cup rice (cooked halfway)',
                    '1 onion (finely chopped)',
                    '1/4 cup parsley',
                    '1/4 cup mint',
                    '2 tbsp olive oil',
                    '2 tbsp lemon juice',
                    'Salt & pepper'
                ],
                instructions: [
                    'Mix rice, onion, parsley, mint, oil, lemon, salt, pepper.',
                    'Place filling in grape leaves, roll tightly.',
                    'Steam in pot with a little water & lemon until cooked.'
                ]
            },
            'vegan-ratatouille': {
                id: 'vegan-ratatouille',
                title: 'Vegan Ratatouille (French Provençal Stew)',
                category: 'mediterranean',
                image: './images/stories/Recipes/All Cuisines/Vegan Ratatouille (French Provençal Stew).webp',
                prepTime: '45 minutes',
                servings: '6 servings',
                difficulty: 'Medium',
                calories: '180 kcal',
                description: 'Traditional French vegetable stew with eggplant, zucchini, and herbs.',
                ingredients: [
                    '1 zucchini (sliced)',
                    '1 eggplant (sliced)',
                    '1 bell pepper (sliced)',
                    '1 onion (chopped)',
                    '3 tomatoes (diced)',
                    '2 garlic cloves',
                    '3 tbsp olive oil',
                    'Herbs de Provence or thyme'
                ],
                instructions: [
                    'Sauté onion & garlic in olive oil.',
                    'Add eggplant, zucchini, peppers, tomatoes.',
                    'Season with herbs, simmer until soft.'
                ]
            },
            'vegan-greek-salad': {
                id: 'vegan-greek-salad',
                title: 'Vegan Greek Salad',
                category: 'mediterranean',
                image: './images/stories/Recipes/All Cuisines/Vegan Greek Salad.jpg',
                prepTime: '15 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '220 kcal',
                description: 'Fresh Mediterranean salad with vegan feta, olives, and oregano.',
                ingredients: [
                    '2 cucumbers (chopped)',
                    '3 tomatoes (chopped)',
                    '1 red onion (sliced)',
                    '1/2 cup kalamata olives',
                    '1 block vegan feta (cubed)',
                    '2 tbsp olive oil',
                    '1 tbsp lemon juice',
                    'Oregano'
                ],
                instructions: [
                    'Mix cucumbers, tomatoes, onion, olives.',
                    'Add vegan feta, olive oil, lemon, oregano.',
                    'Toss and serve.'
                ]
            },
            'vegan-spanakopita': {
                id: 'vegan-spanakopita',
                title: 'Vegan Spanakopita (Spinach Pie)',
                category: 'mediterranean',
                image: './images/stories/Recipes/All Cuisines/Vegan Spanakopita.jpg',
                prepTime: '60 minutes',
                servings: '8 servings',
                difficulty: 'Hard',
                calories: '280 kcal',
                description: 'Flaky phyllo pastry filled with seasoned spinach and tofu.',
                ingredients: [
                    '1 pack phyllo pastry',
                    '2 cups spinach (chopped)',
                    '1 onion (chopped)',
                    '2 garlic cloves',
                    '1 block tofu (crumbled)',
                    '2 tbsp olive oil',
                    'Dill, salt, pepper'
                ],
                instructions: [
                    'Sauté onion, garlic, spinach. Mix with tofu and dill.',
                    'Layer phyllo pastry with olive oil, add filling.',
                    'Bake at 180°C (350°F) until golden.'
                ]
            },
            'vegan-pita-bread-with-olive-tapenade': {
                id: 'vegan-pita-bread-with-olive-tapenade',
                title: 'Vegan Pita Bread with Olive Tapenade',
                category: 'mediterranean',
                image: './images/stories/Recipes/All Cuisines/Vegan Pita Bread with Olive Tapenade.jpg',
                prepTime: '20 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '240 kcal',
                description: 'Fresh pita bread served with rich olive tapenade spread.',
                ingredients: [
                    '1 cup black olives',
                    '2 tbsp olive oil',
                    '1 garlic clove',
                    '1 tbsp lemon juice',
                    '1 tbsp capers'
                ],
                instructions: [
                    'Blend all tapenade ingredients.',
                    'Serve with freshly baked pita.'
                ]
            },
            'vegan-fattoush-salad': {
                id: 'vegan-fattoush-salad',
                title: 'Vegan Fattoush Salad',
                category: 'mediterranean',
                image: './images/stories/Recipes/All Cuisines/Vegan Fattoush Salad.jpeg',
                prepTime: '20 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '180 kcal',
                description: 'Lebanese mixed salad with toasted pita and sumac dressing.',
                ingredients: [
                    '2 cups lettuce',
                    '1 cucumber',
                    '2 tomatoes',
                    '1/2 onion',
                    '1 pita bread (toasted, broken into pieces)',
                    '2 tbsp olive oil',
                    '1 tbsp lemon juice',
                    'Sumac powder'
                ],
                instructions: [
                    'Mix veggies and toasted pita.',
                    'Add olive oil, lemon juice, sumac.'
                ]
            },
            'mujadara': {
                id: 'mujadara',
                title: 'Mujadara (Lentils & Rice with Caramelized Onions)',
                category: 'mediterranean',
                image: './images/stories/Recipes/All Cuisines/Mujadara (Lentils & Rice with Caramelized Onions).jpg',
                prepTime: '45 minutes',
                servings: '6 servings',
                difficulty: 'Medium',
                calories: '320 kcal',
                description: 'Comforting Middle Eastern dish with lentils, rice, and caramelized onions.',
                ingredients: [
                    '1 cup brown lentils',
                    '1 cup rice',
                    '3 onions (sliced)',
                    '4 tbsp olive oil',
                    'Salt & pepper'
                ],
                instructions: [
                    'Cook lentils until tender.',
                    'Cook rice separately.',
                    'Caramelize onions in olive oil.',
                    'Mix lentils, rice, and onions.'
                ]
            },
            'vegan-shawarma': {
                id: 'vegan-shawarma',
                title: 'Vegan Shawarma (Chickpea Style)',
                category: 'mediterranean',
                image: './images/stories/Recipes/All Cuisines/Vegan Shawarma (Chickpea Style).webp',
                prepTime: '30 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '380 kcal',
                description: 'Spiced chickpeas served in pita with fresh vegetables and tahini.',
                ingredients: [
                    '2 cups chickpeas (cooked)',
                    '2 tbsp olive oil',
                    '1 tsp cumin, paprika, coriander, turmeric',
                    '1 garlic clove',
                    'Pita bread, veggies, tahini sauce'
                ],
                instructions: [
                    'Roast chickpeas with olive oil & spices.',
                    'Serve in pita with salad and tahini sauce.'
                ]
            },
            'vegan-paella': {
                id: 'vegan-paella',
                title: 'Vegan Paella (Spanish Rice Dish)',
                category: 'mediterranean',
                image: './images/stories/Recipes/All Cuisines/Vegan Paella (Spanish Rice Dish).jpg',
                prepTime: '45 minutes',
                servings: '6 servings',
                difficulty: 'Hard',
                calories: '350 kcal',
                description: 'Traditional Spanish rice dish with vegetables and aromatic saffron.',
                ingredients: [
                    '1 cup arborio or paella rice',
                    '1 onion, 2 garlic cloves',
                    '1 red bell pepper',
                    '1 zucchini',
                    '1 tomato',
                    '2 cups vegetable broth',
                    '1 tsp smoked paprika, saffron (optional)'
                ],
                instructions: [
                    'Sauté onion, garlic, peppers, zucchini.',
                    'Add rice, paprika, saffron, tomato.',
                    'Pour broth, simmer until rice cooked.'
                ]
            },
            'vegan-bruschetta': {
                id: 'vegan-bruschetta',
                title: 'Vegan Bruschetta',
                category: 'mediterranean',
                image: './images/stories/Recipes/All Cuisines/Vegan Bruschetta.jpg',
                prepTime: '15 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '160 kcal',
                description: 'Toasted bread topped with fresh tomato, garlic, and basil.',
                ingredients: [
                    '1 baguette (sliced)',
                    '2 tomatoes (diced)',
                    '2 garlic cloves',
                    '2 tbsp olive oil',
                    'Fresh basil',
                    'Salt & pepper'
                ],
                instructions: [
                    'Toast baguette slices.',
                    'Mix tomatoes, garlic, olive oil, basil.',
                    'Spoon onto bread, serve fresh.'
                ]
            },
            'vegan-roasted-vegetable-couscous': {
                id: 'vegan-roasted-vegetable-couscous',
                title: 'Vegan Roasted Vegetable Couscous',
                category: 'mediterranean',
                image: './images/stories/Recipes/All Cuisines/Vegan Roasted Vegetable Couscous.webp',
                prepTime: '40 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '280 kcal',
                description: 'Fluffy couscous with roasted Mediterranean vegetables and fresh herbs.',
                ingredients: [
                    '1 cup couscous',
                    '1 zucchini, 1 eggplant, 1 bell pepper (roasted)',
                    '1 onion (chopped)',
                    '3 tbsp olive oil',
                    '1 tbsp lemon juice',
                    'Fresh parsley'
                ],
                instructions: [
                    'Roast vegetables in olive oil.',
                    'Prepare couscous by steaming with hot water.',
                    'Mix couscous with veggies, lemon, parsley.'
                ]
            },
            'chana-masala': {
                id: 'chana-masala',
                title: 'Chana Masala (Chickpea Curry)',
                category: 'indian',
                image: './images/stories/Recipes/All Cuisines/Chana Masala (Chickpea Curry).jpg',
                prepTime: '30 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '320 kcal',
                description: 'Spicy and aromatic chickpea curry with traditional Indian spices.',
                ingredients: [
                    '2 cups chickpeas (cooked)',
                    '2 onions (chopped)',
                    '2 tomatoes (pureed)',
                    '2 garlic cloves (minced)',
                    '1 tsp ginger (grated)',
                    '1 tsp cumin, 1 tsp coriander, 1 tsp garam masala',
                    '1 tsp chili powder, salt',
                    '2 tbsp oil'
                ],
                instructions: [
                    'Heat oil, sauté onion, garlic, ginger.',
                    'Add spices, then tomato puree. Cook until thick.',
                    'Add chickpeas + 1 cup water. Simmer 15 min.',
                    'Garnish with cilantro.'
                ]
            },
            'aloo-gobi': {
                id: 'aloo-gobi',
                title: 'Aloo Gobi (Potato & Cauliflower Curry)',
                category: 'indian',
                image: './images/stories/Recipes/All Cuisines/Aloo Gobi (Potato & Cauliflower Curry).jpg',
                prepTime: '25 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '180 kcal',
                description: 'Classic Indian potato and cauliflower curry with turmeric and spices.',
                ingredients: [
                    '2 potatoes (cubed)',
                    '1 cauliflower (florets)',
                    '1 onion (chopped)',
                    '2 tomatoes (chopped)',
                    '2 tsp turmeric, cumin, coriander',
                    '2 tbsp oil, salt'
                ],
                instructions: [
                    'Sauté onion in oil. Add spices.',
                    'Add potatoes, cauliflower, tomatoes.',
                    'Cover & cook until tender.'
                ]
            },
            'baingan-bharta': {
                id: 'baingan-bharta',
                title: 'Baingan Bharta (Smoky Mashed Eggplant)',
                category: 'indian',
                image: './images/stories/Recipes/All Cuisines/Baingan Bharta (Smoky Mashed Eggplant).jpg',
                prepTime: '40 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '150 kcal',
                description: 'Smoky roasted eggplant mash with onions, tomatoes, and spices.',
                ingredients: [
                    '2 eggplants',
                    '2 onions (chopped)',
                    '2 tomatoes (chopped)',
                    '2 garlic cloves',
                    '1 tsp cumin, chili powder, turmeric',
                    '2 tbsp oil'
                ],
                instructions: [
                    'Roast eggplants until charred, peel skin.',
                    'Mash flesh.',
                    'Sauté onion, garlic, spices. Add tomato.',
                    'Stir in mashed eggplant. Cook 10 min.'
                ]
            },
            'tofu-paneer-butter-masala': {
                id: 'tofu-paneer-butter-masala',
                title: 'Tofu "Paneer" Butter Masala',
                category: 'indian',
                image: './images/stories/Recipes/All Cuisines/Tofu "Paneer" Butter Masala.jpg',
                prepTime: '35 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '380 kcal',
                description: 'Creamy tomato-based curry with marinated tofu in rich butter masala sauce.',
                ingredients: [
                    '1 block tofu (cubed, pan-fried)',
                    '2 onions (pureed)',
                    '2 tomatoes (pureed)',
                    '1 tsp ginger-garlic paste',
                    '1 tsp cumin, garam masala',
                    '1/2 cup coconut cream',
                    '2 tbsp oil'
                ],
                instructions: [
                    'Fry tofu until golden.',
                    'Cook onion & ginger-garlic paste in oil.',
                    'Add spices & tomato puree.',
                    'Stir in tofu & coconut cream.'
                ]
            },
            'vegan-biryani': {
                id: 'vegan-biryani',
                title: 'Vegan Biryani',
                category: 'indian',
                image: './images/stories/Recipes/All Cuisines/Vegan Biryani.webp',
                prepTime: '60 minutes',
                servings: '6 servings',
                difficulty: 'Hard',
                calories: '420 kcal',
                description: 'Fragrant basmati rice layered with vegetables and aromatic spices.',
                ingredients: [
                    '2 cups basmati rice',
                    '1 carrot, 1 potato, 1 cup cauliflower, 1 cup peas',
                    '1 onion (sliced)',
                    '2 cloves garlic, 1 tsp ginger',
                    '1 tsp cumin, cardamom, cinnamon, garam masala',
                    '3 tbsp oil'
                ],
                instructions: [
                    'Fry onion until golden.',
                    'Add garlic, ginger, spices.',
                    'Add vegetables. Cook 5 min.',
                    'Add soaked rice + 4 cups water. Cover, cook until rice done.'
                ]
            },
            'masoor-dal': {
                id: 'masoor-dal',
                title: 'Masoor Dal (Red Lentil Curry)',
                category: 'indian',
                image: '/images/stories/Recipes/All Cuisines/Masoor Dal (Red Lentil Curry).jpg',
                prepTime: '25 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '220 kcal',
                description: 'Comforting red lentil curry with turmeric, cumin, and fresh herbs.',
                ingredients: [
                    '1 cup red lentils',
                    '1 onion, 1 tomato',
                    '1 garlic clove, 1 tsp ginger',
                    '1 tsp turmeric, cumin, chili powder',
                    '3 cups water, salt'
                ],
                instructions: [
                    'Boil lentils with turmeric until soft.',
                    'In oil, sauté onion, garlic, ginger, spices.',
                    'Add tomato. Stir into lentils.'
                ]
            },
            'tofu-tikka-masala': {
                id: 'tofu-tikka-masala',
                title: 'Tofu Tikka Masala',
                category: 'indian',
                image: '/images/stories/Recipes/All Cuisines/Tofu Tikka Masala.jpg',
                prepTime: '40 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '350 kcal',
                description: 'Marinated tofu in creamy tomato-based tikka masala sauce.',
                ingredients: [
                    '1 block tofu (cubed, baked)',
                    '2 onions',
                    '2 tomatoes',
                    '1 tsp cumin, coriander, garam masala',
                    '1/2 cup coconut milk',
                    '2 tbsp oil'
                ],
                instructions: [
                    'Marinate tofu in spices, bake.',
                    'Make sauce with onion, tomato, spices.',
                    'Add coconut milk. Stir tofu in.'
                ]
            },
            'vegetable-samosas': {
                id: 'vegetable-samosas',
                title: 'Vegetable Samosas',
                category: 'indian',
                image: '/images/stories/Recipes/All Cuisines/Vegetable Samosas.jpg',
                prepTime: '45 minutes',
                servings: '6 servings',
                difficulty: 'Medium',
                calories: '180 kcal',
                description: 'Crispy pastry triangles filled with spiced potatoes and peas.',
                ingredients: [
                    '2 potatoes (boiled, mashed)',
                    '1/2 cup peas',
                    '1 onion (chopped)',
                    '1 tsp cumin, coriander, chili powder',
                    'Salt, oil',
                    'Spring roll sheets or homemade dough'
                ],
                instructions: [
                    'Make filling by sautéing onion, spices, potatoes, peas.',
                    'Fill wrappers, fold into triangles.',
                    'Fry until golden.'
                ]
            },
            'vegan-palak-tofu': {
                id: 'vegan-palak-tofu',
                title: 'Vegan Palak Tofu (Spinach Curry)',
                category: 'indian',
                image: '/images/stories/Recipes/All Cuisines/Vegan Palak Tofu (Spinach Curry).jpg',
                prepTime: '30 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '280 kcal',
                description: 'Creamy spinach curry with cubes of marinated tofu.',
                ingredients: [
                    '1 block tofu (cubed, pan-fried)',
                    '4 cups spinach (blanched & blended)',
                    '1 onion, 1 tomato',
                    '1 tsp ginger-garlic paste',
                    '1 tsp cumin, garam masala',
                    '2 tbsp oil'
                ],
                instructions: [
                    'Fry tofu, set aside.',
                    'Sauté onion, ginger-garlic, tomato, spices.',
                    'Add spinach puree, simmer.',
                    'Stir in tofu.'
                ]
            },
            'vegan-malai-kofta': {
                id: 'vegan-malai-kofta',
                title: 'Vegan Malai Kofta',
                category: 'indian',
                image: '/images/stories/Recipes/All Cuisines/Vegan Malai Kofta.jpg',
                prepTime: '45 minutes',
                servings: '4 servings',
                difficulty: 'Hard',
                calories: '320 kcal',
                description: 'Vegetable and cashew dumplings in rich creamy tomato sauce.',
                ingredients: [
                    '2 potatoes (boiled, mashed)',
                    '1/2 cup tofu (crumbled)',
                    '1/4 cup flour',
                    'Spices: cumin, chili powder',
                    'Tomato-onion curry sauce (same as butter masala base)'
                ],
                instructions: [
                    'Mix potato, tofu, flour, spices. Make balls, fry.',
                    'Make creamy tomato curry sauce.',
                    'Add kofta balls before serving.'
                ]
            },
            'vegetable-pakoras': {
                id: 'vegetable-pakoras',
                title: 'Vegetable Pakoras (Fritters)',
                category: 'indian',
                image: '/images/stories/Recipes/All Cuisines/Vegetable Pakoras (Fritters).jpg',
                prepTime: '20 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '150 kcal',
                description: 'Crispy chickpea flour fritters with mixed vegetables and spices.',
                ingredients: [
                    '1 cup chickpea flour (besan)',
                    '1 cup mixed veggies (onion, potato, spinach)',
                    '1 tsp turmeric, chili powder, cumin',
                    'Salt, water',
                    'Oil for frying'
                ],
                instructions: [
                    'Mix flour, water, spices to make thick batter.',
                    'Dip vegetables, fry until golden.'
                ]
            },
            'vegan-korma': {
                id: 'vegan-korma',
                title: 'Vegan Korma (Creamy Curry)',
                category: 'indian',
                image: '/images/stories/Recipes/All Cuisines/Vegan Korma (Creamy Curry).jpg',
                prepTime: '35 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '290 kcal',
                description: 'Rich and creamy vegetable curry with cashew cream and aromatic spices.',
                ingredients: [
                    '1 cup mixed vegetables (carrot, peas, beans)',
                    '1 onion, 1 tomato',
                    '1/2 cup cashews (blended into cream)',
                    '1 tsp cumin, coriander, turmeric, garam masala',
                    '2 tbsp oil'
                ],
                instructions: [
                    'Fry onion, garlic, spices.',
                    'Add vegetables + tomato.',
                    'Stir in cashew cream. Simmer until thick.'
                ]
            },
            'tamarind-rice': {
                id: 'tamarind-rice',
                title: 'Tamarind Rice (Puliyodarai)',
                category: 'indian',
                image: '/images/stories/Recipes/All Cuisines/Tamarind Rice (Puliyodarai).jpg',
                prepTime: '15 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '250 kcal',
                description: 'Tangy South Indian rice dish with tamarind, peanuts, and aromatic spices.',
                ingredients: [
                    '2 cups cooked rice',
                    '2 tbsp tamarind paste',
                    '2 tbsp peanuts',
                    '1 tsp mustard seeds, curry leaves',
                    '2 dried chilies',
                    '2 tbsp oil'
                ],
                instructions: [
                    'Heat oil, fry peanuts, mustard seeds, curry leaves, chilies.',
                    'Stir in tamarind paste.',
                    'Mix with rice.'
                ]
            },
            'vegan-idli-coconut-chutney': {
                id: 'vegan-idli-coconut-chutney',
                title: 'Vegan Idli with Coconut Chutney',
                category: 'indian',
                image: '/images/stories/Recipes/All Cuisines/Vegan Idli with Coconut Chutney.webp',
                prepTime: '20 minutes (plus fermentation)',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '180 kcal',
                description: 'Soft steamed rice cakes served with fresh coconut chutney.',
                ingredients: [
                    '1 cup rice',
                    '1/2 cup urad dal',
                    'Salt',
                    '1 cup grated coconut',
                    '1 chili',
                    '1 tsp ginger',
                    '1 tbsp roasted chana dal'
                ],
                instructions: [
                    'Soak rice & dal overnight, grind into batter. Ferment 8 hrs.',
                    'Steam batter into idlis.',
                    'Blend chutney ingredients with water. Serve.'
                ]
            },
            'vegan-pani-puri': {
                id: 'vegan-pani-puri',
                title: 'Vegan Pani Puri (Gol Gappa)',
                category: 'indian',
                image: '/images/stories/Recipes/All Cuisines/Vegan Pani Puri (Gol Gappa).avif',
                prepTime: '45 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '200 kcal',
                description: 'Popular Indian street food with crispy puris, spiced water, and savory filling.',
                ingredients: [
                    '1 cup semolina (sooji)',
                    '1/4 cup all-purpose flour',
                    '1/4 tsp salt',
                    'Water (as needed)',
                    'Oil for frying',
                    '1 cup mint leaves',
                    '1/2 cup coriander leaves',
                    '2 green chilies',
                    '1-inch ginger',
                    '1 tsp roasted cumin powder',
                    '1 tbsp tamarind paste',
                    '4 cups cold water',
                    '1 cup boiled potatoes (mashed)',
                    '1/2 cup boiled chickpeas or moong beans',
                    '1/2 tsp chaat masala'
                ],
                instructions: [
                    'Make puris: Knead semolina, flour, salt, and water into stiff dough. Roll thin, cut small rounds, and deep-fry until puffed.',
                    'Make pani: Blend mint, coriander, green chilies, ginger, cumin, tamarind, and salt with water. Chill.',
                    'Make filling: Mix boiled potatoes, chickpeas, chaat masala, and salt.',
                    'Assemble: Crack top of puri, stuff with filling, pour spiced water, and eat immediately.'
                ]
            },
            'vegan-tacos-de-nopales': {
                id: 'vegan-tacos-de-nopales',
                title: 'Vegan Tacos de Nopales (Cactus Tacos)',
                category: 'mexican',
                image: '/images/stories/Recipes/All Cuisines/Vegan Tacos de Nopales (Cactus Tacos).jpg',
                prepTime: '20 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '180 kcal',
                description: 'Traditional Mexican tacos featuring tender cactus paddles with fresh vegetables.',
                ingredients: [
                    '2 cups nopales (cactus paddles), cleaned and sliced',
                    '1 onion, sliced',
                    '2 tomatoes, diced',
                    '2 cloves garlic, minced',
                    'Corn tortillas',
                    'Cilantro and lime to garnish'
                ],
                instructions: [
                    'Boil nopales until tender, drain, and rinse.',
                    'Sauté onion, garlic, and tomato, then add nopales.',
                    'Cook for 5 minutes, season with salt.',
                    'Serve in tortillas with cilantro and lime.'
                ]
            },
            'vegan-elote': {
                id: 'vegan-elote',
                title: 'Vegan Elote (Mexican Street Corn)',
                category: 'mexican',
                image: '/images/stories/Recipes/All Cuisines/Vegan Elote (Mexican Street Corn).jpg',
                prepTime: '15 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '220 kcal',
                description: 'Classic Mexican street corn with vegan mayo and spices.',
                ingredients: [
                    '4 corn cobs',
                    '3 tbsp vegan mayo',
                    '1 tbsp lime juice',
                    '1 tsp chili powder',
                    '2 tbsp vegan parmesan or nutritional yeast'
                ],
                instructions: [
                    'Grill or boil corn until tender.',
                    'Mix vegan mayo with lime juice.',
                    'Brush corn with mixture, sprinkle chili powder and vegan cheese.'
                ]
            },
            'vegan-chiles-rellenos': {
                id: 'vegan-chiles-rellenos',
                title: 'Vegan Chiles Rellenos',
                category: 'mexican',
                image: '/images/stories/Recipes/All Cuisines/Vegan Chiles Rellenos.jpg',
                prepTime: '45 minutes',
                servings: '4 servings',
                difficulty: 'Medium',
                calories: '280 kcal',
                description: 'Roasted poblano peppers stuffed with beans, rice, and vegetables.',
                ingredients: [
                    '4 poblano peppers, roasted and peeled',
                    '1 cup cooked black beans',
                    '1 cup rice',
                    '½ cup corn',
                    '1 cup tomato sauce',
                    '2 cloves garlic'
                ],
                instructions: [
                    'Slice and stuff poblanos with beans, rice, and corn.',
                    'Place in a baking dish, cover with tomato sauce.',
                    'Bake for 20 minutes at 180°C (350°F).'
                ]
             },
             'vegan-pozole-rojo': {
                 id: 'vegan-pozole-rojo',
                 title: 'Vegan Pozole Rojo',
                 category: 'mexican',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Pozole Rojo.jpg',
                 prepTime: '40 minutes',
                 servings: '6 servings',
                 difficulty: 'Medium',
                 calories: '250 kcal',
                 description: 'Traditional Mexican soup with hominy and vegetables in a rich red chili broth.',
                 ingredients: [
                     '2 cups hominy (cooked)',
                     '3 dried guajillo peppers',
                     '1 onion',
                     '3 cloves garlic',
                     '1 zucchini, chopped',
                     '1 can chickpeas'
                 ],
                 instructions: [
                     'Blend guajillo peppers, garlic, and onion into a sauce.',
                     'Add to pot with hominy, chickpeas, and zucchini.',
                     'Simmer 20 minutes, serve with cabbage, lime, and radish.'
                 ]
             },
             'vegan-tostadas': {
                 id: 'vegan-tostadas',
                 title: 'Vegan Tostadas',
                 category: 'mexican',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Tostadas.jpg',
                 prepTime: '15 minutes',
                 servings: '6 servings',
                 difficulty: 'Easy',
                 calories: '200 kcal',
                 description: 'Crispy corn tostadas topped with refried beans and fresh vegetables.',
                 ingredients: [
                     '6 corn tostadas',
                     '1 cup refried black beans (vegan)',
                     '1 cup shredded lettuce',
                     '½ avocado',
                     'Salsa and pickled onions'
                 ],
                 instructions: [
                     'Spread beans over tostadas.',
                     'Top with lettuce, avocado, and salsa.'
                 ]
             },
             'vegan-tamales': {
                 id: 'vegan-tamales',
                 title: 'Vegan Tamales',
                 category: 'mexican',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Tamales.jpg',
                 prepTime: '90 minutes',
                 servings: '8 servings',
                 difficulty: 'Hard',
                 calories: '320 kcal',
                 description: 'Traditional steamed corn masa filled with savory vegetables.',
                 ingredients: [
                     '2 cups masa harina',
                     '½ cup vegetable oil',
                     '1 tsp baking powder',
                     '1 ½ cups vegetable broth',
                     'Filling: sautéed mushrooms, zucchini, and salsa'
                 ],
                 instructions: [
                     'Mix masa with oil, broth, and baking powder.',
                     'Spread onto corn husks, fill with veggies.',
                     'Fold and steam 1 hour.'
                 ]
             },
             'vegan-sopa-de-tortilla': {
                 id: 'vegan-sopa-de-tortilla',
                 title: 'Vegan Sopa de Tortilla (Tortilla Soup)',
                 category: 'mexican',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Sopa de Tortilla (Tortilla Soup).jpg',
                 prepTime: '30 minutes',
                 servings: '4 servings',
                 difficulty: 'Medium',
                 calories: '180 kcal',
                 description: 'Hearty Mexican soup with crispy tortilla strips and fresh vegetables.',
                 ingredients: [
                     '6 corn tortillas, cut into strips',
                     '1 onion, diced',
                     '2 tomatoes, blended',
                     '1 chili pepper',
                     '4 cups vegetable broth',
                     'Avocado and cilantro'
                 ],
                 instructions: [
                     'Fry tortilla strips until crispy.',
                     'Cook onion, tomato, and chili, add broth.',
                     'Simmer, serve with tortilla strips and avocado.'
                 ]
             },
             'vegan-quesadillas-cashew-cheese': {
                 id: 'vegan-quesadillas-cashew-cheese',
                 title: 'Vegan Quesadillas with Cashew Cheese',
                 category: 'mexican',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Quesadillas with Cashew Cheese.jpg',
                 prepTime: '25 minutes',
                 servings: '4 servings',
                 difficulty: 'Medium',
                 calories: '280 kcal',
                 description: 'Crispy quesadillas filled with homemade cashew cheese and sautéed vegetables.',
                 ingredients: [
                     'Corn tortillas',
                     'Cashew cheese (blended soaked cashews, lemon juice, garlic, nutritional yeast)',
                     'Mushrooms and spinach sautéed'
                 ],
                 instructions: [
                     'Spread cashew cheese on tortillas.',
                     'Add mushrooms and spinach.',
                     'Cook until crispy.'
                 ]
             },
             'vegan-enchiladas-verdes': {
                 id: 'vegan-enchiladas-verdes',
                 title: 'Vegan Enchiladas Verdes',
                 category: 'mexican',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Enchiladas Verdes.jpg',
                 prepTime: '35 minutes',
                 servings: '4 servings',
                 difficulty: 'Medium',
                 calories: '260 kcal',
                 description: 'Corn tortillas filled with beans and corn, covered in green salsa.',
                 ingredients: [
                     '8 corn tortillas',
                     '2 cups salsa verde',
                     '1 cup black beans',
                     '½ cup corn',
                     'Cilantro to garnish'
                 ],
                 instructions: [
                     'Dip tortillas in salsa verde.',
                     'Fill with beans and corn, roll up.',
                     'Place in baking dish, cover with more salsa verde.',
                     'Bake 20 minutes.'
                 ]
             },
             'vegan-gorditas': {
                 id: 'vegan-gorditas',
                 title: 'Vegan Gorditas',
                 category: 'mexican',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Gorditas.jpg',
                 prepTime: '30 minutes',
                 servings: '6 servings',
                 difficulty: 'Medium',
                 calories: '240 kcal',
                 description: 'Thick corn masa cakes split and filled with refried beans and salsa.',
                 ingredients: [
                     '2 cups masa harina',
                     '1 ½ cups warm water',
                     '1 cup refried beans',
                     'Salsa and avocado'
                 ],
                 instructions: [
                     'Make dough with masa and water, shape into patties.',
                     'Cook on skillet, split open, fill with beans and salsa.'
                 ]
             },
             'vegan-flautas': {
                 id: 'vegan-flautas',
                 title: 'Vegan Flautas',
                 category: 'mexican',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Flautas.jpg',
                 prepTime: '25 minutes',
                 servings: '6 servings',
                 difficulty: 'Easy',
                 calories: '220 kcal',
                 description: 'Crispy rolled tortillas filled with seasoned mashed potatoes.',
                 ingredients: [
                     '6 corn tortillas',
                     '1 cup mashed potatoes',
                     'Salsa and guacamole'
                 ],
                 instructions: [
                     'Fill tortillas with mashed potatoes.',
                     'Roll tightly, fry until golden.',
                     'Serve with salsa and guacamole.'
                 ]
             },
             'vegan-mexican-rice': {
                 id: 'vegan-mexican-rice',
                 title: 'Vegan Mexican Rice',
                 category: 'mexican',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Mexican Rice.jpg',
                 prepTime: '25 minutes',
                 servings: '4 servings',
                 difficulty: 'Easy',
                 calories: '190 kcal',
                 description: 'Flavorful Mexican-style rice with tomatoes and spices.',
                 ingredients: [
                     '1 cup long-grain rice',
                     '1 onion',
                     '1 tomato, blended',
                     '2 cups vegetable broth',
                     '1 tsp cumin'
                 ],
                 instructions: [
                     'Sauté rice in oil until golden.',
                     'Add tomato, onion, cumin, and broth.',
                     'Simmer until rice is fluffy.'
                 ]
             },
             'vegan-churros': {
                 id: 'vegan-churros',
                 title: 'Vegan Churros',
                 category: 'mexican',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Churros.jpg',
                 prepTime: '30 minutes',
                 servings: '6 servings',
                 difficulty: 'Medium',
                 calories: '160 kcal',
                 description: 'Crispy fried dough pastries rolled in cinnamon sugar.',
                 ingredients: [
                     '1 cup flour',
                     '1 cup water',
                     '2 tbsp sugar',
                     '1 tbsp coconut oil',
                     'Cinnamon + sugar mix for coating'
                 ],
                 instructions: [
                     'Boil water, sugar, and oil. Add flour to make dough.',
                     'Pipe strips into hot oil, fry until golden.',
                     'Roll in cinnamon sugar.'
                 ]
             },
             'vegan-esquites': {
                 id: 'vegan-esquites',
                 title: 'Vegan Esquites (Corn in a Cup)',
                 category: 'mexican',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Esquites (Corn in a Cup).jpg',
                 prepTime: '15 minutes',
                 servings: '4 servings',
                 difficulty: 'Easy',
                 calories: '140 kcal',
                 description: 'Mexican street corn served in a cup with vegan mayo and spices.',
                 ingredients: [
                     '2 cups corn kernels',
                     '2 tbsp vegan mayo',
                     '1 tbsp lime juice',
                     '1 tsp chili powder',
                     'Vegan cheese'
                 ],
                 instructions: [
                     'Cook corn in salted water.',
                     'Mix with vegan mayo, lime, and chili powder.',
                     'Top with vegan cheese.'
                 ]
             },
             'vegan-mole-poblano-tofu': {
                 id: 'vegan-mole-poblano-tofu',
                 title: 'Vegan Mole Poblano with Tofu',
                 category: 'mexican',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Mole Poblano with Tofu.jpeg',
                 prepTime: '45 minutes',
                 servings: '4 servings',
                 difficulty: 'Hard',
                 calories: '320 kcal',
                 description: 'Rich and complex Mexican sauce with chocolate and chilies served over tofu.',
                 ingredients: [
                     '2 dried ancho chilies',
                     '2 dried pasilla chilies',
                     '1 onion, garlic',
                     '2 tbsp cocoa powder',
                     '1 tbsp peanut butter',
                     '1 block tofu, cubed'
                 ],
                 instructions: [
                     'Blend chilies, onion, garlic, cocoa, and peanut butter into sauce.',
                     'Simmer sauce 15 minutes.',
                     'Add tofu, cook until coated.'
                 ]
             },
             
             // American Vegan Recipes
             'bbq-jackfruit-sandwich': {
                title: 'BBQ Jackfruit Sandwich',
                category: 'american',
                image: '../../images/stories/Recipes/All Cuisines/BBQ Jackfruit Sandwich.jpg',
                duration: '30 mins',
                difficulty: 'Medium',
                rating: 4.9,
                description: 'Pulled jackfruit in tangy BBQ sauce served on a toasted bun.',
                ingredients: [
                    '2 cans young jackfruit (brined)',
                    '1 cup vegan BBQ sauce',
                    '4 burger buns',
                    'Coleslaw (optional, vegan mayo-based)'
                ],
                instructions: [
                    'Rinse jackfruit, shred with a fork.',
                    'Cook in a skillet with BBQ sauce until tender.',
                    'Serve on buns with coleslaw.'
                ]
            },
            'sweet-potato-black-bean-burgers': {
                title: 'Sweet Potato Black Bean Burgers',
                category: 'american',
                image: '../../images/stories/Recipes/All Cuisines/Sweet Potato Black Bean Burgers.jpg',
                duration: '35 mins',
                difficulty: 'Medium',
                rating: 4.8,
                description: 'Nutritious and flavorful burgers with sweet potato and black beans.',
                ingredients: [
                    '1 large sweet potato (roasted & mashed)',
                    '1 can black beans (mashed)',
                    '½ cup oats',
                    '1 tsp smoked paprika',
                    'Salt & pepper',
                    'Burger buns'
                ],
                instructions: [
                    'Mix sweet potato, beans, oats, paprika, salt, and pepper.',
                    'Shape into patties.',
                    'Pan-fry until golden. Serve on buns.'
                ]
            },
            'vegan-mac-and-cheese': {
                 id: 'vegan-mac-and-cheese',
                 title: 'Vegan Mac and Cheese',
                 category: 'american',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Mac and Cheese.jpg',
                 prepTime: '25 minutes',
                 servings: '4 servings',
                 difficulty: 'Easy',
                 calories: '380 kcal',
                 description: 'Creamy and cheesy pasta made with cashew-based cheese sauce.',
                 ingredients: [
                     '8 oz elbow macaroni',
                     '1 cup cashews (soaked)',
                     '1 cup unsweetened plant milk',
                     '1 tbsp nutritional yeast',
                     '1 tbsp lemon juice',
                     '1 tsp garlic powder',
                     'Salt & pepper to taste'
                 ],
                 instructions: [
                     'Cook macaroni according to package directions.',
                     'Blend cashews, milk, nutritional yeast, lemon juice, garlic powder, salt, and pepper until creamy.',
                     'Heat sauce in a pan, add macaroni, and stir well.'
                 ]
             },
             
             'bbq-jackfruit-sandwich': {
                 id: 'bbq-jackfruit-sandwich',
                 title: 'BBQ Jackfruit Sandwich',
                 category: 'american',
                 image: '/images/stories/Recipes/All Cuisines/BBQ Jackfruit Sandwich.jpg',
                 prepTime: '30 minutes',
                 servings: '4 servings',
                 difficulty: 'Medium',
                 calories: '320 kcal',
                 description: 'Pulled jackfruit in tangy BBQ sauce served on a toasted bun.',
                 ingredients: [
                     '2 cans young jackfruit (brined)',
                     '1 cup vegan BBQ sauce',
                     '4 burger buns',
                     'Coleslaw (optional, vegan mayo-based)'
                 ],
                 instructions: [
                     'Rinse jackfruit, shred with a fork.',
                     'Cook in a skillet with BBQ sauce until tender.',
                     'Serve on buns with coleslaw.'
                 ]
             },
             
             'vegan-chili': {
                 id: 'vegan-chili',
                 title: 'Vegan Chili',
                 category: 'american',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Chili 19.17.56.jpg',
                 prepTime: '45 minutes',
                 servings: '6 servings',
                 difficulty: 'Easy',
                 calories: '280 kcal',
                 description: 'Hearty and warming chili with beans, vegetables, and spices.',
                 ingredients: [
                     '1 onion (diced)',
                     '2 cloves garlic (minced)',
                     '1 bell pepper (chopped)',
                     '2 cans kidney beans',
                     '1 can black beans',
                     '2 cans diced tomatoes',
                     '2 tbsp chili powder',
                     '1 tsp cumin',
                     'Salt & pepper'
                 ],
                 instructions: [
                     'Sauté onion, garlic, and bell pepper.',
                     'Add beans, tomatoes, chili powder, cumin.',
                     'Simmer 30 minutes. Serve hot.'
                 ]
             },
             
             'sweet-potato-black-bean-burgers': {
                 id: 'sweet-potato-black-bean-burgers',
                 title: 'Sweet Potato Black Bean Burgers',
                 category: 'american',
                 image: '/images/stories/Recipes/All Cuisines/Sweet Potato Black Bean Burgers.jpg',
                 prepTime: '35 minutes',
                 servings: '4 servings',
                 difficulty: 'Medium',
                 calories: '350 kcal',
                 description: 'Nutritious and flavorful burgers with sweet potato and black beans.',
                 ingredients: [
                     '1 large sweet potato (roasted & mashed)',
                     '1 can black beans (mashed)',
                     '½ cup oats',
                     '1 tsp smoked paprika',
                     'Salt & pepper',
                     'Burger buns'
                 ],
                 instructions: [
                     'Mix sweet potato, beans, oats, paprika, salt, and pepper.',
                     'Shape into patties.',
                     'Pan-fry until golden. Serve on buns.'
                 ]
             },
             
             'vegan-cornbread': {
                 id: 'vegan-cornbread',
                 title: 'Vegan Cornbread',
                 category: 'american',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Cornbread.jpg',
                 prepTime: '30 minutes',
                 servings: '8 servings',
                 difficulty: 'Easy',
                 calories: '220 kcal',
                 description: 'Moist and slightly sweet cornbread perfect as a side dish.',
                 ingredients: [
                     '1 cup cornmeal',
                     '1 cup flour',
                     '1 cup plant milk',
                     '⅓ cup maple syrup',
                     '2 tbsp oil',
                     '1 tbsp baking powder'
                 ],
                 instructions: [
                     'Mix dry and wet ingredients separately.',
                     'Combine, pour into a greased pan.',
                     'Bake at 180°C (350°F) for 25–30 min.'
                 ]
             },
             
             'vegan-creamy-garlic-pasta': {
                 id: 'vegan-creamy-garlic-pasta',
                 title: 'Vegan Creamy Garlic Pasta',
                 category: 'american',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Creamy Garlic Pasta.jpg',
                 prepTime: '20 minutes',
                 servings: '4 servings',
                 difficulty: 'Easy',
                 calories: '420 kcal',
                 description: 'Rich and creamy pasta with roasted garlic and herbs.',
                 ingredients: [
                     '8 oz spaghetti or your favorite pasta',
                     '1 cup unsweetened plant milk (almond, oat, soy)',
                     '3 cloves garlic, minced',
                     '2 tbsp olive oil',
                     '2 tbsp nutritional yeast',
                     '1 tbsp flour (or cornstarch for thickening)',
                     '1 tsp lemon juice',
                     'Salt & black pepper, to taste',
                     'Fresh parsley, chopped, for garnish'
                 ],
                 instructions: [
                     'Cook pasta according to package directions, drain and set aside.',
                     'In a pan, heat olive oil over medium heat and sauté garlic until fragrant (1–2 minutes).',
                     'Sprinkle in flour, stir to form a roux.',
                     'Slowly whisk in plant milk, bring to a gentle simmer.',
                     'Stir in nutritional yeast, lemon juice, salt, and pepper. Cook until the sauce thickens.',
                     'Toss pasta in the sauce until evenly coated.',
                     'Garnish with chopped parsley and serve hot.'
                 ]
             },
             
             'vegan-sloppy-joes': {
                 id: 'vegan-sloppy-joes',
                 title: 'Vegan Sloppy Joes',
                 category: 'american',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Sloppy Joes.jpg',
                 prepTime: '25 minutes',
                 servings: '4 servings',
                 difficulty: 'Easy',
                 calories: '290 kcal',
                 description: 'Classic comfort food with lentils in tangy tomato sauce.',
                 ingredients: [
                     '1 cup lentils (cooked)',
                     '1 onion (diced)',
                     '1 bell pepper (diced)',
                     '1 cup tomato sauce',
                     '1 tbsp soy sauce',
                     '1 tsp smoked paprika',
                     'Burger buns'
                 ],
                 instructions: [
                     'Sauté onion and pepper.',
                     'Add lentils, tomato sauce, soy sauce, paprika.',
                     'Simmer 10 min, serve on buns.'
                 ]
             },
             
             'vegan-buffalo-cauliflower-wings': {
                 id: 'vegan-buffalo-cauliflower-wings',
                 title: 'Vegan Buffalo Cauliflower Wings',
                 category: 'american',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Buffalo Cauliflower Wings.webp',
                 prepTime: '35 minutes',
                 servings: '4 servings',
                 difficulty: 'Medium',
                 calories: '180 kcal',
                 description: 'Spicy and crispy cauliflower wings with buffalo sauce.',
                 ingredients: [
                     '1 cauliflower head (cut florets)',
                     '1 cup flour',
                     '1 cup water',
                     '1 cup buffalo hot sauce'
                 ],
                 instructions: [
                     'Dip florets in flour-water batter, bake at 200°C (400°F) for 20 min.',
                     'Toss in hot sauce, bake 10 more min.'
                 ]
             },
             
             'vegan-mashed-potatoes': {
                 id: 'vegan-mashed-potatoes',
                 title: 'Vegan Mashed Potatoes',
                 category: 'american',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Mashed Potatoes.jpg',
                 prepTime: '25 minutes',
                 servings: '6 servings',
                 difficulty: 'Easy',
                 calories: '160 kcal',
                 description: 'Creamy and buttery mashed potatoes made with plant-based milk.',
                 ingredients: [
                     '4 large potatoes (peeled, boiled)',
                     '½ cup unsweetened plant milk',
                     '2 tbsp vegan butter',
                     'Salt & pepper'
                 ],
                 instructions: [
                     'Mash potatoes with plant milk and butter.',
                     'Season with salt & pepper.'
                 ]
             },
             
             'vegan-gravy': {
                 id: 'vegan-gravy',
                 title: 'Vegan Gravy',
                 category: 'american',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Gravy.jpg',
                 prepTime: '15 minutes',
                 servings: '4 servings',
                 difficulty: 'Easy',
                 calories: '45 kcal',
                 description: 'Rich and savory gravy perfect for mashed potatoes and roasts.',
                 ingredients: [
                     '2 tbsp olive oil',
                     '2 tbsp flour',
                     '2 cups veggie broth',
                     '1 tbsp soy sauce',
                     '½ tsp garlic powder'
                 ],
                 instructions: [
                     'Heat oil, whisk in flour.',
                     'Slowly add broth, soy sauce, garlic powder.',
                     'Simmer until thick.'
                 ]
             },
             
             'vegan-gumbo': {
                 id: 'vegan-gumbo',
                 title: 'Vegan Gumbo',
                 category: 'american',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Gumbo.jpg',
                 prepTime: '60 minutes',
                 servings: '6 servings',
                 difficulty: 'Hard',
                 calories: '250 kcal',
                 description: 'Louisiana-style stew with okra, vegetables, and Creole spices.',
                 ingredients: [
                     '1 onion, celery, green pepper (diced)',
                     '2 tbsp flour',
                     '2 tbsp oil',
                     '2 cups veggie broth',
                     '1 can kidney beans',
                     '1 cup okra',
                     'Cajun seasoning'
                 ],
                 instructions: [
                     'Make a roux with flour + oil.',
                     'Add onion, celery, pepper, cook.',
                     'Add broth, beans, okra, seasoning. Simmer 20 min.'
                 ]
             },
             
             'vegan-stuffed-bell-peppers': {
                 id: 'vegan-stuffed-bell-peppers',
                 title: 'Vegan Stuffed Bell Peppers',
                 category: 'american',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Stuffed Bell Peppers.jpg',
                 prepTime: '50 minutes',
                 servings: '4 servings',
                 difficulty: 'Medium',
                 calories: '280 kcal',
                 description: 'Bell peppers stuffed with quinoa, vegetables, and herbs.',
                 ingredients: [
                     '4 large bell peppers (any color)',
                     '1 cup cooked quinoa or rice',
                     '1 can black beans, drained and rinsed',
                     '1 cup corn kernels',
                     '1 small onion, diced',
                     '2 cloves garlic, minced',
                     '1 tsp smoked paprika',
                     '1 tsp cumin',
                     '2 tbsp tomato paste or sauce',
                     '2 tbsp olive oil',
                     'Salt & pepper, to taste',
                     'Fresh cilantro for garnish'
                 ],
                 instructions: [
                     'Preheat oven to 375°F (190°C).',
                     'Cut tops off bell peppers and remove seeds.',
                     'In a skillet, heat olive oil and sauté onion and garlic until soft.',
                     'Add black beans, corn, cooked quinoa, tomato paste, smoked paprika, cumin, salt, and pepper. Cook for 5 minutes.',
                     'Stuff bell peppers with the mixture and place in a baking dish.',
                     'Cover with foil and bake 25–30 minutes. Remove foil and bake 5–10 more minutes.',
                     'Garnish with fresh cilantro and serve warm.'
                 ]
             },
             
             'vegan-baked-beans': {
                 id: 'vegan-baked-beans',
                 title: 'Vegan Baked Beans',
                 category: 'american',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Baked Beans.jpeg',
                 prepTime: '40 minutes',
                 servings: '6 servings',
                 difficulty: 'Easy',
                 calories: '220 kcal',
                 description: 'Sweet and smoky baked beans perfect for BBQs and picnics.',
                 ingredients: [
                     '2 cans navy beans',
                     '1 cup tomato sauce',
                     '2 tbsp maple syrup',
                     '1 tbsp mustard',
                     '1 tbsp soy sauce'
                 ],
                 instructions: [
                     'Mix all ingredients in baking dish.',
                     'Bake at 180°C (350°F) for 40 min.'
                 ]
             },
             
             'vegan-collard-greens': {
                 id: 'vegan-collard-greens',
                 title: 'Vegan Collard Greens',
                 category: 'american',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Collard Greens.jpg',
                 prepTime: '45 minutes',
                 servings: '4 servings',
                 difficulty: 'Easy',
                 calories: '80 kcal',
                 description: 'Southern-style collard greens cooked with onions and spices.',
                 ingredients: [
                     '1 bunch collard greens (chopped)',
                     '2 cloves garlic',
                     '1 tbsp olive oil',
                     '1 cup veggie broth',
                     'Salt & pepper'
                 ],
                 instructions: [
                     'Sauté garlic in oil.',
                     'Add collards and broth.',
                     'Simmer until tender.'
                 ]
             },
             
             'vegan-apple-pie': {
                 id: 'vegan-apple-pie',
                 title: 'Vegan Apple Pie',
                 category: 'american',
                 image: '/images/stories/Recipes/All Cuisines/Vegan Apple Pie.jpg',
                 prepTime: '90 minutes',
                 servings: '8 servings',
                 difficulty: 'Hard',
                 calories: '320 kcal',
                 description: 'Classic American apple pie with flaky crust and cinnamon filling.',
                 ingredients: [
                     '2 vegan pie crusts',
                     '6 apples (sliced)',
                     '½ cup sugar',
                     '1 tsp cinnamon',
                     '1 tbsp lemon juice'
                 ],
                 instructions: [
                     'Mix apples with sugar, cinnamon, lemon.',
                     'Fill crust, cover with top crust.',
                     'Bake at 180°C (350°F) for 45 min.'
                 ]
             },
            'vegan-pancakes': {
                id: 'vegan-pancakes',
                title: 'Vegan Pancakes',
                category: 'breakfast',
                image: './images/stories/Recipes/All Recipes/Vegan Pancake.jpg',
                prepTime: '15 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '180 kcal',
                description: 'Fluffy and delicious vegan pancakes made with plant-based milk and simple ingredients. Perfect for a weekend breakfast.',
                ingredients: [
                    '1 cup all-purpose flour',
                    '2 tablespoons sugar',
                    '2 teaspoons baking powder',
                    '1/2 teaspoon salt',
                    '1 cup plant-based milk',
                    '2 tablespoons vegetable oil',
                    '1 teaspoon vanilla extract'
                ],
                instructions: [
                    'In a large bowl, whisk together the flour, sugar, baking powder, and salt.',
                    'In a separate bowl, combine the plant-based milk, vegetable oil, and vanilla extract.',
                    'Pour the wet ingredients into the dry ingredients and stir until just combined. Do not overmix.',
                    'Heat a lightly oiled griddle or frying pan over medium heat.',
                    'Pour 1/4 cup of batter onto the hot surface for each pancake.',
                    'Cook for 2-3 minutes per side, or until golden brown and cooked through.',
                    'Serve immediately with your favorite toppings.'
                ]
            },
            'tofu-scramble': {
                id: 'tofu-scramble',
                title: 'Tofu Scramble',
                category: 'breakfast',
                image: './images/stories/Recipes/All Recipes/Tofu Scramble.jpg',
                prepTime: '15 minutes',
                servings: '2 servings',
                difficulty: 'Easy',
                calories: '220 kcal',
                description: 'A protein-rich vegan alternative to scrambled eggs, made with crumbled tofu and flavorful spices.',
                ingredients: [
                    '1 block of firm tofu',
                    '1/4 cup plant-based milk',
                    '1 tbsp nutritional yeast',
                    '1/2 tsp turmeric',
                    '1/4 tsp black salt (kala namak)',
                    '1/4 tsp garlic powder',
                    '1/4 tsp onion powder',
                    'Salt and pepper to taste',
                    '1 tbsp olive oil',
                    '1/2 cup chopped vegetables (e.g., bell peppers, onions, spinach)'
                ],
                instructions: [
                    'Press the tofu to remove excess water. Crumble the tofu into a bowl.',
                    'In a separate bowl, whisk together plant-based milk, nutritional yeast, turmeric, black salt, garlic powder, onion powder, salt, and pepper.',
                    'Heat olive oil in a pan over medium heat. Add the chopped vegetables and sauté until softened.',
                    'Add the crumbled tofu to the pan and cook for about 5 minutes, stirring occasionally.',
                    'Pour the milk mixture over the tofu and cook for another 5-7 minutes, stirring frequently, until the mixture thickens and the tofu is heated through.',
                    'Serve hot and enjoy!'
                ]
            },
            'smoothie-bowl': {
                id: 'smoothie-bowl',
                title: 'Smoothie Bowl',
                category: 'breakfast',
                image: './images/stories/Recipes/All Recipes/Smoothie Bowl.jpg',
                prepTime: '10 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '320 kcal',
                description: 'A thick and creamy smoothie bowl topped with fresh fruits, nuts, and seeds for a nutritious breakfast.',
                ingredients: [
                    '1 cup frozen mixed berries',
                    '1/2 banana',
                    '1/4 cup plant-based milk',
                    '1 tablespoon chia seeds',
                    'Toppings: granola, fresh fruit, nuts, seeds'
                ],
                instructions: [
                    'Combine frozen berries, banana, plant-based milk, and chia seeds in a blender.',
                    'Blend until smooth and creamy.',
                    'Pour into a bowl and top with granola, fresh fruit, nuts, and seeds.',
                    'Serve immediately and enjoy!'
                ]
            },
            'chia-seed-pudding': {
                id: 'chia-seed-pudding',
                title: 'Chia Seed Pudding',
                category: 'breakfast',
                image: './images/stories/Recipes/All Recipes/Chia Seed Pudding.jpg',
                prepTime: '5 minutes (plus 2 hours chilling)',
                servings: '2 servings',
                difficulty: 'Easy',
                calories: '180 kcal',
                description: 'A healthy and filling pudding made with chia seeds that absorb liquid to create a creamy, pudding-like texture.',
                ingredients: [
                    '1/4 cup chia seeds',
                    '1 cup plant-based milk (almond, soy, or coconut)',
                    '1 tablespoon maple syrup or agave nectar',
                    '1/2 teaspoon vanilla extract',
                    'Toppings: fresh fruits, nuts, seeds, granola'
                ],
                instructions: [
                    'In a jar or container, combine chia seeds, plant-based milk, maple syrup, and vanilla extract.',
                    'Stir well to ensure all chia seeds are submerged.',
                    'Cover the jar and refrigerate for at least 2 hours, or preferably overnight, to allow the chia seeds to absorb the liquid and create a pudding-like consistency.',
                    'Before serving, stir the pudding to break up any clumps.',
                    'Layer the chia seed pudding with your favorite toppings such as fresh fruits, nuts, seeds, or granola.',
                    'Enjoy your delicious and healthy chia seed pudding!'
                ]
            },
            'spicy-tofu-scramble': {
                id: 'spicy-tofu-scramble',
                title: 'Spicy Tofu Scramble',
                category: 'breakfast',
                image: './images/stories/Recipes/All Recipes/Spicy Tofu Scramble.jpg',
                prepTime: '20 minutes',
                servings: '2 servings',
                difficulty: 'Medium',
                calories: '250 kcal',
                description: 'A flavorful and spicy version of tofu scramble with aromatic spices and fresh vegetables.',
                ingredients: [
                    '1 block firm tofu, pressed',
                    '1 tbsp olive oil',
                    '1/2 onion, diced',
                    '1 bell pepper, diced',
                    '2 cloves garlic, minced',
                    '1 tsp chili powder',
                    '1/2 tsp cumin',
                    '1/4 tsp turmeric',
                    'Salt and pepper to taste',
                    'Fresh cilantro for garnish'
                ],
                instructions: [
                    'Crumble the pressed tofu into a bowl.',
                    'Heat olive oil in a pan over medium heat. Add onion and bell pepper, cook until softened.',
                    'Add garlic, chili powder, cumin, and turmeric. Cook for another minute.',
                    'Add crumbled tofu to the pan. Season with salt and pepper.',
                    'Cook, stirring occasionally, until tofu is heated through and slightly browned.',
                    'Garnish with fresh cilantro before serving.'
                ]
            },
            'avocado-chickpea-sandwich': {
                id: 'avocado-chickpea-sandwich',
                title: 'Avocado & Chickpea Sandwich',
                category: 'lunch',
                image: './images/stories/Recipes/All Recipes/Avocado & Chickpea Sandwich.jpg',
                prepTime: '15 minutes',
                servings: '4 servings',
                difficulty: 'Easy',
                calories: '380 kcal',
                description: 'A hearty and nutritious sandwich combining creamy avocado with protein-rich chickpeas for a satisfying meal.',
                ingredients: [
                    '1 can (15 ounces) chickpeas, rinsed and drained',
                    '2 ripe avocados',
                    '1/4 cup vegan mayonnaise',
                    '2 tablespoons lemon juice',
                    '1/4 cup chopped red onion',
                    '1/4 cup chopped celery',
                    'Salt and pepper to taste',
                    '8 slices of whole-grain bread'
                ],
                instructions: [
                    'In a medium bowl, mash the avocados with a fork. Add the chickpeas, vegan mayonnaise, lemon juice, red onion, and celery. Mix well.',
                    'Season with salt and pepper to taste. Mix again to ensure all ingredients are evenly distributed.',
                    'Spread the chickpea mixture evenly on four slices of bread. Top with the remaining bread slices to form sandwiches.',
                    'Serve immediately or wrap in parchment paper for a portable lunch.'
                ]
            },
            'lentil-soup-with-kale': {
                id: 'lentil-soup-with-kale',
                title: 'Lentil Soup with Kale',
                category: 'lunch',
                image: './images/stories/Recipes/All Recipes/Lentil Soup with Kale.avif',
                prepTime: '45 minutes',
                servings: '6 servings',
                difficulty: 'Medium',
                calories: '280 kcal',
                description: 'A hearty and nutritious soup packed with protein-rich lentils and nutrient-dense kale.',
                ingredients: [
                    '1 cup brown lentils',
                    '4 cups vegetable broth',
                    '1 onion, chopped',
                    '2 carrots, diced',
                    '2 celery stalks, diced',
                    '2 cloves garlic, minced',
                    '1 teaspoon dried thyme',
                    '1/2 teaspoon smoked paprika',
                    '4 cups chopped kale',
                    'Salt and pepper to taste'
                ],
                instructions: [
                    'Sauté the onion, carrots, and celery in a large pot until softened.',
                    'Add the garlic, thyme, and smoked paprika, and cook for another minute.',
                    'Stir in the lentils and vegetable broth, and bring to a boil.',
                    'Reduce the heat and simmer for 20-25 minutes, or until the lentils are tender.',
                    'Add the kale and cook for another 5 minutes, or until wilted.',
                    'Season with salt and pepper to taste.'
                ]
            },
            'vegan-burrito-bowl': {
                 id: 'vegan-burrito-bowl',
                 title: 'Vegan Burrito Bowl',
                 category: 'lunch',
                 image: './images/stories/Recipes/All Recipes/Vegan Burrito Bowl.jpg',
                 prepTime: '25 minutes',
                 servings: '4 servings',
                 difficulty: 'Easy',
                 calories: '420 kcal',
                 description: 'A colorful and nutritious bowl packed with quinoa, black beans, fresh vegetables, and zesty lime dressing.',
                 ingredients: [
                     '1 cup cooked quinoa',
                     '1 can black beans, rinsed and drained',
                     '1 avocado, diced',
                     '1 cup cherry tomatoes, halved',
                     '1/2 red onion, finely chopped',
                     '1/2 cup corn kernels',
                     '1/4 cup chopped cilantro',
                     'Juice of 1 lime',
                     'Salt and pepper to taste',
                     'Optional: vegan sour cream or salsa'
                 ],
                 instructions: [
                     'In a large bowl, combine cooked quinoa, black beans, diced avocado, cherry tomatoes, red onion, corn kernels, and chopped cilantro.',
                     'Squeeze the juice of one lime over the mixture. Season with salt and pepper to taste.',
                     'Gently toss all ingredients together until well combined.',
                     'Serve immediately or chill for later. Top with vegan sour cream or salsa if desired.'
                 ]
             },
             'creamy-tomato-pasta': {
                 id: 'creamy-tomato-pasta',
                 title: 'Creamy Tomato Pasta',
                 category: 'dinner',
                 image: './images/stories/Recipes/All Recipes/Creamy Tomato Pasta .jpg',
                 prepTime: '30 minutes',
                 servings: '4 servings',
                 difficulty: 'Easy',
                 calories: '450 kcal',
                 description: 'A rich and creamy pasta dish with a luscious tomato sauce made with plant-based cream and fresh basil.',
                 ingredients: [
                     '1 lb pasta',
                     '2 tbsp olive oil',
                     '1 onion',
                     '2 cloves garlic',
                     '28 oz canned tomatoes',
                     '1 cup vegetable broth',
                     '1 cup plant-based cream',
                     'salt and pepper to taste',
                     'fresh basil for garnish'
                 ],
                 instructions: [
                     'Cook pasta according to package instructions.',
                     'While pasta cooks, heat olive oil in a large pan over medium heat.',
                     'Add chopped onion and cook until softened, about 5 minutes.',
                     'Stir in minced garlic and cook for another minute.',
                     'Pour in canned tomatoes and vegetable broth, bring to a simmer, and cook for 15 minutes.',
                     'Stir in plant-based cream, season with salt and pepper.',
                     'Add cooked pasta to the sauce, toss to coat.',
                     'Garnish with fresh basil before serving.'
                 ]
             },
             'lentil-shepherds-pie': {
                 id: 'lentil-shepherds-pie',
                 title: 'Lentil Shepherd\'s Pie',
                 category: 'dinner',
                 image: './images/stories/Recipes/All Recipes/Lentil Shepherd\'s Pie.jpg',
                 prepTime: '60 minutes',
                 servings: '6 servings',
                 difficulty: 'Medium',
                 calories: '380 kcal',
                 description: 'A hearty and comforting dish with protein-rich lentils topped with creamy mashed sweet potatoes.',
                 ingredients: [
                     'For the Lentil Filling:',
                     '1 tbsp olive oil',
                     '1 onion, finely chopped',
                     '2 carrots, finely chopped',
                     '2 celery stalks, finely chopped',
                     '2 cloves garlic, minced',
                     '1 cup brown or green lentils, rinsed',
                     '4 cups vegetable broth',
                     'For the Sweet Potato Topping:',
                     '4 large sweet potatoes, peeled and cubed',
                     '1/4 cup plant-based milk',
                     '2 tbsp vegan butter',
                     'Salt and pepper to taste'
                 ],
                 instructions: [
                     'Heat olive oil in a large pot over medium heat. Add onion, carrots, and celery, and cook until softened, about 5-7 minutes. Stir in garlic and cook for another minute.',
                     'Add lentils and vegetable broth to the pot. Bring to a boil, then reduce heat and simmer for 20-25 minutes, or until lentils are tender. Season with salt and pepper.',
                     'Boil sweet potatoes in salted water until tender, about 15-20 minutes. Drain and mash with plant-based milk, vegan butter, salt, and pepper until smooth and creamy.',
                     'Preheat oven to 375°F (190°C). Transfer lentil filling to a baking dish. Spread mashed sweet potatoes evenly over the filling.',
                     'Bake for 20-25 minutes, or until the topping is golden brown and the filling is bubbly. Let it cool slightly before serving.'
                 ]
             },
             'vegan-lasagna': {
                 id: 'vegan-lasagna',
                 title: 'Vegan Lasagna',
                 category: 'dinner',
                 image: './images/stories/Recipes/All Recipes/Vegan Lasagna .jpg',
                 prepTime: '90 minutes',
                 servings: '8 servings',
                 difficulty: 'Hard',
                 calories: '520 kcal',
                 description: 'A delicious layered pasta dish with homemade vegan ricotta, spinach, and rich tomato sauce.',
                 ingredients: [
                     'For the vegan ricotta:',
                     '1 cup raw cashews, soaked for at least 2 hours',
                     '1/2 cup water',
                     '2 tablespoons lemon juice',
                     '1 teaspoon salt',
                     '1/2 teaspoon garlic powder',
                     'For the lasagna:',
                     '1 tablespoon olive oil',
                     '1 onion, finely chopped',
                     '2 cloves garlic, minced',
                     '1 (28-ounce) can crushed tomatoes',
                     '1 (15-ounce) can tomato sauce',
                     '1 teaspoon dried oregano',
                     '1/2 teaspoon salt',
                     '1/4 teaspoon black pepper',
                     '9 lasagna noodles',
                     '2 cups spinach, chopped',
                     '1 cup vegan mozzarella, shredded'
                 ],
                 instructions: [
                     'Preheat oven to 375°F (190°C). Grease a 9x13 inch baking dish.',
                     'In a food processor, combine all vegan ricotta ingredients and blend until smooth and creamy. Set aside.',
                     'Heat olive oil in a large skillet over medium heat. Add onion and cook until softened, about 5 minutes.',
                     'Add garlic and cook for 1 minute more. Stir in crushed tomatoes, tomato sauce, oregano, salt, and pepper.',
                     'Bring to a simmer and cook for 10 minutes, stirring occasionally.',
                     'Cook lasagna noodles according to package directions. Drain and rinse with cold water.',
                     'Spread a thin layer of tomato sauce in the bottom of the baking dish.',
                     'Layer 3 lasagna noodles over the sauce. Spread half of the vegan ricotta over the noodles, then top with half of the spinach and a third of the remaining tomato sauce.',
                     'Repeat layers: noodles, ricotta, spinach, sauce. Top with remaining 3 noodles and sauce.',
                     'Sprinkle with vegan mozzarella. Cover the baking dish with foil and bake for 30 minutes.',
                     'Remove foil and bake for another 15-20 minutes, or until the cheese is melted and bubbly.',
                     'Let stand for 10 minutes before serving.'
                 ]
             },

             'berry-coconut-panna-cotta': {
                 id: 'berry-coconut-panna-cotta',
                 title: 'Berry Coconut Panna Cotta',
                 category: 'dessert',
                 cuisine: 'international',
                 difficulty: 'medium',
                 prepTime: '20 minutes',
                 cookTime: '15 minutes',
                 totalTime: '4 hours 35 minutes',
                 servings: 4,
                 image: './images/stories/Recipes/All Recipes/Berry Coconut Panna Cotta.webp',
                 description: 'A creamy, dairy-free panna cotta made with coconut milk and topped with a vibrant berry compote.',
                 ingredients: [
                     'For the Panna Cotta:',
                     '2 cans (13.5 oz each) full-fat coconut milk',
                     '1/2 cup maple syrup',
                     '1 teaspoon vanilla extract',
                     '2 tablespoons agar-agar powder',
                     'Pinch of salt',
                     '',
                     'For the Berry Compote:',
                     '1 cup mixed berries (fresh or frozen)',
                     '2 tablespoons maple syrup',
                     '1 tablespoon lemon juice'
                 ],
                 instructions: [
                     'Prepare the Panna Cotta: In a saucepan, combine coconut milk, maple syrup, vanilla extract, agar-agar powder, and salt. Whisk well to ensure the agar-agar is fully dissolved.',
                     'Heat the Mixture: Place the saucepan over medium heat and bring to a gentle simmer, stirring constantly. Continue to simmer for 5 minutes, ensuring the mixture thickens slightly.',
                     'Strain and Pour: Remove from heat and strain the mixture through a fine-mesh sieve into a bowl to remove any lumps. Pour the mixture evenly into serving glasses or ramekins.',
                     'Chill: Cover the glasses with plastic wrap and refrigerate for at least 4 hours, or until set.',
                     'Make the Berry Compote: In a small saucepan, combine mixed berries, maple syrup, and lemon juice. Cook over medium heat for 10-15 minutes, stirring occasionally, until the berries soften and the mixture thickens into a compote.',
                     'Cool: Remove from heat and let the compote cool completely.',
                     'Assemble and Serve: Once the panna cotta is set, top each serving with a generous spoonful of berry compote. Serve chilled and enjoy!'
                 ]
             },

             'mango-sticky-rice': {
                 id: 'mango-sticky-rice',
                 title: 'Mango Sticky Rice',
                 category: 'dessert',
                 cuisine: 'thai',
                 difficulty: 'medium',
                 prepTime: '4 hours 15 minutes',
                 cookTime: '30 minutes',
                 totalTime: '4 hours 45 minutes',
                 servings: 4,
                 image: './images/stories/Recipes/All Recipes/Mango Sticky Rice.webp',
                 description: 'A traditional Thai dessert featuring sweet coconut sticky rice paired with fresh mango slices.',
                 ingredients: [
                     '1 cup glutinous rice',
                     '1 1/2 cups water',
                     '1/2 cup coconut milk',
                     '1/4 cup sugar',
                     '1/4 teaspoon salt',
                     '2 ripe mangoes',
                     'sesame seeds for garnish'
                 ],
                 instructions: [
                     'Rinse glutinous rice and soak for at least 4 hours.',
                     'Steam rice until cooked.',
                     'Heat coconut milk, sugar, and salt until sugar dissolves.',
                     'Mix cooked rice with coconut mixture.',
                     'Serve with sliced mangoes and sesame seeds.'
                 ]
             },

             'banana-nice-cream': {
                 id: 'banana-nice-cream',
                 title: 'Banana Nice Cream',
                 category: 'dessert',
                 cuisine: 'international',
                 difficulty: 'easy',
                 prepTime: '5 minutes',
                 cookTime: '0 minutes',
                 totalTime: '5 minutes',
                 servings: 2,
                 image: './images/stories/Recipes/All Recipes/Banana Nice Cream.png',
                 description: 'A healthy, dairy-free ice cream alternative made with frozen bananas and plant-based milk.',
                 ingredients: [
                     '3 ripe bananas, sliced and frozen',
                     '1/4 cup plant-based milk (almond, soy, or oat)',
                     'Optional toppings: fresh berries, granola, chocolate chips, nuts'
                 ],
                 instructions: [
                     'Place the frozen banana slices in a high-speed blender or food processor.',
                     'Add the plant-based milk.',
                     'Blend until smooth and creamy, scraping down the sides as needed.',
                     'If the mixture is too thick, add a tablespoon of milk at a time until desired consistency is reached.',
                     'Serve immediately or transfer to a container and freeze for later.',
                     'Top with your favorite toppings and enjoy!'
                 ]
             },

             'vegan-chocolate-chip-cookies': {
                 id: 'vegan-chocolate-chip-cookies',
                 title: 'Vegan Chocolate Chip Cookies',
                 category: 'dessert',
                 cuisine: 'american',
                 difficulty: 'easy',
                 prepTime: '15 minutes',
                 cookTime: '12 minutes',
                 totalTime: '27 minutes',
                 servings: 24,
                 image: './images/stories/Recipes/All Recipes/Vegan Chocolate Chip Cookies.webp',
                 description: 'Classic chocolate chip cookies made vegan with plant-based butter and applesauce.',
                 ingredients: [
                     '1 cup all-purpose flour',
                     '1/2 teaspoon baking soda',
                     '1/4 teaspoon salt',
                     '1/2 cup vegan butter, softened',
                     '1/2 cup granulated sugar',
                     '1/4 cup brown sugar',
                     '1 teaspoon vanilla extract',
                     '1/4 cup unsweetened applesauce',
                     '1 cup vegan chocolate chips'
                 ],
                 instructions: [
                     'Preheat oven to 350°F (175°C). Line a baking sheet with parchment paper.',
                     'In a medium bowl, whisk together flour, baking soda, and salt.',
                     'In a large bowl, cream together vegan butter, granulated sugar, and brown sugar until light and fluffy.',
                     'Stir in vanilla extract and applesauce.',
                     'Gradually add dry ingredients to wet ingredients, mixing until just combined.',
                     'Fold in vegan chocolate chips.',
                     'Drop rounded tablespoons of dough onto the prepared baking sheet.',
                     'Bake for 10-12 minutes, or until edges are golden brown.',
                     'Let cookies cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely.'
                 ]
             },

              'green-detox-smoothie': {
                  id: 'green-detox-smoothie',
                  title: 'Green Detox Smoothie',
                  category: 'smoothie',
                  cuisine: 'international',
                  difficulty: 'easy',
                  prepTime: '5 minutes',
                  cookTime: '0 minutes',
                  totalTime: '5 minutes',
                  servings: 1,
                  image: './images/stories/Recipes/All Recipes/Green Detox Smoothie .webp',
                  description: 'A nutrient-packed green smoothie with spinach, avocado, and chia seeds for a healthy detox boost.',
                  ingredients: [
                      '1 cup spinach',
                      '1/2 frozen banana',
                      '1/2 cup almond milk',
                      '1 tablespoon chia seeds',
                      '1/2 avocado',
                      '1/4 cup water',
                      '1 tablespoon lemon juice'
                  ],
                  instructions: [
                      'Combine all ingredients in a blender.',
                      'Blend until smooth and creamy.',
                      'Add more water if needed to reach desired consistency.',
                      'Serve immediately and enjoy!'
                  ]
              },

              'berry-blast-smoothie': {
                  id: 'berry-blast-smoothie',
                  title: 'Berry Blast Smoothie',
                  category: 'smoothie',
                  cuisine: 'international',
                  difficulty: 'easy',
                  prepTime: '5 minutes',
                  cookTime: '0 minutes',
                  totalTime: '5 minutes',
                  servings: 1,
                  image: './images/stories/Recipes/All Recipes/Berry Blast Smoothie.avif',
                  description: 'A vibrant berry smoothie packed with antioxidants from mixed berries, spinach, and chia seeds.',
                  ingredients: [
                      '1 cup mixed berries (strawberries, blueberries, raspberries)',
                      '1 banana',
                      '1/2 cup spinach',
                      '1/2 cup almond milk',
                      '1 tablespoon chia seeds',
                      '1 tablespoon maple syrup (optional)'
                  ],
                  instructions: [
                      'Combine all ingredients in a blender.',
                      'Blend until smooth and creamy.',
                      'Pour into a glass and enjoy immediately.'
                  ]
              },

              'tropical-sunrise-smoothie': {
                  id: 'tropical-sunrise-smoothie',
                  title: 'Tropical Sunrise Smoothie',
                  category: 'smoothie',
                  cuisine: 'international',
                  difficulty: 'easy',
                  prepTime: '5 minutes',
                  cookTime: '0 minutes',
                  totalTime: '5 minutes',
                  servings: 1,
                  image: './images/stories/Recipes/All Recipes/Tropical Sunrise Smoothie.jpg',
                  description: 'A tropical paradise in a glass with mango, pineapple, and coconut milk for a refreshing treat.',
                  ingredients: [
                      '1 cup frozen mango chunks',
                      '1 cup frozen pineapple chunks',
                      '1/2 cup coconut milk',
                      '1/4 cup water',
                      '1 tablespoon chia seeds (optional)',
                      '1 tablespoon maple syrup or agave nectar (optional, for extra sweetness)'
                  ],
                  instructions: [
                      'Combine all ingredients in a high-speed blender.',
                      'Blend until smooth and creamy, adding more water if needed to reach desired consistency.',
                      'Pour into a glass and enjoy immediately!'
                  ]
              },

              'chocolate-peanut-butter-smoothie': {
                  id: 'chocolate-peanut-butter-smoothie',
                  title: 'Chocolate Peanut Butter Smoothie',
                  category: 'smoothie',
                  cuisine: 'international',
                  difficulty: 'easy',
                  prepTime: '5 minutes',
                  cookTime: '0 minutes',
                  totalTime: '5 minutes',
                  servings: 1,
                  image: './images/stories/Recipes/All Recipes/Chocolate Peanut Butter Smoothie.jpg',
                  description: 'A rich and creamy smoothie combining chocolate and peanut butter flavors for a satisfying treat.',
                  ingredients: [
                      '1 cup unsweetened almond milk',
                      '1 frozen banana',
                      '2 tablespoons peanut butter',
                      '2 tablespoons cocoa powder',
                      '1 tablespoon maple syrup',
                      '1/2 teaspoon vanilla extract'
                  ],
                  instructions: [
                      'Combine all ingredients in a blender.',
                      'Blend until smooth and creamy.',
                      'Pour into a glass and enjoy!'
                  ]
              },

              'mango-lassi-smoothie': {
                  id: 'mango-lassi-smoothie',
                  title: 'Mango Lassi Smoothie',
                  category: 'smoothie',
                  cuisine: 'indian',
                  difficulty: 'easy',
                  prepTime: '5 minutes',
                  cookTime: '0 minutes',
                  totalTime: '5 minutes',
                  servings: 1,
                  image: './images/stories/Recipes/All Recipes/Mango Lassi.jpg',
                  description: 'A vegan version of the classic Indian mango lassi with plant-based yogurt and aromatic cardamom.',
                  ingredients: [
                      '1 cup frozen mango chunks',
                      '1/2 cup plant-based yogurt (e.g., coconut or almond)',
                      '1/4 cup plant-based milk (e.g., almond or soy)',
                      '1 tablespoon maple syrup or agave nectar',
                      '1/4 teaspoon ground cardamom',
                      'A pinch of saffron threads (optional, for color and flavor)',
                      'Ice cubes (optional, for a thicker smoothie)'
                  ],
                  instructions: [
                      'Combine all ingredients in a high-speed blender.',
                      'Blend until smooth and creamy, adding more plant-based milk if needed to reach desired consistency.',
                      'If using, add ice cubes and blend again until smooth.',
                      'Pour into a glass and garnish with a few saffron threads, if desired.',
                      'Serve immediately and enjoy!'
                  ]
              },



              'roasted-chickpeas': {
                  id: 'roasted-chickpeas',
                  name: 'Roasted Chickpeas with Spices',
                  category: 'meal-plan',
                  cuisine: 'Mediterranean',
                  difficulty: 'Easy',
                  prepTime: '5 minutes',
                  cookTime: '30 minutes',
                  totalTime: '35 minutes',
                  servings: 4,
                  image: './images/stories/Recipes/All Recipes/Avocado & Chickpea Sandwich.jpg',
                  description: 'Crispy, spiced roasted chickpeas that make a perfect protein-packed snack or meal addition.',
                  ingredients: [
                      '1 can chickpeas, drained and rinsed',
                      '1 tbsp olive oil',
                      '1 tsp paprika',
                      '1/2 tsp cumin',
                      'Salt to taste'
                  ],
                  instructions: [
                      'Preheat oven to 200°C (400°F).',
                      'Pat chickpeas dry and toss with oil and spices.',
                      'Spread on a baking sheet, roast 25–30 minutes until crispy.'
                  ]
              },

              'protein-smoothie': {
                  id: 'protein-smoothie',
                  name: 'Protein Smoothie with Plant-Based Protein Powder',
                  category: 'meal-plan',
                  cuisine: 'American',
                  difficulty: 'Easy',
                  prepTime: '5 minutes',
                  cookTime: '0 minutes',
                  totalTime: '5 minutes',
                  servings: 1,
                  image: './images/stories/Recipes/All Recipes/Chocolate Peanut Butter Smoothie.jpg',
                  description: 'A creamy, protein-rich smoothie perfect for post-workout recovery or breakfast on-the-go.',
                  ingredients: [
                      '1 banana',
                      '1 cup almond milk',
                      '1 scoop plant-based protein powder',
                      '1 tbsp peanut butter',
                      'Ice cubes'
                  ],
                  instructions: [
                      'Blend all ingredients until smooth.',
                      'Pour into a glass and enjoy chilled.'
                  ]
              },

              'chia-pudding-berries': {
                  id: 'chia-pudding-berries',
                  name: 'Chia Seed Pudding with Berries',
                  category: 'meal-plan',
                  cuisine: 'American',
                  difficulty: 'Easy',
                  prepTime: '5 minutes',
                  cookTime: '0 minutes',
                  totalTime: '5 minutes (plus overnight chilling)',
                  servings: 2,
                  image: './images/stories/Recipes/All Recipes/Chia Seed Pudding.jpg',
                  description: 'A nutritious overnight pudding packed with omega-3s and topped with fresh berries.',
                  ingredients: [
                      '1/4 cup chia seeds',
                      '1 cup almond milk',
                      '1 tbsp maple syrup',
                      '1/2 cup fresh berries'
                  ],
                  instructions: [
                      'Mix chia seeds, almond milk, and syrup in a jar.',
                      'Refrigerate overnight.',
                      'Top with berries before serving.'
                  ]
              },

              'spinach-mushroom-salad': {
                  id: 'spinach-mushroom-salad',
                  name: 'Spinach and Mushroom Salad with Lemon Vinaigrette',
                  category: 'meal-plan',
                  cuisine: 'Mediterranean',
                  difficulty: 'Easy',
                  prepTime: '10 minutes',
                  cookTime: '0 minutes',
                  totalTime: '10 minutes',
                  servings: 2,
                  image: './images/stories/Recipes/All Recipes/Fresh Vegan Salad.png',
                  description: 'A fresh, nutrient-dense salad with earthy mushrooms and a bright lemon vinaigrette.',
                  ingredients: [
                      '2 cups fresh spinach',
                      '1 cup sliced mushrooms',
                      '1/4 cup cherry tomatoes',
                      '2 tbsp olive oil',
                      '1 tbsp lemon juice',
                      'Salt & pepper'
                  ],
                  instructions: [
                      'Toss spinach, mushrooms, and tomatoes in a bowl.',
                      'Whisk olive oil, lemon juice, salt, and pepper.',
                      'Drizzle dressing and serve fresh.'
                  ]
              },
              'grilled-eggplant-steaks': {
                  id: 'grilled-eggplant-steaks',
                  title: 'Grilled Eggplant Steaks with Roasted Vegetables',
                  image: './images/stories/Recipes/All Mealplan/Grilled Eggplant Steaks with Roasted Vegetables.jpg',
                  category: 'Meal Plan',
                  cuisine: 'Mediterranean',
                  difficulty: 'Medium',
                  time: '30 minutes',
                  servings: 4,
                  description: 'Hearty grilled eggplant steaks served with colorful roasted vegetables for a satisfying plant-based meal.',
                  ingredients: [
                      '2 eggplants, sliced into thick rounds',
                      '2 tbsp olive oil',
                      '1 tsp garlic powder',
                      'Salt & pepper',
                      '2 cups mixed veggies (zucchini, carrots, bell peppers)'
                  ],
                  instructions: [
                      'Preheat grill and brush eggplant slices with oil and seasoning.',
                      'Grill 3–4 minutes per side.',
                      'Roast veggies at 200°C (400°F) for 20 minutes.',
                      'Serve eggplant with roasted vegetables.'
                  ]
              },
              'celery-almond-butter': {
                  id: 'celery-almond-butter',
                  title: 'Celery Sticks with Almond Butter',
                  image: './images/stories/Recipes/All Mealplan/Celery Sticks with Almond Butter.jpg',
                  category: 'Meal Plan',
                  cuisine: 'American',
                  difficulty: 'Easy',
                  time: '5 minutes',
                  servings: 1,
                  description: 'A simple and nutritious snack combining crunchy celery with creamy almond butter.',
                  ingredients: [
                      '4 celery stalks',
                      '3 tbsp almond butter'
                  ],
                  instructions: [
                      'Wash and cut celery into sticks.',
                      'Spread almond butter inside celery grooves.',
                      'Enjoy as a snack.'
                  ]
              },
              'coconut-cream-raspberries': {
                  id: 'coconut-cream-raspberries',
                  title: 'Coconut Cream with Raspberries',
                  image: './images/stories/Recipes/All Mealplan/Coconut Cream with Raspberries 15.14.10.jpg',
                  category: 'Meal Plan',
                  cuisine: 'Tropical',
                  difficulty: 'Easy',
                  time: '10 minutes',
                  servings: 2,
                  description: 'A light and refreshing dessert featuring rich coconut cream topped with fresh raspberries.',
                  ingredients: [
                      '1/2 cup coconut cream',
                      '1 tbsp maple syrup',
                      '1/2 cup fresh raspberries'
                  ],
                  instructions: [
                      'Whisk coconut cream with maple syrup.',
                      'Spoon into a bowl and top with raspberries.'
                  ]
              },
              'gluten-free-buckwheat-pancakes': {
                  id: 'gluten-free-buckwheat-pancakes',
                  title: 'Gluten-Free Buckwheat Pancakes',
                  image: './images/stories/Recipes/All Mealplan/Gluten-Free Buckwheat Pancakes.jpg',
                  category: 'Meal Plan',
                  cuisine: 'American',
                  difficulty: 'Medium',
                  time: '20 minutes',
                  servings: 4,
                  description: 'Fluffy and nutritious gluten-free pancakes made with buckwheat flour and plant-based ingredients.',
                  ingredients: [
                      '1 cup buckwheat flour',
                      '1 cup almond milk',
                      '1 tbsp flaxseed meal + 3 tbsp water (flax egg)',
                      '1 tbsp maple syrup',
                      '1 tsp baking powder'
                  ],
                  instructions: [
                      'Mix flaxseed + water, let sit 5 minutes.',
                      'Whisk all ingredients into a batter.',
                      'Pour onto a hot pan, cook until bubbles form, flip.',
                      'Serve with fruit or syrup.'
                  ]
              },
              'rainbow-veggie-wraps': {
                  id: 'rainbow-veggie-wraps',
                  title: 'Rainbow Veggie Wraps',
                  image: 'images/stories/Recipes/All Recipes/Vegan Burrito Bowl.jpg',
                  category: 'Meal Plan',
                  cuisine: 'International',
                  difficulty: 'Easy',
                  time: '15 minutes',
                  servings: 2,
                  description: 'Colorful and nutritious wraps packed with fresh vegetables and creamy hummus.',
                  ingredients: [
                      '2 large tortillas',
                      '1/2 cup hummus',
                      '1/4 cup shredded carrots',
                      '1/4 cup bell peppers (red, yellow, green)',
                      '1/4 cup purple cabbage',
                      '1/4 cup cucumber slices'
                  ],
                  instructions: [
                      'Spread hummus on tortillas.',
                      'Layer colorful veggies.',
                      'Roll tightly and slice.'
                  ]
              },
              'chickpea-curry-cauliflower': {
                  id: 'chickpea-curry-cauliflower',
                  title: 'Chickpea Curry with Cauliflower Rice',
                  image: './images/stories/Recipes/All Mealplan/Chickpea Curry with Cauliflower Rice.jpg',
                  category: 'Meal Plan',
                  cuisine: 'Indian',
                  difficulty: 'Medium',
                  time: '25 minutes',
                  servings: 4,
                  description: 'A flavorful and aromatic curry with tender chickpeas served over nutritious cauliflower rice.',
                  ingredients: [
                      '1 can chickpeas',
                      '1 onion, diced',
                      '2 cloves garlic, minced',
                      '1 tbsp curry powder',
                      '1 can coconut milk',
                      '1 cauliflower, grated (for rice)'
                  ],
                  instructions: [
                      'Sauté onion and garlic in oil.',
                      'Add curry powder, chickpeas, and coconut milk. Simmer 10 minutes.',
                      'Cook grated cauliflower in a pan 5 minutes for rice.',
                      'Serve curry over cauliflower rice.'
                  ]
              },
              'trail-mix-nuts': {
                  id: 'trail-mix-nuts',
                  title: 'Trail Mix with Dried Fruits and Nuts',
                  image: './images/stories/Recipes/All Mealplan/Trail Mix with Dried Fruits and Nuts.webp',
                  category: 'Meal Plan',
                  cuisine: 'American',
                  difficulty: 'Easy',
                  time: '5 minutes',
                  servings: 8,
                  description: 'A perfect on-the-go snack combining various nuts and dried fruits for sustained energy.',
                  ingredients: [
                      '1/2 cup almonds',
                      '1/2 cup walnuts',
                      '1/2 cup cashews',
                      '1/2 cup raisins',
                      '1/4 cup dried cranberries'
                  ],
                  instructions: [
                      'Mix nuts and dried fruits in a bowl.',
                      'Store in an airtight jar.'
                  ]
              },
              'coconut-chia-pudding': {
                  id: 'coconut-chia-pudding',
                  title: 'Coconut Chia Seed Pudding',
                  image: './images/stories/Recipes/All Mealplan/Coconut Chia Seed Pudding.jpg',
                  category: 'Meal Plan',
                  cuisine: 'Tropical',
                  difficulty: 'Easy',
                  time: '4+ hours',
                  servings: 2,
                  description: 'A creamy and nutritious pudding made with chia seeds and coconut milk, perfect for breakfast or dessert.',
                  ingredients: [
                      '1/4 cup chia seeds',
                      '1 cup coconut milk',
                      '1 tbsp maple syrup'
                  ],
                  instructions: [
                      'Mix chia seeds, coconut milk, and syrup.',
                      'Refrigerate 4+ hours.',
                      'Serve chilled.'
                  ]
              },
              'vegan-chili': {
                  id: 'vegan-chili',
                  title: 'Vegan Chili',
                  image: './images/stories/Recipes/All Mealplan/Vegan Chili.jpg',
                  category: 'Meal Plan',
                  cuisine: 'American',
                  difficulty: 'Medium',
                  time: '30 minutes',
                  servings: 6,
                  description: 'A hearty and flavorful chili packed with beans, corn, and spices for a satisfying meal.',
                  ingredients: [
                      '1 can kidney beans',
                      '1 can black beans',
                      '1 cup corn',
                      '1 can diced tomatoes',
                      '1 onion, chopped',
                      '2 cloves garlic',
                      '1 tbsp chili powder'
                  ],
                  instructions: [
                      'Cook onion and garlic in a pot.',
                      'Add beans, corn, tomatoes, and chili powder.',
                      'Simmer 20 minutes.'
                  ]
              },
              'vegetable-stir-fry': {
                  id: 'vegetable-stir-fry',
                  title: 'Vegetable Stir-Fry',
                  image: './images/stories/Recipes/All Mealplan/Vegetable Stir-Fry.avif',
                  category: 'Meal Plan',
                  cuisine: 'Asian',
                  difficulty: 'Easy',
                  time: '15 minutes',
                  servings: 4,
                  description: 'A quick and healthy stir-fry with fresh vegetables and savory seasonings.',
                  ingredients: [
                      '2 cups mixed veggies (broccoli, snap peas, carrots)',
                      '2 tbsp soy sauce',
                      '1 tbsp sesame oil',
                      '1 clove garlic, minced'
                  ],
                  instructions: [
                      'Heat oil, sauté garlic and veggies.',
                      'Add soy sauce, stir-fry 5 minutes.'
                  ]
              },
              'vegan-tacos': {
                  id: 'vegan-tacos',
                  title: 'Vegan Tacos',
                  image: './images/stories/Recipes/All Mealplan/Vegan Tacos.jpg',
                  category: 'Meal Plan',
                  cuisine: 'Mexican',
                  difficulty: 'Easy',
                  time: '15 minutes',
                  servings: 3,
                  description: 'Delicious plant-based tacos filled with black beans, corn, and fresh toppings.',
                  ingredients: [
                      '6 corn tortillas',
                      '1 can black beans',
                      '1/2 cup corn',
                      '1/2 cup salsa',
                      'Avocado slices'
                  ],
                  instructions: [
                      'Warm tortillas.',
                      'Fill with beans, corn, salsa, and avocado.'
                  ]
              },
              'pasta-primavera': {
                  id: 'pasta-primavera',
                  title: 'Pasta Primavera',
                  image: './images/stories/Recipes/All Mealplan/Pasta Primavera.jpg',
                  category: 'Meal Plan',
                  cuisine: 'Italian',
                  difficulty: 'Medium',
                  time: '25 minutes',
                  servings: 4,
                  description: 'A colorful pasta dish loaded with fresh seasonal vegetables and bright flavors.',
                  ingredients: [
                      '200g pasta',
                      '1 cup zucchini',
                      '1 cup bell peppers',
                      '1/2 cup cherry tomatoes',
                      '2 tbsp olive oil',
                      '1 tbsp lemon juice'
                  ],
                  instructions: [
                      'Cook pasta according to package.',
                      'Sauté veggies in oil.',
                      'Toss pasta with veggies and lemon juice.'
                  ]
              },
              'vegan-shepherds-pie': {
                  id: 'vegan-shepherds-pie',
                  title: 'Vegan Shepherd\'s Pie',
                  image: './images/stories/Recipes/All Mealplan/Vegan Shepherd\'s Pie.jpg',
                  category: 'Meal Plan',
                  cuisine: 'British',
                  difficulty: 'Medium',
                  time: '45 minutes',
                  servings: 6,
                  description: 'A comforting plant-based version of the classic dish with lentils and creamy mashed potatoes.',
                  ingredients: [
                      '2 cups mashed potatoes',
                      '1 onion, diced',
                      '2 carrots, diced',
                      '1 cup peas',
                      '1 cup lentils, cooked',
                      '1 cup vegetable broth'
                  ],
                  instructions: [
                      'Sauté onion and carrots.',
                      'Add lentils, peas, and broth, simmer until thick.',
                      'Spread in a dish, top with mashed potatoes.',
                      'Bake at 180°C (350°F) for 20 minutes.'
                  ]
              },
              'tropical-chia-pudding': {
                  id: 'tropical-chia-pudding',
                  title: 'Tropical Chia Seed Pudding',
                  image: './images/stories/Recipes/All Mealplan/Tropical Chia Seed Pudding.jpg',
                  category: 'Meal Plan',
                  cuisine: 'Tropical',
                  difficulty: 'Easy',
                  time: '4+ hours',
                  servings: 2,
                  description: 'A refreshing chia pudding topped with tropical fruits for a taste of paradise.',
                  ingredients: [
                      '1/4 cup chia seeds',
                      '1 cup coconut milk',
                      '1 tbsp maple syrup',
                      '1/2 cup pineapple + mango chunks'
                  ],
                  instructions: [
                      'Mix chia seeds, coconut milk, and syrup.',
                      'Refrigerate overnight.',
                      'Top with tropical fruits.'
                  ]
              },
              'mediterranean-chickpea-salad': {
                  id: 'mediterranean-chickpea-salad',
                  title: 'Mediterranean Chickpea Salad',
                  image: './images/stories/Recipes/All Mealplan/Mediterranean Chickpea Salad.jpg',
                  category: 'Meal Plan',
                  cuisine: 'Mediterranean',
                  difficulty: 'Easy',
                  time: '10 minutes',
                  servings: 4,
                  description: 'A fresh and protein-rich salad with Mediterranean flavors and crisp vegetables.',
                  ingredients: [
                      '1 can chickpeas',
                      '1/2 cup cucumber',
                      '1/2 cup tomatoes',
                      '1/4 cup red onion',
                      '2 tbsp olive oil',
                      '1 tbsp lemon juice'
                  ],
                  instructions: [
                      'Combine chickpeas and veggies.',
                      'Drizzle olive oil and lemon juice, toss well.'
                  ]
              },
              'spiced-tofu-stir-fry': {
                  id: 'spiced-tofu-stir-fry',
                  title: 'Spiced Tofu Stir-Fry',
                  image: './images/stories/Recipes/All Mealplan/Spiced Tofu Stir-Fry.jpg',
                  category: 'Meal Plan',
                  cuisine: 'Asian',
                  difficulty: 'Medium',
                  time: '20 minutes',
                  servings: 4,
                  description: 'A flavorful stir-fry featuring golden tofu and vegetables with a spicy kick.',
                  ingredients: [
                      '1 block tofu, cubed',
                      '2 tbsp soy sauce',
                      '1 tsp chili flakes',
                      '2 cups mixed veggies',
                      '1 tbsp sesame oil'
                  ],
                  instructions: [
                      'Pan-fry tofu until golden.',
                      'Add veggies, soy sauce, and chili flakes.',
                      'Stir-fry 5–7 minutes.'
                  ]
              },
              'cucumber-hummus-bites': {
                  id: 'cucumber-hummus-bites',
                  title: 'Cucumber and Hummus Bites',
                  image: './images/stories/Recipes/All Mealplan/Cucumber and Hummus Bites.jpg',
                  category: 'Meal Plan',
                  cuisine: 'Mediterranean',
                  difficulty: 'Easy',
                  time: '5 minutes',
                  servings: 2,
                  description: 'Light and refreshing appetizer bites perfect for a healthy snack.',
                  ingredients: [
                      '1 cucumber, sliced',
                      '1/2 cup hummus'
                  ],
                  instructions: [
                      'Slice cucumber into rounds.',
                      'Top each slice with hummus.'
                  ]
              },
              'mixed-nuts': {
                  id: 'mixed-nuts',
                  title: 'Handful of Mixed Nuts',
                  image: './images/stories/Recipes/All Mealplan/Handful of Mixed Nuts.jpg',
                  category: 'Meal Plan',
                  cuisine: 'International',
                  difficulty: 'Easy',
                  time: '1 minute',
                  servings: 1,
                  description: 'A simple and nutritious snack providing healthy fats and protein.',
                  ingredients: [
                      '1/2 cup assorted nuts (almonds, cashews, walnuts, peanuts)'
                  ],
                  instructions: [
                      'Place nuts in a bowl.',
                      'Eat as a quick snack.'
                  ]
              },
              'quinoa-salad-lemon': {
                  id: 'quinoa-salad-lemon',
                  title: 'Quinoa Salad with Lemon Vinaigrette',
                  image: './images/stories/Recipes/All Mealplan/Quinoa Salad with Black Beans and Avocado.jpg',
                  category: 'Meal Plan',
                  cuisine: 'Mediterranean',
                  difficulty: 'Easy',
                  time: '25 minutes',
                  servings: 4,
                  description: 'A fresh and nutritious quinoa salad with crisp vegetables and a zesty lemon vinaigrette.',
                  ingredients: [
                      '1 cup quinoa, rinsed',
                      '2 cups water',
                      '1/2 cup chopped cucumber',
                      '1/2 cup cherry tomatoes, halved',
                      '1/4 cup chopped red onion',
                      '1/4 cup chopped fresh parsley',
                      '1/4 cup chopped fresh mint',
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
            // Meal Plan Entries
            'high-protein-plan': {
                id: 'high-protein-plan',
                title: 'High-Protein Vegan Power',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Protein Smoothie with Plant-Based Protein Powder.webp',
                prepTime: '7 days',
                servings: '21 meals',
                difficulty: 'Medium',
                calories: '1800-2200 kcal',
                description: 'Fuel your workouts with plant-based protein powerhouses. This comprehensive 7-day meal plan provides 25g+ protein per meal with post-workout recipes and muscle-building focus.',
                ingredients: [
                    'Chickpea flour for protein-rich omelettes',
                    'Quinoa and black beans for complete proteins',
                    'Tempeh for fermented protein benefits',
                    'Roasted chickpeas for crunchy snacks',
                    'Plant-based protein powder for smoothies',
                    'Chia seeds for omega-3s and protein',
                    'Fresh vegetables and herbs for nutrients'
                ],
                instructions: [
                    'Start each day with a protein-rich breakfast like chickpea flour omelette.',
                    'Include quinoa and black bean combinations for complete amino acid profiles.',
                    'Add tempeh stir-fries for fermented protein benefits and probiotics.',
                    'Snack on roasted chickpeas between meals for sustained energy.',
                    'Blend protein smoothies post-workout for muscle recovery.',
                    'Incorporate chia seed puddings for omega-3 fatty acids.',
                    'Focus on whole food sources of plant-based proteins throughout the week.'
                ]
            },
            'low-carb-plan': {
                id: 'low-carb-plan',
                title: 'Low-Carb Vegan Delights',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Spinach and Mushroom Salad with Lemon Vinaigrette.jpg',
                prepTime: '7 days',
                servings: '21 meals',
                difficulty: 'Medium',
                calories: '1400-1800 kcal',
                description: 'Delicious low-carb meals that keep you satisfied with less than 30g carbs per meal, high fiber content, and blood sugar friendly options.',
                ingredients: [
                    'Leafy greens and low-carb vegetables',
                    'Avocados for healthy fats',
                    'Nuts and seeds for protein and fats',
                    'Coconut products for MCT oils',
                    'Zucchini and cauliflower as grain substitutes',
                    'Mushrooms for umami and nutrients',
                    'Herbs and spices for flavor without carbs'
                ],
                instructions: [
                    'Replace grains with spiralized vegetables like zucchini noodles.',
                    'Use cauliflower rice as a base for stir-fries and bowls.',
                    'Include plenty of leafy greens in every meal.',
                    'Add healthy fats from avocados, nuts, and seeds.',
                    'Focus on fiber-rich vegetables to maintain satiety.',
                    'Use herbs and spices liberally for flavor enhancement.',
                    'Keep net carbs under 30g per meal for optimal results.'
                ]
            },
            'budget-plan': {
                id: 'budget-plan',
                title: 'Budget-Friendly Vegan Eats',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Vegan Chili.jpg',
                prepTime: '7 days',
                servings: '21 meals',
                difficulty: 'Easy',
                calories: '1600-2000 kcal',
                description: 'Nutritious meals that won\'t break the bank, featuring pantry staples and bulk cooking tips for under $7 per day.',
                ingredients: [
                    'Dried beans and lentils in bulk',
                    'Rice, oats, and pasta as affordable grains',
                    'Seasonal vegetables for best prices',
                    'Frozen vegetables for convenience',
                    'Peanut butter for affordable protein',
                    'Bananas and seasonal fruits',
                    'Basic spices and herbs for flavor'
                ],
                instructions: [
                    'Buy dried beans and lentils in bulk and cook large batches.',
                    'Use seasonal vegetables when they\'re most affordable.',
                    'Prepare grain-based meals like rice and bean combinations.',
                    'Make large portions and use leftovers creatively.',
                    'Shop sales and stock up on non-perishable staples.',
                    'Use frozen vegetables when fresh is expensive.',
                    'Plan meals around what\'s on sale each week.'
                ]
            },
            'weight-loss-plan': {
                id: 'weight-loss-plan',
                title: 'Weight Loss Vegan Plan',
                category: 'meal-plan',
                image: './images/stories/Recipes/All Mealplan/Vegetable Stir-Fry.avif',
                prepTime: '7 days',
                servings: '21 meals',
                difficulty: 'Medium',
                calories: '1200-1600 kcal',
                description: 'Sustainable weight loss with satisfying plant-based meals featuring calorie controlled portions, high volume foods, and metabolism boosting ingredients.',
                ingredients: [
                    'High-volume, low-calorie vegetables',
                    'Lean plant proteins like tofu and tempeh',
                    'Fiber-rich foods for satiety',
                    'Metabolism-boosting spices like ginger and cayenne',
                    'Green tea and herbal teas',
                    'Fresh fruits for natural sweetness',
                    'Whole grains in controlled portions'
                ],
                instructions: [
                    'Fill half your plate with non-starchy vegetables.',
                    'Include lean plant proteins at every meal.',
                    'Drink green tea between meals to boost metabolism.',
                    'Use spices like ginger, cayenne, and turmeric liberally.',
                    'Eat high-fiber foods to increase satiety.',
                    'Control portions of calorie-dense foods like nuts and oils.',
                    'Stay hydrated and eat mindfully to support weight loss goals.'
                 ]
             },
            // Individual Meal Plan Recipes
            'quinoa-black-bean-salad': {
                id: 'quinoa-black-bean-salad',
                title: 'Quinoa Salad with Black Beans and Avocado',
                category: 'high-protein',
                image: './images/stories/Recipes/All Mealplan/Quinoa Salad with Black Beans and Avocado.jpg',
                prepTime: '25 minutes',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '420-480 kcal',
                description: 'Complete protein salad with healthy fats, providing 22g of protein with complete amino acids and heart-healthy nutrients.',
                ingredients: [
                    '1/2 cup cooked quinoa',
                    '1/2 cup black beans, rinsed and drained',
                    '1/2 avocado, diced',
                    '1/4 cup cherry tomatoes, halved',
                    '2 tablespoons red onion, finely diced',
                    '2 tablespoons fresh cilantro, chopped',
                    '1 tablespoon lime juice',
                    '1 tablespoon olive oil',
                    'Salt and pepper to taste'
                ],
                instructions: [
                    'Cook quinoa according to package directions and let cool.',
                    'In a large bowl, combine cooked quinoa and black beans.',
                    'Add diced avocado, cherry tomatoes, and red onion.',
                    'Whisk together lime juice, olive oil, salt, and pepper.',
                    'Pour dressing over the salad and toss gently.',
                    'Garnish with fresh cilantro.',
                    'Serve immediately or chill for 30 minutes for better flavor.'
                ]
            },
            'chia-pudding-berries': {
                id: 'chia-pudding-berries',
                title: 'Chia Seed Pudding with Berries',
                category: 'low-carb',
                image: './images/stories/Recipes/All Mealplan/Chia Seed Pudding with Berries.jpg',
                prepTime: '10 minutes + 4 hours chilling',
                servings: '1 serving',
                difficulty: 'Easy',
                calories: '220-280 kcal',
                description: 'Creamy pudding with antioxidant-rich berries, featuring only 8g net carbs and omega-3 rich chia seeds.',
                ingredients: [
                    '3 tablespoons chia seeds',
                    '1 cup unsweetened almond milk',
                    '1 tablespoon maple syrup or stevia to taste',
                    '1/2 teaspoon vanilla extract',
                    '1/4 cup mixed berries (strawberries, blueberries, raspberries)',
                    '1 tablespoon chopped almonds (optional)'
                ],
                instructions: [
                    'In a bowl, whisk together chia seeds, almond milk, maple syrup, and vanilla.',
                    'Let sit for 5 minutes, then whisk again to prevent clumping.',
                    'Cover and refrigerate for at least 4 hours or overnight.',
                    'Stir the pudding before serving to ensure smooth consistency.',
                    'Top with fresh berries and chopped almonds if desired.',
                    'Serve chilled as breakfast or a healthy dessert.'
                ]
            },
            'vegan-chili': {
                id: 'vegan-chili',
                title: 'Vegan Chili',
                category: 'budget-friendly',
                image: './images/stories/Recipes/All Mealplan/Vegan Chili.jpg',
                prepTime: '45 minutes',
                servings: '6 servings',
                difficulty: 'Easy',
                calories: '320-380 kcal',
                description: 'Hearty chili that feeds the whole family for just $1.30 per serving. Freezer-friendly and high in protein.',
                ingredients: [
                    '2 cans (15 oz each) kidney beans, drained and rinsed',
                    '1 can (15 oz) black beans, drained and rinsed',
                    '1 can (28 oz) crushed tomatoes',
                    '1 large onion, diced',
                    '3 cloves garlic, minced',
                    '1 bell pepper, diced',
                    '2 tablespoons chili powder',
                    '1 tablespoon cumin',
                    '1 teaspoon smoked paprika',
                    '1/2 teaspoon cayenne pepper (optional)',
                    '2 cups vegetable broth',
                    'Salt and pepper to taste',
                    '2 tablespoons olive oil'
                ],
                instructions: [
                    'Heat olive oil in a large pot over medium heat.',
                    'Add onion and bell pepper, cook for 5 minutes until softened.',
                    'Add garlic and cook for another minute.',
                    'Stir in chili powder, cumin, paprika, and cayenne.',
                    'Add crushed tomatoes, beans, and vegetable broth.',
                    'Bring to a boil, then reduce heat and simmer for 30 minutes.',
                    'Season with salt and pepper to taste.',
                    'Serve hot with cornbread or over rice.'
                ]
            }
          };
        this.init();
    }

    init() {
        this.loadRecipeFromURL();
        this.initBadgeButtons();
        this.initBackNavigation();
    }

    initBadgeButtons() {
        const badgeButtons = document.querySelectorAll('.badge-button');
        badgeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const target = e.currentTarget.getAttribute('data-target');
                const section = e.currentTarget.getAttribute('data-section');
                this.navigateToSection(target, section);
            });
        });
    }

    initBackNavigation() {
        const backBtn = document.querySelector('.back-btn');
        const backArrowIcon = document.querySelector('.back-arrow-icon');
        
        if (backBtn) {
            backBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleBackNavigation();
            });
        }
        
        if (backArrowIcon) {
            backArrowIcon.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleBackNavigation();
            });
        }
    }

    handleBackNavigation() {
        // Check if there's a stored previous page
        const previousPage = localStorage.getItem('previousPage');
        const referrer = document.referrer;
        
        // Determine the appropriate back destination
        let backUrl = 'src/pages/recipes.html'; // default
        
        if (previousPage) {
            backUrl = previousPage;
        } else if (referrer) {
            // Parse referrer to determine appropriate page
            if (referrer.includes('meal-plan')) {
                backUrl = 'meal-plan.html';
            } else if (referrer.includes('cuisine')) {
                backUrl = 'cuisine.html';
            } else if (referrer.includes('recipes')) {
                backUrl = 'src/pages/recipes.html';
            }
        }
        
        // Add smooth transition
        document.body.style.opacity = '0.8';
        setTimeout(() => {
            window.location.href = backUrl;
        }, 200);
    }

    navigateToSection(target, section) {
        // Store current page for back navigation
        localStorage.setItem('previousPage', window.location.pathname);
        
        let targetUrl = '';
        
        switch(target) {
            case 'recipes':
                targetUrl = 'src/pages/recipes.html';
                break;
            case 'meal-plan':
                targetUrl = 'src/pages/meal-plan.html';
                break;
            case 'cuisine':
                targetUrl = 'src/pages/cuisine.html';
                break;
            case 'community':
                targetUrl = 'community.html';
                break;
            default:
                return;
        }

        // Add smooth transition effect
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '0.7';
        
        setTimeout(() => {
            if (section && section !== target) {
                // Navigate to page with section anchor
                window.location.href = `${targetUrl}#${section}`;
            } else {
                // Navigate to page
                window.location.href = targetUrl;
            }
        }, 150);
    }

    loadRecipeFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const recipeSlug = urlParams.get('recipe');
        const recipeId = urlParams.get('id');
        const mealPlanId = urlParams.get('mealPlanId');
        
        let recipe = null;
        
        // Try to find recipe by slug first, then by ID, then by mealPlanId
        if (recipeSlug && this.recipes[recipeSlug]) {
            recipe = this.recipes[recipeSlug];
        } else if (recipeId && this.recipes[recipeId]) {
            // Find recipe by ID directly using the ID as key
            recipe = this.recipes[recipeId];
        } else if (mealPlanId && this.recipes[mealPlanId]) {
            // Find recipe by meal plan ID
            recipe = this.recipes[mealPlanId];
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
            recipeImage.style.opacity = '0';
            
            // Adjust image path based on current location
            let imagePath = recipe.image;
            const currentPath = window.location.pathname;
            
            // If we're in a subdirectory (like src/pages/), adjust the path
            if (currentPath.includes('/src/pages/') && imagePath.startsWith('./images/')) {
                imagePath = imagePath.replace('./images/', '../../images/');
            }
            
            recipeImage.src = imagePath;
            recipeImage.alt = recipe.title;
            
            // Add error handling and smooth loading
            recipeImage.onerror = function() {
                const fallbackPath = currentPath.includes('/src/pages/') ? '../../images/placeholder-recipe.svg' : './images/placeholder-recipe.svg';
                this.src = fallbackPath;
                this.alt = 'Recipe image not available';
            };
            
            recipeImage.onload = function() {
                this.style.opacity = '1';
            };
        }

        const recipeCategory = document.getElementById('recipe-category');
        if (recipeCategory) {
            // Get source from URL parameters or localStorage
            const urlParams = new URLSearchParams(window.location.search);
            const source = urlParams.get('source') || localStorage.getItem('recipeSource') || 'recipes';
            
            let categoryFormat = '';
            switch(source) {
                case 'meal-plan':
                    categoryFormat = `MEAL PLAN / RECIPE`;
                    break;
                case 'cuisine':
                    categoryFormat = `CUISINE / RECIPE`;
                    break;
                case 'community':
                    categoryFormat = `COMMUNITY / RECIPE`;
                    break;
                case 'recipes':
                default:
                    categoryFormat = `RECIPE / ${recipe.category.toUpperCase()}`;
                    break;
            }
            
            recipeCategory.textContent = categoryFormat;
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
                
                // Highlight amounts in ingredients
                const highlightedIngredient = ingredient.replace(
                    /^([\d\/\s]+(?:cup|cups|tablespoon|tablespoons|tbsp|tsp|teaspoon|teaspoons|slice|slices|can|ounces|oz|clove|cloves|pound|pounds|lb|lbs|gram|grams|g|kilogram|kilograms|kg|liter|liters|l|milliliter|milliliters|ml|inch|inches|piece|pieces)?)\s*/i,
                    '<strong>$1</strong> '
                );
                
                li.innerHTML = `<span class="ingredient-text">${highlightedIngredient}</span>`;
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
                li.innerHTML = `<span class="instruction-text"><strong>Step ${index + 1}:</strong> ${instruction}</span>`;
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