// Community Page JavaScript

class CommunityManager {
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
        const categories = {
            'festive': {
                names: [
                    'Holiday Stuffed Portobello Roast', 'Festive Cranberry Quinoa Salad', 'Christmas Spiced Lentil Loaf', 'New Year Rainbow Bowl',
                    'Valentine\'s Heart Beet Salad', 'Easter Carrot Cake Smoothie', 'Halloween Pumpkin Curry', 'Thanksgiving Sweet Potato Casserole',
                    'Diwali Coconut Laddu', 'Holi Colorful Fruit Chaat', 'Eid Date and Nut Balls', 'Chinese New Year Dumplings',
                    'Hanukkah Potato Latkes', 'Kwanzaa Black-Eyed Pea Stew', 'Cinco de Mayo Avocado Tacos', 'St. Patrick\'s Green Smoothie',
                    'Independence Day Berry Parfait', 'Mother\'s Day Flower Salad', 'Father\'s Day BBQ Jackfruit', 'Birthday Celebration Cake'
                ],
                descriptions: [
                    'Perfect centerpiece for your festive table with herbs, nuts, and seasonal vegetables.',
                    'Colorful quinoa salad with cranberries, nuts, and festive herbs for special occasions.',
                    'Hearty lentil loaf spiced with traditional holiday flavors and aromatic herbs.',
                    'Vibrant bowl packed with colorful vegetables to celebrate the new year healthily.'
                ],
                occasions: ['Christmas', 'New Year', 'Valentine\'s Day', 'Easter', 'Halloween', 'Thanksgiving', 'Diwali', 'Holi'],
                themes: ['Holiday', 'Celebration', 'Traditional', 'Festive']
            },
            'summer': {
                names: [
                    'Tropical Paradise Smoothie Bowl', 'Watermelon Mint Gazpacho', 'Grilled Vegetable Skewers', 'Coconut Mango Ice Cream',
                    'Fresh Cucumber Salad', 'Chilled Avocado Soup', 'Berry Quinoa Salad', 'Frozen Fruit Popsicles',
                    'Cold Brew Coffee Smoothie', 'Peach Basil Salad', 'Zucchini Noodle Bowl', 'Iced Green Tea Latte',
                    'Tomato Basil Bruschetta', 'Lemon Herb Quinoa', 'Grilled Corn Salad', 'Pineapple Chia Pudding',
                    'Refreshing Mint Water', 'Summer Vegetable Wrap', 'Frozen Yogurt Bark', 'Citrus Fruit Salad'
                ],
                descriptions: [
                    'Refreshing blend of mango, pineapple, and coconut topped with fresh fruits and granola.',
                    'Cool and refreshing gazpacho perfect for hot summer days with fresh watermelon and mint.',
                    'Colorful grilled vegetables on skewers with herbs and summer seasonings.',
                    'Creamy coconut-based ice cream with fresh mango chunks for the perfect summer treat.'
                ],
                ingredients: ['Tropical Fruits', 'Fresh Herbs', 'Coconut', 'Citrus', 'Berries', 'Melons'],
                preparations: ['Chilled', 'Grilled', 'Fresh', 'Frozen']
            },
            'monsoon': {
                names: [
                    'Monsoon Spiced Lentil Soup', 'Ginger Turmeric Tea', 'Warm Quinoa Porridge', 'Spicy Chickpea Curry',
                    'Hot Chocolate with Spices', 'Steamed Vegetable Dumplings', 'Warming Golden Milk', 'Spiced Pumpkin Soup',
                    'Herbal Immunity Tea', 'Cozy Oat Porridge', 'Spiced Apple Cider', 'Warming Vegetable Stew',
                    'Ginger Carrot Soup', 'Spiced Chai Latte', 'Turmeric Rice Bowl', 'Warming Bone Broth Alternative',
                    'Spiced Sweet Potato Soup', 'Herbal Detox Tea', 'Warming Miso Soup', 'Spiced Quinoa Khichdi'
                ],
                descriptions: [
                    'Warming soup with aromatic spices, perfect for rainy days and cozy evenings.',
                    'Soothing tea blend with fresh ginger and turmeric to boost immunity during monsoons.',
                    'Comforting quinoa porridge with warming spices and seasonal fruits.',
                    'Hearty chickpea curry with monsoon spices to warm you from the inside out.'
                ],
                spices: ['Ginger', 'Turmeric', 'Cinnamon', 'Cardamom', 'Black Pepper', 'Cloves'],
                benefits: ['Immunity Boosting', 'Warming', 'Digestive', 'Anti-inflammatory']
            },
            'winter': {
                names: [
                    'Hearty Root Vegetable Stew', 'Warming Butternut Squash Soup', 'Spiced Hot Chocolate', 'Winter Vegetable Curry',
                    'Cozy Lentil Dal', 'Roasted Winter Vegetables', 'Warming Ginger Tea', 'Spiced Pear Compote',
                    'Hot Mulled Cider', 'Winter Minestrone Soup', 'Roasted Chestnut Soup', 'Spiced Quinoa Pilaf',
                    'Warming Bone Broth', 'Winter Squash Risotto', 'Spiced Carrot Cake', 'Hot Herbal Tea Blend',
                    'Roasted Beet Salad', 'Winter Vegetable Gratin', 'Spiced Apple Crisp', 'Warming Turmeric Latte'
                ],
                descriptions: [
                    'Comforting winter stew with seasonal root vegetables, herbs, and warming spices.',
                    'Creamy butternut squash soup with coconut milk and winter spices for cold days.',
                    'Rich hot chocolate made with plant-based milk and warming winter spices.',
                    'Hearty curry with winter vegetables and aromatic spices to keep you warm.'
                ],
                vegetables: ['Root Vegetables', 'Winter Squash', 'Brussels Sprouts', 'Kale', 'Cabbage', 'Leeks'],
                preparations: ['Roasted', 'Stewed', 'Braised', 'Slow-cooked']
            }
        };

