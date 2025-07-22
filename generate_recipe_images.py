#!/usr/bin/env python3

import os
import random

# Define the categories and their counts
categories = {
    'breakfast': 20,
    'lunch': 20,
    'dinner': 20,
    'dessert': 20,
    'smoothie': 20
}

# Create SVG template
svg_template = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <title>{title}</title>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:{color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2d5a3d;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#grad1)"/>
  <circle cx="200" cy="150" r="80" fill="rgba(255,255,255,0.2)"/>
  <circle cx="600" cy="450" r="120" fill="rgba(255,255,255,0.1)"/>
  <rect x="300" y="200" width="200" height="200" rx="20" fill="rgba(255,255,255,0.15)"/>
  <text x="400" y="320" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">{title}</text>
</svg>'''

# Titles for each category
titles = {
    'breakfast': [
        'Overnight Oats with Berries', 'Tofu Scramble', 'Avocado Toast', 'Vegan Pancakes',
        'Breakfast Burrito', 'Chia Pudding', 'Granola Bowl', 'Vegan French Toast',
        'Breakfast Smoothie Bowl', 'Vegan Breakfast Sandwich', 'Breakfast Potatoes', 'Vegan Breakfast Casserole',
        'Breakfast Quinoa Bowl', 'Vegan Breakfast Muffins', 'Breakfast Tacos', 'Vegan Breakfast Hash',
        'Breakfast Parfait', 'Vegan Breakfast Cookies', 'Breakfast Oatmeal', 'Vegan Breakfast Wrap'
    ],
    'lunch': [
        'Quinoa Salad', 'Veggie Wrap', 'Buddha Bowl', 'Lentil Soup',
        'Falafel Plate', 'Vegan Sushi', 'Pasta Salad', 'Stuffed Sweet Potato',
        'Vegan Burger', 'Grain Bowl', 'Vegan Sandwich', 'Chickpea Salad',
        'Vegan Bento Box', 'Noodle Bowl', 'Vegan Quesadilla', 'Mediterranean Plate',
        'Vegan Poke Bowl', 'Roasted Vegetable Sandwich', 'Vegan Ramen', 'Taco Salad'
    ],
    'dinner': [
        'Vegetable Curry', 'Vegan Lasagna', 'Stuffed Bell Peppers', 'Mushroom Risotto',
        'Vegan Enchiladas', 'Eggplant Parmesan', 'Vegetable Stir Fry', 'Vegan Shepherd\'s Pie',
        'Lentil Bolognese', 'Vegan Pizza', 'Jackfruit Tacos', 'Vegetable Paella',
        'Vegan Pot Pie', 'Cauliflower Steak', 'Vegan Chili', 'Vegetable Tagine',
        'Vegan Meatballs', 'Stuffed Cabbage Rolls', 'Vegan Jambalaya', 'Vegetable Biryani'
    ],
    'dessert': [
        'Vegan Chocolate Cake', 'Berry Crumble', 'Coconut Ice Cream', 'Vegan Cheesecake',
        'Fruit Tart', 'Vegan Brownies', 'Apple Pie', 'Vegan Cookies',
        'Banana Bread', 'Vegan Cupcakes', 'Chia Pudding', 'Vegan Tiramisu',
        'Fruit Sorbet', 'Vegan Donuts', 'Peanut Butter Cups', 'Vegan Mousse',
        'Fruit Parfait', 'Vegan Cinnamon Rolls', 'Chocolate Pudding', 'Vegan Truffles'
    ],
    'smoothie': [
        'Berry Blast Smoothie', 'Green Detox Smoothie', 'Tropical Paradise Smoothie', 'Chocolate Protein Smoothie',
        'Banana Oat Smoothie', 'Mango Turmeric Smoothie', 'Blueberry Almond Smoothie', 'Spinach Avocado Smoothie',
        'Strawberry Banana Smoothie', 'Kale Pineapple Smoothie', 'Cherry Vanilla Smoothie', 'Matcha Green Tea Smoothie',
        'Acai Berry Smoothie', 'Cucumber Mint Smoothie', 'Peach Ginger Smoothie', 'Watermelon Basil Smoothie',
        'Carrot Cake Smoothie', 'Coconut Kale Smoothie', 'Peanut Butter Banana Smoothie', 'Dragon Fruit Smoothie'
    ]
}

# Create the recipes directory if it doesn't exist
os.makedirs('/Users/user/Documents/Project/images/recipes', exist_ok=True)

# Generate SVG files for each category
for category, count in categories.items():
    for i in range(1, count + 1):
        file_path = f'/Users/user/Documents/Project/images/recipes/{category}-{i}.svg'
        
        # Skip if file already exists
        if os.path.exists(file_path):
            continue
        
        # Get title and color
        title = titles[category][(i - 1) % len(titles[category])]
        
        # Generate a random green color
        r = random.randint(50, 100)
        g = random.randint(150, 200)
        b = random.randint(50, 100)
        color = f"#{r:02x}{g:02x}{b:02x}"
        
        # Create SVG content
        svg_content = svg_template.format(title=title, color=color)
        
        # Write the SVG file
        with open(file_path, 'w') as f:
            f.write(svg_content)

print(f"Generated missing recipe SVG images")