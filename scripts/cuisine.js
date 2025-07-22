// Cuisine Page JavaScript

class CuisineManager {
    constructor() {
        this.recipes = [];
        this.currentFilter = 'all';
        this.displayedCount = 10;
        this.totalRecipes = 500;
        this.init();
    }

    init() {
        this.generateRecipes();
        this.setupEventListeners();
        this.displayRecipes();
        this.updateRecipeCount();
    }

    generateRecipes() {
        const cuisines = {
            'asian': {
                countries: ['China', 'Japan', 'Thailand', 'Vietnam', 'Korea', 'Malaysia', 'Singapore', 'Indonesia'],
                names: [
                    'Rainbow Vegetable Stir Fry', 'Coconut Green Curry', 'Miso Ramen Bowl', 'Vietnamese Pho',
                    'Korean Bibimbap', 'Pad Thai Noodles', 'Teriyaki Tofu Bowl', 'Thai Basil Fried Rice',
                    'Chinese Mapo Tofu', 'Japanese Gyoza', 'Korean Kimchi Stew', 'Thai Tom Yum Soup',
                    'Vietnamese Spring Rolls', 'Chinese Hot Pot', 'Japanese Tempura', 'Korean Bulgogi Bowl',
                    'Thai Massaman Curry', 'Chinese Kung Pao', 'Japanese Yakitori', 'Korean Japchae'
                ],
                descriptions: [
                    'Colorful Asian-style stir fry with crisp vegetables, tofu, and savory soy-ginger sauce.',
                    'Aromatic Thai green curry with coconut milk, vegetables, and fresh herbs.',
                    'Rich and comforting miso-based ramen with vegetables and plant-based protein.',
                    'Traditional Vietnamese soup with rice noodles, herbs, and aromatic broth.'
                ],
                spiceLevels: ['Mild', 'Medium', 'Spicy', 'Very Spicy'],
                techniques: ['Stir-frying', 'Steaming', 'Braising', 'Grilling']
            },
            'indian': {
                regions: ['North Indian', 'South Indian', 'Bengali', 'Gujarati', 'Punjabi', 'Rajasthani'],
                names: [
                    'Masala Dal Tadka', 'Vegetable Biryani', 'Chana Masala', 'Palak Paneer',
                    'Aloo Gobi', 'Rajma Curry', 'Sambar', 'Rasam',
                    'Baingan Bharta', 'Bhindi Masala', 'Chole Bhature', 'Dosa',
                    'Idli Sambar', 'Uttapam', 'Poha', 'Upma',
                    'Dhokla', 'Khandvi', 'Thepla', 'Paratha'
                ],
                descriptions: [
                    'Rich and creamy lentil curry with aromatic Indian spices and fresh herbs.',
                    'Fragrant basmati rice layered with spiced vegetables and aromatic herbs.',
                    'Spicy chickpea curry cooked in tomato-onion gravy with traditional spices.',
                    'Creamy spinach curry with plant-based paneer and aromatic spices.'
                ],
                spiceLevels: ['Mild', 'Medium', 'Spicy', 'Very Spicy'],
                cookingStyles: ['Tandoor', 'Curry', 'Steamed', 'Fried']
            },
            'american': {
                regions: ['Southern', 'Tex-Mex', 'California', 'New York', 'Midwest', 'Pacific Northwest'],
                names: [
                    'Ultimate Plant Burger', 'Creamy Mac & Cheese', 'BBQ Jackfruit Sandwich', 'Buffalo Cauliflower Wings',
                    'Loaded Nachos', 'Caesar Salad', 'Clam Chowder', 'Cornbread',
                    'Coleslaw', 'Potato Salad', 'Baked Beans', 'Apple Pie',
                    'Pancakes', 'French Toast', 'Bagels & Cream Cheese', 'Smoothie Bowl',
                    'Avocado Toast', 'Quinoa Salad', 'Veggie Wrap', 'Power Bowl'
                ],
                descriptions: [
                    'Juicy plant-based burger with all the classic fixings and crispy fries.',
                    'Rich and creamy plant-based mac and cheese with nutritional yeast and cashews.',
                    'Smoky BBQ jackfruit sandwich with tangy coleslaw and pickles.',
                    'Crispy buffalo cauliflower wings with ranch dipping sauce.'
                ],
                styles: ['Comfort Food', 'BBQ', 'Diner Style', 'Health Conscious'],
                preparations: ['Grilled', 'Fried', 'Baked', 'Raw']
            },
            'mediterranean': {
                countries: ['Greece', 'Italy', 'Spain', 'Turkey', 'Morocco', 'Lebanon'],
                names: [
                    'Mediterranean Power Bowl', 'Herb-Crusted Pasta Primavera', 'Greek Moussaka', 'Italian Risotto',
                    'Spanish Paella', 'Turkish Dolmas', 'Moroccan Tagine', 'Lebanese Tabbouleh',
                    'Hummus Platter', 'Falafel Bowl', 'Caprese Salad', 'Bruschetta',
                    'Gazpacho', 'Ratatouille', 'Minestrone', 'Focaccia',
                    'Olive Tapenade', 'Baba Ganoush', 'Stuffed Peppers', 'Lemon Orzo'
                ],
                descriptions: [
                    'Fresh Mediterranean bowl with hummus, olives, vegetables, and tahini dressing.',
                    'Fresh pasta with seasonal vegetables, herbs, and olive oil-based sauce.',
                    'Layered Mediterranean casserole with eggplant, lentils, and béchamel sauce.',
                    'Creamy Italian rice dish with seasonal vegetables and herbs.'
                ],
                ingredients: ['Olive Oil', 'Fresh Herbs', 'Tomatoes', 'Olives'],
                preparations: ['Grilled', 'Roasted', 'Fresh', 'Braised']
            },
            'mexican': {
                regions: ['Yucatan', 'Oaxaca', 'Jalisco', 'Puebla', 'Veracruz', 'Chiapas'],
                names: [
                    'Spicy Black Bean Tacos', 'Loaded Burrito Bowl', 'Enchiladas Verdes', 'Quesadillas',
                    'Pozole Rojo', 'Chiles Rellenos', 'Tamales', 'Elote',
                    'Guacamole & Chips', 'Salsa Verde', 'Pico de Gallo', 'Mole Poblano',
                    'Agua Fresca', 'Horchata', 'Tres Leches Cake', 'Churros',
                    'Tostadas', 'Sopes', 'Flautas', 'Empanadas'
                ],
                descriptions: [
                    'Authentic Mexican tacos with seasoned black beans, fresh salsa, and avocado.',
                    'Hearty burrito bowl with cilantro rice, beans, vegetables, and cashew crema.',
                    'Corn tortillas filled with vegetables and topped with green salsa.',
                    'Crispy tortillas filled with cheese and vegetables, served with salsa.'
                ],
                spiceLevels: ['Mild', 'Medium', 'Spicy', 'Very Spicy'],
                techniques: ['Grilled', 'Roasted', 'Fried', 'Steamed']
            }
        };

        // Generate 100 recipes for each cuisine
        Object.keys(cuisines).forEach(cuisine => {
            const cuisineData = cuisines[cuisine];
            for (let i = 0; i < 100; i++) {
                const nameIndex = i % cuisineData.names.length;
                const descIndex = i % cuisineData.descriptions.length;
                
                const recipe = {
                    id: `${cuisine}-${i + 1}`,
                    title: `${cuisineData.names[nameIndex]} ${Math.floor(i / cuisineData.names.length) + 1}`,
                    description: cuisineData.descriptions[descIndex],
                    cuisine: cuisine,
                    image: `../../images/cuisines/${cuisine}-${(i % 20) + 1}.svg`,
                    prepTime: `${10 + (i % 50)} mins`,
                    cookTime: `${15 + (i % 45)} mins`,
                    totalTime: `${25 + (i % 95)} mins`,
                    servings: [2, 4, 6, 8][i % 4],
                    difficulty: ['Easy', 'Medium', 'Advanced'][i % 3],
                    spiceLevel: cuisineData.spiceLevels ? cuisineData.spiceLevels[i % cuisineData.spiceLevels.length] : 'Mild',
                    calories: 200 + (i % 400),
                    protein: `${10 + (i % 25)}g`,
                    carbs: `${20 + (i % 40)}g`,
                    fat: `${5 + (i % 20)}g`
                };

                // Add cuisine-specific properties
                if (cuisine === 'asian') {
                    recipe.country = cuisineData.countries[i % cuisineData.countries.length];
                    recipe.technique = cuisineData.techniques[i % cuisineData.techniques.length];
                } else if (cuisine === 'indian') {
                    recipe.region = cuisineData.regions[i % cuisineData.regions.length];
                    recipe.cookingStyle = cuisineData.cookingStyles[i % cuisineData.cookingStyles.length];
                } else if (cuisine === 'american') {
                    recipe.region = cuisineData.regions[i % cuisineData.regions.length];
                    recipe.style = cuisineData.styles[i % cuisineData.styles.length];
                    recipe.preparation = cuisineData.preparations[i % cuisineData.preparations.length];
                } else if (cuisine === 'mediterranean') {
                    recipe.country = cuisineData.countries[i % cuisineData.countries.length];
                    recipe.keyIngredient = cuisineData.ingredients[i % cuisineData.ingredients.length];
                    recipe.preparation = cuisineData.preparations[i % cuisineData.preparations.length];
                } else if (cuisine === 'mexican') {
                    recipe.region = cuisineData.regions[i % cuisineData.regions.length];
                    recipe.technique = cuisineData.techniques[i % cuisineData.techniques.length];
                }

                // Add random tags
                const allTags = ['Gluten-Free', 'High Protein', 'Quick', 'Comfort Food', 'Spicy', 'Fresh', 'Traditional', 'Modern', 'Healthy', 'Filling'];
                recipe.tags = [];
                for (let j = 0; j < 3; j++) {
                    const tag = allTags[(i + j) % allTags.length];
                    if (!recipe.tags.includes(tag)) {
                        recipe.tags.push(tag);
                    }
                }

                this.recipes.push(recipe);
            }
        });
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
        this.displayRecipes();
        this.updateRecipeCount();
    }