        // Generate 125 recipes for each category (500 total)
        Object.keys(categories).forEach(category => {
            const categoryData = categories[category];
            for (let i = 0; i < 125; i++) {
                const nameIndex = i % categoryData.names.length;
                const descIndex = i % categoryData.descriptions.length;
                
                const recipe = {
                    id: `community-${category}-${i + 1}`,
                    title: `${categoryData.names[nameIndex]} ${Math.floor(i / categoryData.names.length) + 1}`,
                    description: categoryData.descriptions[descIndex],
                    category: category,
                    image: `./images/community/${category}-${(i % 20) + 1}.svg`,
                    author: this.generateRandomAuthor(),
                    postTime: this.generateRandomTime(i),
                    prepTime: `${10 + (i % 50)} mins`,
                    cookTime: `${15 + (i % 45)} mins`,
                    totalTime: `${25 + (i % 95)} mins`,
                    servings: [2, 4, 6, 8][i % 4],
                    difficulty: ['Easy', 'Medium', 'Advanced'][i % 3],
                    calories: 150 + (i % 350),
                    protein: `${8 + (i % 20)}g`,
                    carbs: `${15 + (i % 35)}g`,
                    fat: `${3 + (i % 15)}g`,
                    likes: 50 + (i % 300),
                    comments: 5 + (i % 70),
                    shares: 1 + (i % 25)
                };

                // Add category-specific properties
                if (category === 'festive') {
                    recipe.occasion = categoryData.occasions[i % categoryData.occasions.length];
                    recipe.theme = categoryData.themes[i % categoryData.themes.length];
                } else if (category === 'summer') {
                    recipe.keyIngredient = categoryData.ingredients[i % categoryData.ingredients.length];
                    recipe.preparation = categoryData.preparations[i % categoryData.preparations.length];
                } else if (category === 'monsoon') {
                    recipe.keySpice = categoryData.spices[i % categoryData.spices.length];
                    recipe.benefit = categoryData.benefits[i % categoryData.benefits.length];
                } else if (category === 'winter') {
                    recipe.mainVegetable = categoryData.vegetables[i % categoryData.vegetables.length];
                    recipe.preparation = categoryData.preparations[i % categoryData.preparations.length];
                }

                // Add random tags
                const allTags = ['Healthy', 'Quick', 'Comfort Food', 'Seasonal', 'Traditional', 'Modern', 'Spicy', 'Mild', 'Gluten-Free', 'High Protein'];
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

    generateRandomAuthor() {
        const firstNames = ['Sarah', 'Mike', 'Priya', 'Emma', 'David', 'Lisa', 'Raj', 'Anna', 'Tom', 'Maya', 'Alex', 'Nina', 'Sam', 'Zoe', 'Ben'];
        const lastInitials = ['M', 'R', 'K', 'L', 'S', 'P', 'T', 'W', 'H', 'C', 'D', 'B', 'G', 'F', 'J'];
        
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastInitial = lastInitials[Math.floor(Math.random() * lastInitials.length)];
        
        return {
            name: `${firstName} ${lastInitial}.`,
            avatar: `./images/avatars/user-${Math.floor(Math.random() * 20) + 1}.svg`
        };
    }

    generateRandomTime(index) {
        const timeOptions = [
            '2 hours ago', '5 hours ago', '1 day ago', '2 days ago', '3 days ago',
            '1 week ago', '2 weeks ago', '3 weeks ago', '1 month ago', '2 months ago'
        ];
        return timeOptions[index % timeOptions.length];
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

        // Recipe form submission
        const recipeForm = document.getElementById('recipeSubmissionForm');
        if (recipeForm) {
            recipeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleRecipeSubmission(e.target);
            });
        }

        // Recipe card clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.community-card') && !e.target.closest('.favorite-btn') && !e.target.closest('.engagement-btn')) {
                const card = e.target.closest('.community-card');
                const recipeId = card.dataset.id;
                if (recipeId) {
                    this.showRecipeDetails(recipeId);
                }
            }
        });

        // Engagement buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.engagement-btn')) {
                const btn = e.target.closest('.engagement-btn');
                const icon = btn.querySelector('i');
                
                if (icon.classList.contains('fa-heart')) {
                    this.handleLike(btn);
                } else if (icon.classList.contains('fa-comment')) {
                    this.handleComment(btn);
                } else if (icon.classList.contains('fa-share')) {
                    this.handleShare(btn);
                }
            }
        });
    }

    filterRecipes(filter) {
        this.currentFilter = filter;
        this.displayedCount = 10;
        this.displayRecipes();
        this.updateRecipeCount();
    }

    displayRecipes() {
        const grid = document.getElementById('communityGrid');
        if (!grid) return;

        // Clear existing cards except the static ones
        const existingCards = grid.querySelectorAll('.community-card:not([data-static])');
        existingCards.forEach(card => card.remove());

        // Filter recipes
        let filteredRecipes = this.recipes;
        if (this.currentFilter !== 'all') {
            filteredRecipes = this.recipes.filter(recipe => recipe.category === this.currentFilter);
        }

        // Display recipes (skip the first 4 static cards)
        const recipesToShow = filteredRecipes.slice(0, this.displayedCount - 4);
        recipesToShow.forEach((recipe, index) => {
            const card = this.createRecipeCard(recipe);
            grid.appendChild(card);
        });

        // Update load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            if (this.displayedCount >= filteredRecipes.length + 4) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }
    }

    createRecipeCard(recipe) {
        const card = document.createElement('div');
        card.className = 'community-card';
        card.dataset.category = recipe.category;
        card.dataset.id = recipe.id;

        // Get season icon based on category
        let seasonIcon = '';
        let seasonText = '';
        
        switch (recipe.category) {
            case 'festive':
                seasonIcon = 'fas fa-star';
                seasonText = 'Festive';
                break;
            case 'summer':
                seasonIcon = 'fas fa-sun';
                seasonText = 'Summer';
                break;
            case 'monsoon':
                seasonIcon = 'fas fa-cloud-rain';
                seasonText = 'Monsoon';
                break;
            case 'winter':
                seasonIcon = 'fas fa-snowflake';
                seasonText = 'Winter';
                break;
        }

        const tagsHtml = recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="community-image">
            <div class="community-content">
                <div class="community-author">
                    <img src="${recipe.author.avatar}" alt="${recipe.author.name}" class="author-avatar">
                    <div class="author-info">
                        <span class="author-name">${recipe.author.name}</span>
                        <span class="post-time">${recipe.postTime}</span>
                    </div>
                </div>
                <h3 class="community-title">${recipe.title}</h3>
                <p class="community-description">${recipe.description}</p>
                <div class="community-meta">
                    <span class="prep-time"><i class="fas fa-clock"></i> ${recipe.prepTime}</span>
                    <span class="difficulty" data-level="${recipe.difficulty.toLowerCase()}"><i class="fas fa-chart-bar"></i> ${recipe.difficulty}</span>
                    <span class="season" data-level="${recipe.category}"><i class="${seasonIcon}"></i> ${seasonText}</span>
                </div>
                <div class="community-engagement">
                    <button class="engagement-btn" data-count="${recipe.likes}"><i class="fas fa-heart"></i> ${recipe.likes}</button>
                    <button class="engagement-btn" data-count="${recipe.comments}"><i class="fas fa-comment"></i> ${recipe.comments}</button>
                    <button class="engagement-btn" data-count="${recipe.shares}"><i class="fas fa-share"></i> ${recipe.shares}</button>
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
        const countElement = document.querySelector('.recipe-count');
        if (!countElement) return;

        let totalCount = this.recipes.length;
        if (this.currentFilter !== 'all') {
            totalCount = this.recipes.filter(recipe => recipe.category === this.currentFilter).length;
        }

        const displayedCount = Math.min(this.displayedCount, totalCount + 4);
        countElement.textContent = `Showing ${displayedCount} of ${totalCount + 4} community recipes`;
    }

    handleRecipeSubmission(form) {
        const formData = new FormData(form);
        const recipeData = {
            name: formData.get('recipeName'),
            category: formData.get('recipeCategory'),
            prepTime: formData.get('prepTime'),
            cookTime: formData.get('cookTime'),
            servings: formData.get('servings'),
            description: formData.get('recipeDescription'),
            ingredients: formData.get('ingredients'),
            instructions: formData.get('instructions'),
            difficulty: formData.get('difficulty'),
            tags: formData.get('tags'),
            tips: formData.get('tips')
        };

        // Validate required fields
        const requiredFields = ['name', 'category', 'prepTime', 'cookTime', 'servings', 'description', 'ingredients', 'instructions', 'difficulty'];
        const missingFields = requiredFields.filter(field => !recipeData[field]);
        
        if (missingFields.length > 0) {
            this.showNotification(`Please fill in all required fields: ${missingFields.join(', ')}`, 'error');
            return;
        }

        // Simulate recipe submission
        this.showNotification('Thank you for sharing your recipe! It will be reviewed and published soon.', 'success');
        
        // Reset form
        form.reset();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    handleLike(button) {
        const currentCount = parseInt(button.dataset.count);
        const newCount = currentCount + 1;
        button.dataset.count = newCount;
        button.innerHTML = `<i class="fas fa-heart"></i> ${newCount}`;
        button.style.color = '#FF6B6B';
        
        // Add animation
        button.style.transform = 'scale(1.2)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    }

    handleComment(button) {
        // In a real application, this would open a comment modal
        this.showNotification('Comment feature coming soon!', 'info');
    }

    handleShare(button) {
        const currentCount = parseInt(button.dataset.count);
        const newCount = currentCount + 1;
        button.dataset.count = newCount;
        button.innerHTML = `<i class="fas fa-share"></i> ${newCount}`;
        
        // Copy to clipboard (simulate sharing)
        if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href).then(() => {
                this.showNotification('Recipe link copied to clipboard!', 'success');
            });
        } else {
            this.showNotification('Recipe shared!', 'success');
        }
    }

    showRecipeDetails(recipeId) {
        const recipe = this.recipes.find(r => r.id === recipeId);
        if (!recipe) return;

        // Create modal or navigate to detail page
        const details = `
            Recipe: ${recipe.title}
            Author: ${recipe.author.name}
            Category: ${recipe.category}
            Posted: ${recipe.postTime}
            
            Prep Time: ${recipe.prepTime}
            Cook Time: ${recipe.cookTime}
            Total Time: ${recipe.totalTime}
            Servings: ${recipe.servings}
            Difficulty: ${recipe.difficulty}
            
            Nutrition (per serving):
            Calories: ${recipe.calories}
            Protein: ${recipe.protein}
            Carbs: ${recipe.carbs}
            Fat: ${recipe.fat}
            
            ${recipe.description}
            
            Engagement:
            ❤️ ${recipe.likes} likes
            💬 ${recipe.comments} comments
            📤 ${recipe.shares} shares
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
    const card = button.closest('.community-card');
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

// Reset form function
function resetForm() {
    const form = document.getElementById('recipeSubmissionForm');
    if (form) {
        form.reset();
    }
}

// Load favorite states
function loadFavoriteStates() {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    
    document.querySelectorAll('.community-card').forEach(card => {
        const recipeId = card.dataset.id;
        const favoriteBtn = card.querySelector('.favorite-btn');
        const icon = favoriteBtn?.querySelector('i');
        
        if (favorites.includes(recipeId) && icon) {
            icon.className = 'fas fa-heart';
            favoriteBtn.classList.add('active');
        }
    });
}

// Form validation helpers
function validateForm() {
    const form = document.getElementById('recipeSubmissionForm');
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#f44336';
            isValid = false;
        } else {
            input.style.borderColor = '#e0e0e0';
        }
    });
    
    return isValid;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const communityManager = new CommunityManager();
    
    // Load favorite states after a short delay to ensure cards are rendered
    setTimeout(loadFavoriteStates, 100);
    
    // Add real-time form validation
    const form = document.getElementById('recipeSubmissionForm');
    if (form) {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateForm);
        });
    }
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