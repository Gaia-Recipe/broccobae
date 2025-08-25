// Cuisine Page JavaScript

class CuisineManager {
    constructor() {
        this.recipes = [];
        this.filteredRecipes = [];
        this.currentFilter = 'all';
        this.displayedCount = 10;
        this.totalRecipes = 0;
        this.init();
    }

    init() {
        this.generateRecipes();
        this.filteredRecipes = [...this.recipes];
        this.setupEventListeners();
        this.displayRecipes();
        this.updateRecipeCount();
    }

    generateRecipes() {
        this.recipes = [
            // Asian Vegan Recipes
            {
                id: 'vegan-vegetable-stir-fry',
                title: 'Vegan Vegetable Stir-Fry',
                category: 'asian',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Bibimbap (Korean).webp',
                duration: '20 mins',
                difficulty: 'Easy',
                rating: 4.8,
                description: 'A colorful and nutritious stir-fry packed with fresh vegetables and Asian flavors.'
            },
            {
                id: 'tofu-teriyaki',
                title: 'Tofu Teriyaki',
                category: 'asian',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Teriyaki Tofu.webp',
                duration: '25 mins',
                difficulty: 'Easy',
                rating: 4.7,
                description: 'Crispy tofu glazed with homemade teriyaki sauce, perfect over rice.'
            },
            {
                id: 'vegan-sushi-rolls',
                title: 'Vegan Sushi Rolls',
                category: 'asian',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Sushi Rolls.jpg',
                duration: '45 mins',
                difficulty: 'Medium',
                rating: 4.9,
                description: 'Fresh and colorful sushi rolls filled with vegetables and avocado.'
            },
            {
                id: 'vegetable-spring-rolls',
                title: 'Vegetable Spring Rolls',
                category: 'asian',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Spring Rolls (Vietnamese).jpg',
                duration: '30 mins',
                difficulty: 'Medium',
                rating: 4.6,
                description: 'Light and refreshing Vietnamese spring rolls with fresh herbs and vegetables.'
            },
            {
                id: 'vegan-ramen',
                title: 'Vegan Ramen',
                category: 'asian',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Ramen.jpg',
                duration: '40 mins',
                difficulty: 'Medium',
                rating: 4.8,
                description: 'Rich and flavorful ramen with plant-based broth and fresh toppings.'
            },
            {
                id: 'miso-soup-tofu',
                title: 'Miso Soup with Tofu',
                category: 'asian',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Miso Soup.jpg',
                duration: '15 mins',
                difficulty: 'Easy',
                rating: 4.5,
                description: 'Traditional Japanese miso soup with silky tofu and wakame seaweed.'
            },
            {
                id: 'thai-green-curry',
                title: 'Thai Green Curry with Vegetables',
                category: 'asian',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Thai Green Curry.jpg',
                duration: '35 mins',
                difficulty: 'Medium',
                rating: 4.9,
                description: 'Aromatic Thai green curry with coconut milk and fresh vegetables.'
            },
            {
                id: 'vegan-fried-rice',
                title: 'Vegan Fried Rice',
                category: 'asian',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Pad Thai.jpg',
                duration: '20 mins',
                difficulty: 'Easy',
                rating: 4.7,
                description: 'Classic fried rice with vegetables and plant-based protein.'
            },
            {
                id: 'kimchi-fried-rice',
                title: 'Kimchi Fried Rice (Vegan)',
                category: 'asian',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Bibimbap (Korean).webp',
                duration: '25 mins',
                difficulty: 'Easy',
                rating: 4.6,
                description: 'Spicy and tangy Korean fried rice with fermented kimchi.'
            },
            {
                id: 'vegan-pad-thai',
                title: 'Vegan Pad Thai',
                category: 'asian',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Pad Thai.jpg',
                duration: '30 mins',
                difficulty: 'Medium',
                rating: 4.8,
                description: 'Sweet and tangy Thai noodle dish with tamarind and peanuts.'
            },
            {
                id: 'vegan-adobo',
                title: 'Vegan Adobo (Tofu & Mushroom Adobo)',
                category: 'asian',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Adobo (Tofu & Mushroom Adobo).avif',
                duration: '45 mins',
                difficulty: 'Medium',
                rating: 4.7,
                description: 'Filipino-style adobo with tofu and mushrooms in savory sauce.'
            },
            {
                id: 'vegan-sinigang',
                title: 'Vegan Sinigang (Tamarind Soup with Vegetables)',
                category: 'asian',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Pho (Vietnamese Noodle Soup).jpg',
                duration: '40 mins',
                difficulty: 'Medium',
                rating: 4.6,
                description: 'Sour and savory Filipino soup with tamarind and fresh vegetables.'
            },
            {
                id: 'vegan-kare-kare',
                title: 'Vegan Kare-Kare (Peanut Stew)',
                category: 'asian',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Kare-Kare (Peanut Stew).avif',
                duration: '50 mins',
                difficulty: 'Medium',
                rating: 4.8,
                description: 'Rich Filipino peanut stew with vegetables and savory sauce.'
            },
            {
                id: 'vegan-laing',
                title: 'Vegan Laing (Taro Leaves in Coconut Milk)',
                category: 'asian',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Laing (Taro Leaves in Coconut Milk).jpg',
                duration: '35 mins',
                difficulty: 'Medium',
                rating: 4.5,
                description: 'Creamy Filipino dish with taro leaves cooked in coconut milk.'
            },
            {
                id: 'vegan-pancit-bihon',
                title: 'Vegan Pancit Bihon (Rice Noodle Stir-Fry)',
                category: 'asian',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Pancit Bihon (Rice Noodle Stir-Fry).webp',
                duration: '30 mins',
                difficulty: 'Easy',
                rating: 4.7,
                description: 'Filipino rice noodle stir-fry with vegetables and savory seasonings.'
            },
            
            // Mediterranean Vegan Recipes
            {
                id: 'vegan-falafel',
                title: 'Vegan Falafel',
                category: 'mediterranean',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Falafel.png',
                duration: '30 mins',
                difficulty: 'Medium',
                rating: 4.8,
                description: 'Crispy and flavorful Middle Eastern chickpea fritters.'
            },
            {
                id: 'hummus',
                title: 'Hummus',
                category: 'mediterranean',
                image: '../../images/stories/Recipes/All Cuisines/Hummus (Classic Chickpea Dip).jpg',
                duration: '10 mins',
                difficulty: 'Easy',
                rating: 4.9,
                description: 'Creamy and smooth chickpea dip with tahini and lemon.'
            },
            {
                id: 'baba-ganoush',
                title: 'Baba Ganoush',
                category: 'mediterranean',
                image: '../../images/stories/Recipes/All Cuisines/Baba Ganoush (Eggplant Dip).jpg',
                duration: '25 mins',
                difficulty: 'Easy',
                rating: 4.7,
                description: 'Smoky roasted eggplant dip with garlic and tahini.'
            },
            {
                id: 'vegan-tabbouleh',
                title: 'Vegan Tabbouleh',
                category: 'mediterranean',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Tabbouleh.jpeg',
                duration: '15 mins',
                difficulty: 'Easy',
                rating: 4.6,
                description: 'Fresh parsley salad with tomatoes, mint, and bulgur wheat.'
            },
            {
                id: 'vegan-stuffed-grape-leaves',
                title: 'Vegan Stuffed Grape Leaves (Dolmas)',
                category: 'mediterranean',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Stuffed Grape Leaves (Dolmas).jpg',
                duration: '60 mins',
                difficulty: 'Hard',
                rating: 4.8,
                description: 'Traditional grape leaves stuffed with rice and herbs.'
            },
            {
                id: 'vegan-ratatouille',
                title: 'Vegan Ratatouille',
                category: 'mediterranean',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Ratatouille (French Provençal Stew).webp',
                duration: '45 mins',
                difficulty: 'Medium',
                rating: 4.7,
                description: 'Classic French vegetable stew with herbs de Provence.'
            },
            {
                id: 'vegan-greek-salad',
                title: 'Vegan Greek Salad',
                category: 'mediterranean',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Greek Salad.jpg',
                duration: '15 mins',
                difficulty: 'Easy',
                rating: 4.5,
                description: 'Fresh Mediterranean salad with olives, tomatoes, and vegan feta.'
            },
            {
                id: 'vegan-spanakopita',
                title: 'Vegan Spanakopita',
                category: 'mediterranean',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Spanakopita (Spinach Pie).jpg',
                duration: '50 mins',
                difficulty: 'Medium',
                rating: 4.8,
                description: 'Flaky phyllo pastry filled with spinach and herbs.'
            },
            {
                id: 'vegan-pita-olive-tapenade',
                title: 'Vegan Pita Bread with Olive Tapenade',
                category: 'mediterranean',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Pita Bread with Olive Tapenade.jpg',
                duration: '20 mins',
                difficulty: 'Easy',
                rating: 4.6,
                description: 'Warm pita bread served with rich olive and herb spread.'
            },
            {
                id: 'vegan-fattoush-salad',
                title: 'Vegan Fattoush Salad',
                category: 'mediterranean',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Fattoush Salad.jpeg',
                duration: '20 mins',
                difficulty: 'Easy',
                rating: 4.7,
                description: 'Lebanese bread salad with fresh vegetables and sumac.'
            },
            {
                id: 'mujadara',
                title: 'Mujadara (Lentils & Rice with Caramelized Onions)',
                category: 'mediterranean',
                image: '../../images/stories/Recipes/All Cuisines/Mujadara (Lentils & Rice with Caramelized Onions).jpg',
                duration: '40 mins',
                difficulty: 'Medium',
                rating: 4.8,
                description: 'Comforting Middle Eastern dish with lentils, rice, and caramelized onions.'
            },
            {
                id: 'vegan-shawarma',
                title: 'Vegan Shawarma (Chickpea Style)',
                category: 'mediterranean',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Shawarma (Chickpea Style).webp',
                duration: '35 mins',
                difficulty: 'Medium',
                rating: 4.9,
                description: 'Spiced chickpea shawarma with tahini sauce and fresh vegetables.'
            },
            {
                id: 'vegan-paella',
                title: 'Vegan Paella',
                category: 'mediterranean',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Paella (Spanish Rice Dish).jpg',
                duration: '45 mins',
                difficulty: 'Medium',
                rating: 4.8,
                description: 'Spanish rice dish with saffron, vegetables, and plant-based protein.'
            },
            {
                id: 'vegan-bruschetta',
                title: 'Vegan Bruschetta',
                category: 'mediterranean',
                image: '../../images/stories/Recipes/All Cuisines/Vegan Bruschetta.jpg',
                duration: '15 mins',
                difficulty: 'Easy',
                rating: 4.6,
                description: 'Toasted bread topped with fresh tomatoes, basil, and garlic.'
            },
            {
                 id: 'vegan-roasted-vegetable-couscous',
                 title: 'Vegan Roasted Vegetable Couscous',
                 category: 'mediterranean',
                 image: '../../images/stories/Recipes/All Cuisines/Vegan Roasted Vegetable Couscous.webp',
                 duration: '35 mins',
                 difficulty: 'Easy',
                 rating: 4.7,
                 description: 'Fluffy couscous with roasted Mediterranean vegetables and herbs.'
             },
             
             // Indian Vegan Recipes
             {
                 id: 'chana-masala',
                 title: 'Chana Masala',
                 category: 'indian',
                 image: '../../images/stories/Recipes/All Cuisines/Chana Masala (Chickpea Curry).jpg',
                 duration: '30 mins',
                 difficulty: 'Medium',
                 rating: 4.9,
                 description: 'Spicy and aromatic chickpea curry with traditional Indian spices.'
             },
             {
                 id: 'aloo-gobi',
                 title: 'Aloo Gobi',
                 category: 'indian',
                 image: '../../images/stories/Recipes/All Cuisines/Aloo Gobi (Potato & Cauliflower Curry).jpg',
                 duration: '25 mins',
                 difficulty: 'Easy',
                 rating: 4.7,
                 description: 'Classic Indian potato and cauliflower curry with turmeric and spices.'
             },
             {
                 id: 'baingan-bharta',
                 title: 'Baingan Bharta',
                 category: 'indian',
                 image: '../../images/stories/Recipes/All Cuisines/Baingan Bharta (Smoky Mashed Eggplant).jpg',
                 duration: '40 mins',
                 difficulty: 'Medium',
                 rating: 4.8,
                 description: 'Smoky roasted eggplant mash with onions, tomatoes, and spices.'
             },
             {
                 id: 'tofu-paneer-butter-masala',
                 title: 'Tofu "Paneer" Butter Masala',
                 category: 'indian',
                 image: '../../images/stories/Recipes/All Cuisines/Tofu "Paneer" Butter Masala.jpg',
                 duration: '35 mins',
                 difficulty: 'Medium',
                 rating: 4.9,
                 description: 'Creamy tomato-based curry with marinated tofu in rich butter masala sauce.'
             },
             {
                 id: 'vegan-biryani',
                 title: 'Vegan Biryani',
                 category: 'indian',
                 image: '../../images/stories/Recipes/All Cuisines/Vegan Biryani.webp',
                 duration: '60 mins',
                 difficulty: 'Hard',
                 rating: 4.8,
                 description: 'Fragrant basmati rice layered with vegetables and aromatic spices.'
             },
             {
                 id: 'masoor-dal',
                 title: 'Masoor Dal',
                 category: 'indian',
                 image: '../../images/stories/Recipes/All Cuisines/Masoor Dal (Red Lentil Curry).jpg',
                 duration: '25 mins',
                 difficulty: 'Easy',
                 rating: 4.6,
                 description: 'Comforting red lentil curry with turmeric, cumin, and fresh herbs.'
             },
             {
                 id: 'tofu-tikka-masala',
                 title: 'Tofu Tikka Masala',
                 category: 'indian',
                 image: '../../images/stories/Recipes/All Cuisines/Tofu Tikka Masala.jpg',
                 duration: '40 mins',
                 difficulty: 'Medium',
                 rating: 4.8,
                 description: 'Marinated tofu in creamy tomato-based tikka masala sauce.'
             },
             {
                 id: 'vegetable-samosas',
                 title: 'Vegetable Samosas',
                 category: 'indian',
                 image: '../../images/stories/Recipes/All Cuisines/Vegetable Samosas.jpg',
                 duration: '45 mins',
                 difficulty: 'Medium',
                 rating: 4.7,
                 description: 'Crispy pastry triangles filled with spiced potatoes and peas.'
             },
             {
                 id: 'vegan-palak-tofu',
                 title: 'Vegan Palak Tofu',
                 category: 'indian',
                 image: '../../images/stories/Recipes/All Cuisines/Vegan Palak Tofu (Spinach Curry).jpg',
                 duration: '30 mins',
                 difficulty: 'Medium',
                 rating: 4.8,
                 description: 'Creamy spinach curry with cubes of marinated tofu.'
             },
             {
                 id: 'chole-bhature-vegan',
                 title: 'Chole Bhature (Vegan Version)',
                 category: 'indian',
                 image: '../../images/stories/Recipes/All Cuisines/Chana Masala (Chickpea Curry).jpg',
                 duration: '50 mins',
                 difficulty: 'Hard',
                 rating: 4.9,
                 description: 'Spicy chickpea curry served with fluffy fried bread.'
             },
             {
                 id: 'vegan-malai-kofta',
                 title: 'Vegan Malai Kofta',
                 category: 'indian',
                 image: '../../images/stories/Recipes/All Cuisines/Vegan Malai Kofta.jpg',
                 duration: '45 mins',
                 difficulty: 'Hard',
                 rating: 4.8,
                 description: 'Vegetable and cashew dumplings in rich creamy tomato sauce.'
             },
             {
                 id: 'vegetable-pakoras',
                 title: 'Vegetable Pakoras',
                 category: 'indian',
                 image: '../../images/stories/Recipes/All Cuisines/Vegetable Pakoras (Fritters).jpg',
                 duration: '20 mins',
                 difficulty: 'Easy',
                 rating: 4.6,
                 description: 'Crispy chickpea flour fritters with mixed vegetables and spices.'
             },
             {
                 id: 'vegan-korma',
                 title: 'Vegan Korma',
                 category: 'indian',
                 image: '../../images/stories/Recipes/All Cuisines/Vegan Korma (Creamy Curry).jpg',
                 duration: '35 mins',
                 difficulty: 'Medium',
                 rating: 4.7,
                 description: 'Mild and creamy curry with vegetables in coconut and cashew sauce.'
             },
             {
                 id: 'tamarind-rice',
                 title: 'Tamarind Rice (Puliyodarai)',
                 category: 'indian',
                 image: '../../images/stories/Recipes/All Cuisines/Tamarind Rice (Puliyodarai).jpg',
                 duration: '25 mins',
                 difficulty: 'Easy',
                 rating: 4.5,
                 description: 'Tangy South Indian rice dish with tamarind and aromatic spices.'
             },
             {
                 id: 'vegan-idli-coconut-chutney',
                 title: 'Vegan Idli with Coconut Chutney',
                 category: 'indian',
                 image: '../../images/stories/Recipes/All Cuisines/Vegan Idli with Coconut Chutney.webp',
                 duration: '30 mins',
                 difficulty: 'Medium',
                 rating: 4.7,
                 description: 'Steamed rice cakes served with fresh coconut chutney.'
             },
             {
                  id: 'vegan-pani-puri',
                  title: 'Vegan Pani Puri (Gol Gappa)',
                  category: 'indian',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Pani Puri (Gol Gappa).avif',
                  duration: '40 mins',
                  difficulty: 'Medium',
                  rating: 4.8,
                  description: 'Crispy hollow puris filled with spiced water, chutneys, and potatoes.'
              },
              
              // American Vegan Recipes
              {
                  id: 'vegan-mac-and-cheese',
                  title: 'Vegan Mac and Cheese',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Mac and Cheese.jpg',
                  duration: '25 mins',
                  difficulty: 'Easy',
                  rating: 4.8,
                  description: 'Creamy and cheesy pasta made with cashew-based cheese sauce.'
              },
              {
                  id: 'bbq-jackfruit-sandwich',
                  title: 'BBQ Jackfruit Sandwich',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/BBQ Jackfruit Sandwich.jpg',
                  duration: '30 mins',
                  difficulty: 'Medium',
                  rating: 4.9,
                  description: 'Pulled jackfruit in tangy BBQ sauce served on a toasted bun.'
              },
              {
                  id: 'vegan-chili',
                  title: 'Vegan Chili',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Chili 19.17.56.jpg',
                  duration: '45 mins',
                  difficulty: 'Easy',
                  rating: 4.7,
                  description: 'Hearty and warming chili with beans, vegetables, and spices.'
              },
              {
                  id: 'sweet-potato-black-bean-burgers',
                  title: 'Sweet Potato Black Bean Burgers',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/Sweet Potato Black Bean Burgers.jpg',
                  duration: '35 mins',
                  difficulty: 'Medium',
                  rating: 4.8,
                  description: 'Nutritious and flavorful burgers with sweet potato and black beans.'
              },
              {
                  id: 'vegan-cornbread',
                  title: 'Vegan Cornbread',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Cornbread.jpg',
                  duration: '30 mins',
                  difficulty: 'Easy',
                  rating: 4.6,
                  description: 'Moist and slightly sweet cornbread perfect as a side dish.'
              },
              {
                  id: 'vegan-pancakes',
                  title: 'Vegan Pancakes',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Pancakes.jpg',
                  duration: '20 mins',
                  difficulty: 'Easy',
                  rating: 4.7,
                  description: 'Fluffy and delicious pancakes made without eggs or dairy.'
              },
              {
                  id: 'vegan-sloppy-joes',
                  title: 'Vegan Sloppy Joes',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Sloppy Joes.jpg',
                  duration: '25 mins',
                  difficulty: 'Easy',
                  rating: 4.5,
                  description: 'Classic comfort food with lentils in tangy tomato sauce.'
              },
              {
                  id: 'vegan-buffalo-cauliflower-wings',
                  title: 'Vegan Buffalo Cauliflower Wings',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Buffalo Cauliflower Wings.webp',
                  duration: '35 mins',
                  difficulty: 'Medium',
                  rating: 4.8,
                  description: 'Spicy and crispy cauliflower wings with buffalo sauce.'
              },
              {
                  id: 'vegan-mashed-potatoes',
                  title: 'Vegan Mashed Potatoes',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Mashed Potatoes.jpg',
                  duration: '25 mins',
                  difficulty: 'Easy',
                  rating: 4.6,
                  description: 'Creamy and buttery mashed potatoes made with plant-based milk.'
              },
              {
                  id: 'vegan-gravy',
                  title: 'Vegan Gravy',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Gravy.jpg',
                  duration: '15 mins',
                  difficulty: 'Easy',
                  rating: 4.5,
                  description: 'Rich and savory gravy perfect for mashed potatoes and roasts.'
              },
              {
                  id: 'vegan-gumbo',
                  title: 'Vegan Gumbo',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Gumbo.jpg',
                  duration: '60 mins',
                  difficulty: 'Hard',
                  rating: 4.9,
                  description: 'Louisiana-style stew with okra, vegetables, and Creole spices.'
              },
              {
                  id: 'vegan-baked-beans',
                  title: 'Vegan Baked Beans',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Baked Beans.jpeg',
                  duration: '40 mins',
                  difficulty: 'Easy',
                  rating: 4.6,
                  description: 'Sweet and smoky baked beans perfect for BBQs and picnics.'
              },
              {
                  id: 'vegan-collard-greens',
                  title: 'Vegan Collard Greens',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Collard Greens.jpg',
                  duration: '45 mins',
                  difficulty: 'Easy',
                  rating: 4.5,
                  description: 'Southern-style collard greens cooked with onions and spices.'
              },
              {
                  id: 'vegan-apple-pie',
                  title: 'Vegan Apple Pie',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Apple Pie.jpg',
                  duration: '90 mins',
                  difficulty: 'Hard',
                  rating: 4.8,
                  description: 'Classic American apple pie with flaky crust and cinnamon filling.'
              },
              {
                  id: 'vegan-creamy-garlic-pasta',
                  title: 'Vegan Creamy Garlic Pasta',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Creamy Garlic Pasta.jpg',
                  duration: '20 mins',
                  difficulty: 'Easy',
                  rating: 4.7,
                  description: 'Rich and creamy pasta with roasted garlic and herbs.'
              },
              {
                  id: 'vegan-stuffed-bell-peppers',
                  title: 'Vegan Stuffed Bell Peppers',
                  category: 'american',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Stuffed Bell Peppers.jpg',
                  duration: '50 mins',
                  difficulty: 'Medium',
                  rating: 4.7,
                  description: 'Bell peppers stuffed with quinoa, vegetables, and herbs.'
              },
              
              // Mexican Vegan Recipes
              {
                  id: 'vegan-tacos-de-nopales',
                  title: 'Vegan Tacos de Nopales',
                  category: 'mexican',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Tacos de Nopales (Cactus Tacos).jpg',
                  duration: '25 mins',
                  difficulty: 'Medium',
                  rating: 4.7,
                  description: 'Traditional Mexican cactus tacos with onions and spices.'
              },
              {
                  id: 'vegan-elote',
                  title: 'Vegan Elote (Mexican Street Corn)',
                  category: 'mexican',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Elote (Mexican Street Corn).jpg',
                  duration: '15 mins',
                  difficulty: 'Easy',
                  rating: 4.8,
                  description: 'Grilled corn with vegan mayo, chili powder, and lime.'
              },
              {
                  id: 'vegan-chiles-rellenos',
                  title: 'Vegan Chiles Rellenos',
                  category: 'mexican',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Chiles Rellenos.jpg',
                  duration: '45 mins',
                  difficulty: 'Hard',
                  rating: 4.9,
                  description: 'Roasted poblano peppers stuffed with vegan cheese and battered.'
              },
              {
                  id: 'vegan-pozole-rojo',
                  title: 'Vegan Pozole Rojo',
                  category: 'mexican',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Pozole Rojo.jpg',
                  duration: '60 mins',
                  difficulty: 'Medium',
                  rating: 4.8,
                  description: 'Traditional Mexican hominy soup with red chili broth.'
              },
              {
                  id: 'vegan-tostadas',
                  title: 'Vegan Tostadas',
                  category: 'mexican',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Tostadas.jpg',
                  duration: '20 mins',
                  difficulty: 'Easy',
                  rating: 4.6,
                  description: 'Crispy tortillas topped with beans, vegetables, and salsa.'
              },
              {
                  id: 'vegan-tamales',
                  title: 'Vegan Tamales',
                  category: 'mexican',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Tamales.jpg',
                  duration: '120 mins',
                  difficulty: 'Hard',
                  rating: 4.9,
                  description: 'Traditional steamed corn masa filled with vegetables and spices.'
              },
              {
                  id: 'vegan-sopa-de-tortilla',
                  title: 'Vegan Sopa de Tortilla',
                  category: 'mexican',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Sopa de Tortilla (Tortilla Soup).jpg',
                  duration: '35 mins',
                  difficulty: 'Medium',
                  rating: 4.7,
                  description: 'Mexican tortilla soup with tomatoes, chilies, and crispy tortilla strips.'
              },
              {
                  id: 'vegan-quesadillas-cashew-cheese',
                  title: 'Vegan Quesadillas with Cashew Cheese',
                  category: 'mexican',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Quesadillas with Cashew Cheese.jpg',
                  duration: '20 mins',
                  difficulty: 'Easy',
                  rating: 4.8,
                  description: 'Crispy quesadillas filled with homemade cashew cheese and vegetables.'
              },
              {
                  id: 'vegan-enchiladas-verdes',
                  title: 'Vegan Enchiladas Verdes',
                  category: 'mexican',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Enchiladas Verdes.jpg',
                  duration: '40 mins',
                  difficulty: 'Medium',
                  rating: 4.8,
                  description: 'Corn tortillas filled with vegetables and topped with green salsa.'
              },
              {
                  id: 'vegan-gorditas',
                  title: 'Vegan Gorditas',
                  category: 'mexican',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Gorditas.jpg',
                  duration: '35 mins',
                  difficulty: 'Medium',
                  rating: 4.6,
                  description: 'Thick corn tortillas stuffed with beans and vegetables.'
              },
              {
                  id: 'vegan-flautas',
                  title: 'Vegan Flautas',
                  category: 'mexican',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Flautas.jpg',
                  duration: '30 mins',
                  difficulty: 'Medium',
                  rating: 4.7,
                  description: 'Crispy rolled tortillas filled with seasoned vegetables.'
              },
              {
                  id: 'vegan-mexican-rice',
                  title: 'Vegan Mexican Rice',
                  category: 'mexican',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Mexican Rice.jpg',
                  duration: '25 mins',
                  difficulty: 'Easy',
                  rating: 4.5,
                  description: 'Flavorful rice cooked with tomatoes, onions, and Mexican spices.'
              },
              {
                  id: 'vegan-churros',
                  title: 'Vegan Churros',
                  category: 'mexican',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Churros.jpg',
                  duration: '30 mins',
                  difficulty: 'Medium',
                  rating: 4.8,
                  description: 'Crispy fried dough pastries rolled in cinnamon sugar.'
              },
              {
                  id: 'vegan-esquites',
                  title: 'Vegan Esquites (Corn in a Cup)',
                  category: 'mexican',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Esquites (Corn in a Cup).jpg',
                  duration: '15 mins',
                  difficulty: 'Easy',
                  rating: 4.6,
                  description: 'Mexican street corn served in a cup with lime and chili.'
              },
              {
                  id: 'vegan-mole-poblano-tofu',
                  title: 'Vegan Mole Poblano with Tofu',
                  category: 'mexican',
                  image: '../../images/stories/Recipes/All Cuisines/Vegan Mole Poblano with Tofu.jpeg',
                  duration: '90 mins',
                  difficulty: 'Hard',
                  rating: 4.9,
                  description: 'Complex Mexican sauce with chocolate and chilies served over tofu.'
              }
          ];
          this.totalRecipes = this.recipes.length;
      }

