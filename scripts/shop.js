// Shop Page JavaScript

class ShopManager {
    constructor() {
        this.products = [];
        this.cart = this.loadCart();
        this.wishlist = this.loadWishlist();
        this.currentView = 'grid';
        this.currentCategory = 'all';
        this.currentPriceRange = 'all';
        this.currentSort = 'featured';
        this.productsPerPage = 12;
        this.currentPage = 1;
        this.searchTerm = '';
        
        this.init();
    }

    init() {
        this.generateProducts();
        this.renderFeaturedProducts();
        this.renderProducts();
        this.updateCartUI();
        this.setupEventListeners();
        this.injectStyles();
    }

    loadCart() {
        const stored = localStorage.getItem('broccobae_cart');
        return stored ? JSON.parse(stored) : [];
    }

    loadWishlist() {
        const stored = localStorage.getItem('broccobae_wishlist');
        return stored ? JSON.parse(stored) : [];
    }

    saveCart() {
        localStorage.setItem('broccobae_cart', JSON.stringify(this.cart));
    }

    saveWishlist() {
        localStorage.setItem('broccobae_wishlist', JSON.stringify(this.wishlist));
    }

    generateProducts() {
        const categories = {
            'ingredients': {
                name: 'Organic Ingredients',
                items: [
                    'Organic Quinoa', 'Himalayan Pink Salt', 'Coconut Oil', 'Chia Seeds', 'Hemp Hearts',
                    'Nutritional Yeast', 'Tahini', 'Maple Syrup', 'Apple Cider Vinegar', 'Turmeric Powder',
                    'Spirulina Powder', 'Cacao Powder', 'Almond Flour', 'Coconut Flour', 'Flax Seeds',
                    'Pumpkin Seeds', 'Sunflower Seeds', 'Cashew Butter', 'Almond Butter', 'Agave Nectar'
                ]
            },
            'kitchen': {
                name: 'Kitchen Essentials',
                items: [
                    'Bamboo Cutting Board', 'Stainless Steel Knife Set', 'Glass Storage Containers', 'Silicone Baking Mats',
                    'High-Speed Blender', 'Food Processor', 'Mandoline Slicer', 'Spiralizer', 'Steamer Basket',
                    'Cast Iron Skillet', 'Non-Stick Pan', 'Mixing Bowls Set', 'Measuring Cups', 'Kitchen Scale',
                    'Immersion Blender', 'Salad Spinner', 'Vegetable Peeler', 'Garlic Press', 'Citrus Juicer'
                ]
            },
            'superfoods': {
                name: 'Superfoods',
                items: [
                    'Acai Powder', 'Maca Powder', 'Chlorella Tablets', 'Wheatgrass Powder', 'Moringa Powder',
                    'Goji Berries', 'Cacao Nibs', 'Bee Pollen', 'Reishi Mushroom Powder', 'Ashwagandha Powder',
                    'Matcha Powder', 'Baobab Powder', 'Lucuma Powder', 'Mesquite Powder', 'Chaga Mushroom',
                    'Lion\'s Mane Mushroom', 'Cordyceps Mushroom', 'Turkey Tail Mushroom', 'Shiitake Extract'
                ]
            },
            'snacks': {
                name: 'Healthy Snacks',
                items: [
                    'Kale Chips', 'Roasted Chickpeas', 'Trail Mix', 'Energy Balls', 'Fruit Leather',
                    'Coconut Chips', 'Seaweed Snacks', 'Veggie Chips', 'Protein Bars', 'Granola Bars',
                    'Nut Butter Cups', 'Dark Chocolate', 'Dried Fruit Mix', 'Popcorn', 'Rice Cakes',
                    'Crackers', 'Hummus Cups', 'Nut Mix', 'Seed Crackers', 'Fruit Bars'
                ]
            },
            'beverages': {
                name: 'Plant-Based Beverages',
                items: [
                    'Oat Milk', 'Almond Milk', 'Coconut Milk', 'Soy Milk', 'Rice Milk',
                    'Green Tea', 'Herbal Tea', 'Kombucha', 'Cold Brew Coffee', 'Matcha Latte',
                    'Golden Milk Mix', 'Protein Smoothie', 'Electrolyte Drink', 'Coconut Water',
                    'Vegetable Juice', 'Fruit Juice', 'Wellness Shots', 'Adaptogenic Drinks'
                ]
            },
            'lifestyle': {
                name: 'Eco-Friendly Lifestyle',
                items: [
                    'Reusable Water Bottle', 'Bamboo Straws', 'Beeswax Wraps', 'Silicone Food Bags',
                    'Compost Bin', 'Reusable Shopping Bags', 'Glass Jars', 'Bamboo Utensils',
                    'Eco-Friendly Cleaning Products', 'Natural Soap', 'Bamboo Toothbrush', 'Organic Cotton Towels',
                    'Sustainable Lunch Box', 'Stainless Steel Containers', 'Natural Deodorant', 'Organic Skincare'
                ]
            }
        };

        const descriptions = [
            'Premium quality organic product',
            'Sustainably sourced and eco-friendly',
            'Perfect for your plant-based lifestyle',
            'High-quality ingredients for optimal nutrition',
            'Ethically sourced and environmentally conscious',
            'Essential for any vegan kitchen',
            'Nutrient-dense and delicious',
            'Made with love for health-conscious consumers'
        ];

        const badges = ['Organic', 'Vegan', 'Gluten-Free', 'Non-GMO', 'Fair Trade', 'Raw', 'Superfood', 'Eco-Friendly'];

        let productId = 1;
        
        Object.entries(categories).forEach(([categoryKey, categoryData]) => {
            categoryData.items.forEach(item => {
                const basePrice = Math.floor(Math.random() * 80) + 10; // $10-$90
                const hasDiscount = Math.random() < 0.3; // 30% chance of discount
                const discountPercent = hasDiscount ? Math.floor(Math.random() * 30) + 10 : 0; // 10-40% discount
                const currentPrice = hasDiscount ? basePrice * (1 - discountPercent / 100) : basePrice;
                const rating = (Math.random() * 2 + 3).toFixed(1); // 3.0-5.0 rating
                const reviewCount = Math.floor(Math.random() * 500) + 10;
                
                this.products.push({
                    id: productId++,
                    title: item,
                    category: categoryKey,
                    categoryName: categoryData.name,
                    description: descriptions[Math.floor(Math.random() * descriptions.length)],
                    price: parseFloat(currentPrice.toFixed(2)),
                    originalPrice: hasDiscount ? basePrice : null,
                    discount: discountPercent,
                    rating: parseFloat(rating),
                    reviewCount: reviewCount,
                    image: this.getProductImage(categoryKey),
                    badge: badges[Math.floor(Math.random() * badges.length)],
                    inStock: Math.random() < 0.95, // 95% chance in stock
                    featured: Math.random() < 0.2, // 20% chance featured
                    isNew: Math.random() < 0.15 // 15% chance new
                });
            });
        });
    }

