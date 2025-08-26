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
                image: './images/stories/Recipes/All Cuisines/General Tsos Cauliflower.jpg',
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