    displayRecipes() {
        const grid = document.getElementById('cuisineGrid');
        if (!grid) return;

        // Clear existing cards except the static ones
        const existingCards = grid.querySelectorAll('.cuisine-card:not([data-static])');
        existingCards.forEach(card => card.remove());

        // Filter recipes
        let filteredRecipes = this.recipes;
        if (this.currentFilter !== 'all') {
            filteredRecipes = this.recipes.filter(recipe => recipe.cuisine === this.currentFilter);
        }

        // Display recipes (skip the first 10 static cards)
        const recipesToShow = filteredRecipes.slice(0, this.displayedCount - 10);
        recipesToShow.forEach((recipe, index) => {
            const card = this.createRecipeCard(recipe);
            grid.appendChild(card);
        });

        // Update load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            if (this.displayedCount >= filteredRecipes.length + 10) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }
    }

    createRecipeCard(recipe) {
        const card = document.createElement('div');
        card.className = 'cuisine-card';
        card.dataset.category = recipe.cuisine;
        card.dataset.id = recipe.id;

        // Get cuisine-specific flag and region
        let flagSrc = '';
        let regionText = '';
        
        switch (recipe.cuisine) {
            case 'asian':
                flagSrc = `../../images/flags/${recipe.country.toLowerCase()}.svg`;
                regionText = recipe.country;
                break;
            case 'indian':
                flagSrc = '../../images/flags/india.svg';
                regionText = recipe.region;
                break;
            case 'american':
                flagSrc = '../../images/flags/usa.svg';
                regionText = recipe.region;
                break;
            case 'mediterranean':
                flagSrc = `../../images/flags/${recipe.country.toLowerCase()}.svg`;
                regionText = recipe.country;
                break;
            case 'mexican':
                flagSrc = '../../images/flags/mexico.svg';
                regionText = recipe.region;
                break;
        }

        const tagsHtml = recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="cuisine-image">
            <div class="cuisine-content">
                <div class="cuisine-flag">
                    <img src="${flagSrc}" alt="${regionText} Flag" class="flag-icon">
                    <span class="cuisine-region">${regionText}</span>
                </div>
                <h3 class="cuisine-title">${recipe.title}</h3>
                <p class="cuisine-description">${recipe.description}</p>
                <div class="cuisine-meta">
                    <span class="prep-time"><i class="fas fa-clock"></i> ${recipe.prepTime}</span>
                    <span class="difficulty" data-level="${recipe.difficulty.toLowerCase()}"><i class="fas fa-chart-bar"></i> ${recipe.difficulty}</span>
                    <span class="spice-level" data-level="${recipe.spiceLevel.toLowerCase()}"><i class="fas fa-pepper-hot"></i> ${recipe.spiceLevel}</span>
                </div>
                <div class="cuisine-tags">
                    ${tagsHtml}
                </div>
                <button class="favorite-btn" onclick="toggleFavorite(this)"><i class="far fa-heart"></i></button>
            </div>
        `;

        return card;
    }

    loadMoreRecipes() {
        this.displayedCount += 6;
        this.displayRecipes();
        this.updateRecipeCount();
    }

    updateRecipeCount() {
        const countElement = document.querySelector('.cuisine-count');
        if (!countElement) return;

        let totalCount = this.recipes.length;
        if (this.currentFilter !== 'all') {
            totalCount = this.recipes.filter(recipe => recipe.cuisine === this.currentFilter).length;
        }

        const displayedCount = Math.min(this.displayedCount, totalCount + 10);
        countElement.textContent = `Showing ${displayedCount} of ${totalCount + 10} recipes`;
    }

    showRecipeDetails(recipeId) {
        const recipe = this.recipes.find(r => r.id === recipeId);
        if (!recipe) return;

        // Create modal or navigate to detail page
        const details = `
            Recipe: ${recipe.title}
            Cuisine: ${recipe.cuisine}
            Prep Time: ${recipe.prepTime}
            Cook Time: ${recipe.cookTime}
            Total Time: ${recipe.totalTime}
            Servings: ${recipe.servings}
            Difficulty: ${recipe.difficulty}
            Spice Level: ${recipe.spiceLevel}
            
            Nutrition (per serving):
            Calories: ${recipe.calories}
            Protein: ${recipe.protein}
            Carbs: ${recipe.carbs}
            Fat: ${recipe.fat}
            
            ${recipe.description}
        `;
        
        alert(details);
        
        // In a real application, you would navigate to a detailed page
        // window.location.href = `recipe-detail.html?id=${recipeId}`;
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