    getProductImage(category) {
        const imageMap = {
            'ingredients': [
                '../../images/shop/ingredients-1.svg',
                '../../images/shop/ingredients-2.svg',
                '../../images/shop/ingredients-3.svg'
            ],
            'kitchen': [
                '../../images/shop/kitchen-1.svg',
                '../../images/shop/kitchen-2.svg',
                '../../images/shop/kitchen-3.svg'
            ],
            'superfoods': [
                '../../images/shop/superfoods-1.svg',
                '../../images/shop/superfoods-2.svg',
                '../../images/shop/superfoods-3.svg'
            ],
            'snacks': [
                '../../images/shop/snacks-1.svg',
                '../../images/shop/snacks-2.svg',
                '../../images/shop/snacks-3.svg'
            ],
            'beverages': [
                '../../images/shop/beverages-1.svg',
                '../../images/shop/beverages-2.svg',
                '../../images/shop/beverages-3.svg'
            ],
            'lifestyle': [
                '../../images/shop/lifestyle-1.svg',
                '../../images/shop/lifestyle-2.svg',
                '../../images/shop/lifestyle-3.svg'
            ]
        };
        
        const images = imageMap[category] || imageMap['ingredients'];
        return images[Math.floor(Math.random() * images.length)];
    }

    renderFeaturedProducts() {
        const container = document.querySelector('#featured-products');
        if (!container) return;

        const featuredProducts = this.products.filter(product => product.featured).slice(0, 4);
        
        container.innerHTML = featuredProducts.map(product => this.createProductCard(product)).join('');
    }