    setupEventListeners() {
        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.filterRecipes(filter);
                
                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMoreRecipes();
            });
        }

        // Recipe card clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.cuisine-card') && !e.target.closest('.favorite-btn')) {
                const card = e.target.closest('.cuisine-card');
                const recipeId = card.dataset.id;
                if (recipeId) {
                    this.showRecipeDetails(recipeId);
                }
            }
        });

        // Cuisine spotlight button
        const spotlightBtn = document.querySelector('.spotlight-text .btn');
        if (spotlightBtn) {
            spotlightBtn.addEventListener('click', () => {
                this.filterRecipes('indian');
                document.querySelector('.cuisine-categories').scrollIntoView({ behavior: 'smooth' });
            });
        }
    }

    filterRecipes(filter) {
        this.currentFilter = filter;
        this.displayedCount = 10;
        
        if (filter === 'all') {
            this.filteredRecipes = [...this.recipes];
        } else {
            this.filteredRecipes = this.recipes.filter(recipe => 
                recipe.category.toLowerCase() === filter.toLowerCase()
            );
        }
        
        this.displayRecipes();
        this.updateRecipeCount();
    }

    displayRecipes() {
        const grid = document.querySelector('.cuisine-grid');
        if (!grid) return;

        // Clear existing content
        grid.innerHTML = '';

        if (this.filteredRecipes.length === 0) {
            this.displayEmptyState();
            return;
        }

        // Create recipe cards
        this.filteredRecipes.forEach(recipe => {
            const card = this.createRecipeCard(recipe);
            grid.appendChild(card);
        });

        // Load favorite states after rendering
        setTimeout(() => loadFavoriteStates(), 100);
    }

    createRecipeCard(recipe) {
        const card = document.createElement('div');
        card.className = 'cuisine-card';
        card.dataset.id = recipe.id;
        card.dataset.category = recipe.category;

        card.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                <div class="recipe-overlay">
                    <button class="favorite-btn" onclick="toggleFavorite(this)">
                        <i class="far fa-heart"></i>
                    </button>
                    <div class="recipe-category-text">${recipe.category.toUpperCase().replace('-', ' ')}</div>
                    <div class="recipe-actions">
                        <button class="recipe-btn view-recipe" onclick="window.location.href='recipe.html?id=${recipe.id}'">
                            View Recipe
                        </button>
                    </div>
                </div>
            </div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <div class="recipe-meta">
                    <span class="recipe-duration">
                        <i class="far fa-clock"></i>
                        ${recipe.duration}
                    </span>
                    <span class="recipe-difficulty">
                        <i class="fas fa-signal"></i>
                        ${recipe.difficulty}
                    </span>
                    <span class="recipe-rating">
                        <i class="fas fa-star"></i>
                        ${recipe.rating}
                    </span>
                </div>
                <p class="recipe-description">${recipe.description}</p>
            </div>
        `;

        return card;
    }

    loadMoreRecipes() {
        // Load more functionality removed - showing empty state
        this.displayEmptyState();
    }

    updateRecipeCount() {
        const countElement = document.querySelector('.cuisine-count');
        if (countElement) {
            const total = this.recipes.length;
            const showing = this.filteredRecipes.length;
            countElement.textContent = `Showing ${showing} of ${total} recipes`;
        }
    }

    showRecipeDetails(recipeId) {
        // Recipe details removed
        console.log('Recipe details not available');
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
    const card = button.closest('.cuisine-card');
    const recipeId = card.dataset.id;
    const icon = button.querySelector('i');
    
    let favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    
    if (favorites.includes(recipeId)) {
        // Remove from favorites
        favorites = favorites.filter(id => id !== recipeId);
        icon.className = 'far fa-heart';
        button.classList.remove('active');
    } else {
        // Add to favorites
        favorites.push(recipeId);
        icon.className = 'fas fa-heart';
        button.classList.add('active');
    }
    
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
}

// Load favorite states
function loadFavoriteStates() {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    
    document.querySelectorAll('.cuisine-card').forEach(card => {
        const recipeId = card.dataset.id;
        const favoriteBtn = card.querySelector('.favorite-btn');
        const icon = favoriteBtn?.querySelector('i');
        
        if (favorites.includes(recipeId) && icon) {
            icon.className = 'fas fa-heart';
            favoriteBtn.classList.add('active');
        }
    });
}

// Smooth scrolling for story links
function setupStoryLinks() {
    document.querySelectorAll('.story-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // In a real application, this would navigate to the story page
            alert('Story feature coming soon!');
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const cuisineManager = new CuisineManager();
    
    // Load favorite states after a short delay to ensure cards are rendered
    setTimeout(loadFavoriteStates, 100);
    
    // Setup story links
    setupStoryLinks();
});

// Add notification styles
const cuisineNotificationStyles = `
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
const cuisineStyleSheet = document.createElement('style');
cuisineStyleSheet.textContent = cuisineNotificationStyles;
document.head.appendChild(cuisineStyleSheet);