    renderProducts() {
        const container = document.querySelector('#products-grid');
        if (!container) return;

        let filteredProducts = this.getFilteredProducts();
        
        // Pagination
        const startIndex = (this.currentPage - 1) * this.productsPerPage;
        const endIndex = startIndex + this.productsPerPage;
        const productsToShow = filteredProducts.slice(0, endIndex);
        
        container.innerHTML = productsToShow.map(product => this.createProductCard(product)).join('');
        container.className = `products-grid ${this.currentView}-view`;
        
        // Update load more button
        const loadMoreBtn = document.querySelector('#load-more-products');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = endIndex >= filteredProducts.length ? 'none' : 'block';
        }
        
        // Update results count
        this.updateResultsInfo(filteredProducts.length);
    }

    getFilteredProducts() {
        let filtered = [...this.products];
        
        // Category filter
        if (this.currentCategory !== 'all') {
            filtered = filtered.filter(product => product.category === this.currentCategory);
        }
        
        // Price filter
        if (this.currentPriceRange !== 'all') {
            filtered = filtered.filter(product => {
                switch (this.currentPriceRange) {
                    case 'under-25': return product.price < 25;
                    case '25-50': return product.price >= 25 && product.price <= 50;
                    case '50-100': return product.price >= 50 && product.price <= 100;
                    case 'over-100': return product.price > 100;
                    default: return true;
                }
            });
        }
        
        // Search filter
        if (this.searchTerm) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                product.categoryName.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        }
        
        // Sort
        filtered.sort((a, b) => {
            switch (this.currentSort) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'rating':
                    return b.rating - a.rating;
                case 'newest':
                    return b.isNew - a.isNew;
                case 'featured':
                default:
                    return b.featured - a.featured;
            }
        });
        
        return filtered;
    }

    createProductCard(product) {
        const isInWishlist = this.wishlist.includes(product.id);
        const viewClass = this.currentView === 'list' ? 'list-view' : '';
        
        let badgeHtml = '';
        if (product.discount > 0) {
            badgeHtml = `<span class="product-badge sale">-${product.discount}%</span>`;
        } else if (product.isNew) {
            badgeHtml = `<span class="product-badge new">New</span>`;
        } else {
            badgeHtml = `<span class="product-badge">${product.badge}</span>`;
        }
        
        const starsHtml = this.generateStars(product.rating);
        
        return `
            <div class="product-card ${viewClass}" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    ${badgeHtml}
                    <button class="product-wishlist ${isInWishlist ? 'active' : ''}" data-id="${product.id}">
                        <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                <div class="product-content">
                    <span class="product-category">${product.categoryName}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-rating">
                        <div class="product-stars">${starsHtml}</div>
                        <span class="product-rating-text">${product.rating} (${product.reviewCount})</span>
                    </div>
                    <div class="product-price">
                        <span class="product-price-current">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="product-price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                        ${product.discount > 0 ? `<span class="product-discount">-${product.discount}%</span>` : ''}
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart" data-id="${product.id}" ${!product.inStock ? 'disabled' : ''}>
                            <i class="fas fa-shopping-cart"></i>
                            ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                        <button class="quick-view" data-id="${product.id}">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        let starsHtml = '';
        
        for (let i = 0; i < fullStars; i++) {
            starsHtml += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
        }
        
        for (let i = 0; i < emptyStars; i++) {
            starsHtml += '<i class="far fa-star"></i>';
        }
        
        return starsHtml;
    }

    updateResultsInfo(count) {
        const resultCount = document.querySelector('.result-count');
        if (resultCount) {
            resultCount.textContent = `${count} product${count !== 1 ? 's' : ''}`;
        }
        
        // Update filter tags
        this.updateFilterTags();
    }

    updateFilterTags() {
        const filterTags = document.querySelector('.filter-tags');
        if (!filterTags) return;
        
        const tags = [];
        
        if (this.currentCategory !== 'all') {
            const categoryName = this.products.find(p => p.category === this.currentCategory)?.categoryName;
            if (categoryName) {
                tags.push({ type: 'category', label: categoryName, value: this.currentCategory });
            }
        }
        
        if (this.currentPriceRange !== 'all') {
            const priceLabels = {
                'under-25': 'Under $25',
                '25-50': '$25 - $50',
                '50-100': '$50 - $100',
                'over-100': 'Over $100'
            };
            tags.push({ type: 'price', label: priceLabels[this.currentPriceRange], value: this.currentPriceRange });
        }
        
        if (this.searchTerm) {
            tags.push({ type: 'search', label: `"${this.searchTerm}"`, value: this.searchTerm });
        }
        
        filterTags.innerHTML = tags.map(tag => `
            <span class="filter-tag">
                ${tag.label}
                <button onclick="shopManager.removeFilter('${tag.type}', '${tag.value}')">&times;</button>
            </span>
        `).join('');
    }

    removeFilter(type, value) {
        switch (type) {
            case 'category':
                this.currentCategory = 'all';
                document.querySelector('#filter-category').value = 'all';
                break;
            case 'price':
                this.currentPriceRange = 'all';
                document.querySelector('#filter-price').value = 'all';
                break;
            case 'search':
                this.searchTerm = '';
                document.querySelector('#product-search').value = '';
                break;
        }
        
        this.currentPage = 1;
        this.renderProducts();
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.querySelector('#product-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value;
                this.currentPage = 1;
                this.renderProducts();
            });
        }

        // Filter controls
        const categoryFilter = document.querySelector('#filter-category');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.currentCategory = e.target.value;
                this.currentPage = 1;
                this.renderProducts();
            });
        }

        const priceFilter = document.querySelector('#filter-price');
        if (priceFilter) {
            priceFilter.addEventListener('change', (e) => {
                this.currentPriceRange = e.target.value;
                this.currentPage = 1;
                this.renderProducts();
            });
        }

        const sortSelect = document.querySelector('#sort-by');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.renderProducts();
            });
        }

        // View controls
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentView = e.target.dataset.view;
                this.renderProducts();
            });
        });

        // Category cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                if (category) {
                    this.currentCategory = category;
                    document.querySelector('#filter-category').value = category;
                    this.currentPage = 1;
                    this.renderProducts();
                    
                    // Scroll to products
                    document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Load more products
        const loadMoreBtn = document.querySelector('#load-more-products');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.currentPage++;
                this.renderProducts();
            });
        }

        // Product interactions
        document.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart')) {
                const productId = parseInt(e.target.closest('.add-to-cart').dataset.id);
                this.addToCart(productId);
            }
            
            if (e.target.closest('.product-wishlist')) {
                const productId = parseInt(e.target.closest('.product-wishlist').dataset.id);
                this.toggleWishlist(productId);
            }
            
            if (e.target.closest('.quick-view')) {
                const productId = parseInt(e.target.closest('.quick-view').dataset.id);
                this.showQuickView(productId);
            }
        });

        // Cart functionality
        const cartButton = document.querySelector('#cart-button');
        if (cartButton) {
            cartButton.addEventListener('click', () => {
                this.toggleCart();
            });
        }

        const cartClose = document.querySelector('#cart-close');
        if (cartClose) {
            cartClose.addEventListener('click', () => {
                this.closeCart();
            });
        }

        const cartOverlay = document.querySelector('#cart-overlay');
        if (cartOverlay) {
            cartOverlay.addEventListener('click', () => {
                this.closeCart();
            });
        }

        const continueShoppingBtn = document.querySelector('#continue-shopping');
        if (continueShoppingBtn) {
            continueShoppingBtn.addEventListener('click', () => {
                this.closeCart();
            });
        }

        // Newsletter form
        const newsletterForm = document.querySelector('#newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletterSubmit(e.target);
            });
        }
    }

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product || !product.inStock) return;
        
        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                id: productId,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.updateCartUI();
        this.showNotification(`${product.title} added to cart!`, 'success');
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartUI();
        this.renderCartItems();
    }

    updateCartQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.updateCartUI();
                this.renderCartItems();
            }
        }
    }

    toggleWishlist(productId) {
        const index = this.wishlist.indexOf(productId);
        const product = this.products.find(p => p.id === productId);
        
        if (index > -1) {
            this.wishlist.splice(index, 1);
            this.showNotification(`${product.title} removed from wishlist`, 'info');
        } else {
            this.wishlist.push(productId);
            this.showNotification(`${product.title} added to wishlist!`, 'success');
        }
        
        this.saveWishlist();
        this.renderProducts();
        this.renderFeaturedProducts();
    }

    updateCartUI() {
        const cartCount = document.querySelector('#cart-count');
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
        
        this.renderCartItems();
        this.updateCartTotals();
    }

    renderCartItems() {
        const cartItems = document.querySelector('#cart-items');
        const cartEmpty = document.querySelector('#cart-empty');
        
        if (!cartItems || !cartEmpty) return;
        
        if (this.cart.length === 0) {
            cartItems.style.display = 'none';
            cartEmpty.style.display = 'block';
        } else {
            cartItems.style.display = 'block';
            cartEmpty.style.display = 'none';
            
            cartItems.innerHTML = this.cart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.title}</h4>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="cart-item-controls">
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="shopManager.updateCartQuantity(${item.id}, ${item.quantity - 1})">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                                       onchange="shopManager.updateCartQuantity(${item.id}, parseInt(this.value))">
                                <button class="quantity-btn" onclick="shopManager.updateCartQuantity(${item.id}, ${item.quantity + 1})">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <button class="remove-item" onclick="shopManager.removeFromCart(${item.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    updateCartTotals() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal >= 50 ? 0 : 5.99;
        const total = subtotal + shipping;
        
        const subtotalEl = document.querySelector('#cart-subtotal');
        const shippingEl = document.querySelector('#cart-shipping');
        const totalEl = document.querySelector('#cart-total');
        
        if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
        if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
    }

    toggleCart() {
        const cartSidebar = document.querySelector('#cart-sidebar');
        const cartOverlay = document.querySelector('#cart-overlay');
        
        if (cartSidebar && cartOverlay) {
            cartSidebar.classList.toggle('open');
            cartOverlay.classList.toggle('show');
        }
    }

    closeCart() {
        const cartSidebar = document.querySelector('#cart-sidebar');
        const cartOverlay = document.querySelector('#cart-overlay');
        
        if (cartSidebar && cartOverlay) {
            cartSidebar.classList.remove('open');
            cartOverlay.classList.remove('show');
        }
    }

    showQuickView(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            // For now, just show a notification. In a real app, this would open a modal
            this.showNotification(`Quick view for ${product.title} - Feature coming soon!`, 'info');
        }
    }

    handleNewsletterSubmit(form) {
        const email = form.querySelector('input[type="email"]').value;
        
        // Simulate newsletter subscription
        this.showNotification('Thank you for subscribing to our newsletter!', 'success');
        form.reset();
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
        
        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    }

    injectStyles() {
        const styles = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                z-index: 1000;
                display: flex;
                align-items: center;
                gap: 1rem;
                max-width: 400px;
                animation: slideInRight 0.3s ease;
            }
            
            .notification.success {
                border-left: 4px solid #4CAF50;
            }
            
            .notification.error {
                border-left: 4px solid #f44336;
            }
            
            .notification.info {
                border-left: 4px solid #2196F3;
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                color: #666;
                padding: 0;
                margin-left: auto;
            }
            
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100%);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.shopManager = new ShopManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ShopManager;
}