#!/usr/bin/env python3

import os
import random

# Base templates for each cuisine type
templates = {
    'asian': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <!-- Background -->
  <rect width="400" height="300" fill="#f8f9fa"/>
  
  <!-- Bowl -->
  <ellipse cx="200" cy="180" rx="120" ry="40" fill="{bowl_color}" stroke="#333" stroke-width="2"/>
  <path d="M80 180 Q 200 120 320 180" fill="none" stroke="#333" stroke-width="2"/>
  
  <!-- Noodles -->
  <path d="M140 160 Q 170 140 200 160 Q 230 180 260 160" fill="none" stroke="{noodle_color}" stroke-width="6" stroke-linecap="round"/>
  <path d="M130 170 Q 160 150 190 170 Q 220 190 250 170" fill="none" stroke="{noodle_color}" stroke-width="6" stroke-linecap="round"/>
  <path d="M150 180 Q 180 160 210 180 Q 240 200 270 180" fill="none" stroke="{noodle_color}" stroke-width="6" stroke-linecap="round"/>
  
  <!-- Vegetables -->
  <circle cx="170" cy="150" r="10" fill="{veg1_color}"/>
  <circle cx="230" cy="150" r="10" fill="{veg2_color}"/>
  <circle cx="200" cy="140" r="10" fill="{veg3_color}"/>
  
  <!-- Chopsticks -->
  <line x1="100" y1="100" x2="180" y2="160" stroke="#8D6E63" stroke-width="4" stroke-linecap="round"/>
  <line x1="110" y1="95" x2="190" y2="155" stroke="#8D6E63" stroke-width="4" stroke-linecap="round"/>
  
  <!-- Steam -->
  <path d="M180 120 Q 190 100 200 120" fill="none" stroke="#BDBDBD" stroke-width="2"/>
  <path d="M200 110 Q 210 90 220 110" fill="none" stroke="#BDBDBD" stroke-width="2"/>
  <path d="M160 130 Q 170 110 180 130" fill="none" stroke="#BDBDBD" stroke-width="2"/>
  
  <!-- Text -->
  <text x="200" y="250" font-family="Arial" font-size="16" text-anchor="middle" fill="#333">{dish_name}</text>
</svg>''',
    
    'indian': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <!-- Background -->
  <rect width="400" height="300" fill="#f8f9fa"/>
  
  <!-- Plate -->
  <circle cx="200" cy="180" r="100" fill="{plate_color}" stroke="#333" stroke-width="2"/>
  <circle cx="200" cy="180" r="90" fill="#f5f5f5" stroke="#333" stroke-width="1"/>
  
  <!-- Curry -->
  <circle cx="200" cy="180" r="70" fill="{curry_color}" stroke="{curry_border}" stroke-width="2"/>
  
  <!-- Rice -->
  <ellipse cx="200" cy="160" rx="40" ry="20" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="1"/>
  
  <!-- Garnish -->
  <circle cx="180" cy="150" r="5" fill="{garnish1_color}"/>
  <circle cx="220" cy="150" r="5" fill="{garnish1_color}"/>
  <circle cx="200" cy="170" r="5" fill="{garnish2_color}"/>
  
  <!-- Spices -->
  <circle cx="170" cy="200" r="8" fill="{spice1_color}"/>
  <circle cx="230" cy="200" r="8" fill="{spice2_color}"/>
  <circle cx="200" cy="210" r="8" fill="{spice3_color}"/>
  
  <!-- Steam -->
  <path d="M180 120 Q 190 100 200 120" fill="none" stroke="#BDBDBD" stroke-width="2"/>
  <path d="M200 110 Q 210 90 220 110" fill="none" stroke="#BDBDBD" stroke-width="2"/>
  <path d="M160 130 Q 170 110 180 130" fill="none" stroke="#BDBDBD" stroke-width="2"/>
  
  <!-- Text -->
  <text x="200" y="250" font-family="Arial" font-size="16" text-anchor="middle" fill="#333">{dish_name}</text>
</svg>''',
    
    'american': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <!-- Background -->
  <rect width="400" height="300" fill="#f8f9fa"/>
  
  <!-- Plate -->
  <ellipse cx="200" cy="200" rx="120" ry="30" fill="{plate_color}" stroke="#333" stroke-width="2"/>
  
  <!-- Burger Bottom Bun -->
  <ellipse cx="200" cy="200" rx="70" ry="20" fill="{bun_color}" stroke="{bun_border}" stroke-width="1"/>
  
  <!-- Burger Patty -->
  <ellipse cx="200" cy="180" rx="75" ry="15" fill="{patty_color}" stroke="{patty_border}" stroke-width="1"/>
  
  <!-- Lettuce -->
  <ellipse cx="200" cy="165" rx="80" ry="10" fill="{lettuce_color}" stroke="{lettuce_border}" stroke-width="1"/>
  
  <!-- Tomato -->
  <ellipse cx="200" cy="155" rx="65" ry="8" fill="{tomato_color}" stroke="{tomato_border}" stroke-width="1"/>
  
  <!-- Cheese -->
  <ellipse cx="200" cy="145" rx="70" ry="8" fill="{cheese_color}" stroke="{cheese_border}" stroke-width="1"/>
  
  <!-- Onion -->
  <ellipse cx="200" cy="135" rx="65" ry="7" fill="#E0E0E0" stroke="#9E9E9E" stroke-width="1"/>
  
  <!-- Burger Top Bun -->
  <path d="M130 135 Q 200 100 270 135" fill="{bun_color}" stroke="{bun_border}" stroke-width="1"/>
  <ellipse cx="200" cy="135" rx="70" ry="15" fill="{bun_color}" stroke="{bun_border}" stroke-width="1"/>
  
  <!-- Sesame Seeds -->
  <circle cx="180" cy="125" r="2" fill="#FFFFFF"/>
  <circle cx="190" cy="120" r="2" fill="#FFFFFF"/>
  <circle cx="200" cy="122" r="2" fill="#FFFFFF"/>
  <circle cx="210" cy="118" r="2" fill="#FFFFFF"/>
  <circle cx="220" cy="125" r="2" fill="#FFFFFF"/>
  
  <!-- French Fries -->
  <rect x="300" y="170" width="10" height="50" rx="2" fill="{fries_color}" stroke="{fries_border}" stroke-width="1"/>
  <rect x="315" y="160" width="10" height="60" rx="2" fill="{fries_color}" stroke="{fries_border}" stroke-width="1"/>
  <rect x="330" y="175" width="10" height="45" rx="2" fill="{fries_color}" stroke="{fries_border}" stroke-width="1"/>
  <rect x="345" y="165" width="10" height="55" rx="2" fill="{fries_color}" stroke="{fries_border}" stroke-width="1"/>
  
  <!-- Text -->
  <text x="200" y="250" font-family="Arial" font-size="16" text-anchor="middle" fill="#333">{dish_name}</text>
</svg>''',
    
    'mediterranean': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <!-- Background -->
  <rect width="400" height="300" fill="#f8f9fa"/>
  
  <!-- Plate -->
  <circle cx="200" cy="180" r="100" fill="{plate_color}" stroke="#333" stroke-width="2"/>
  <circle cx="200" cy="180" r="90" fill="#f5f5f5" stroke="#333" stroke-width="1"/>
  
  <!-- Hummus -->
  <circle cx="200" cy="180" r="60" fill="{hummus_color}" stroke="{hummus_border}" stroke-width="1"/>
  <circle cx="200" cy="180" r="50" fill="{hummus_light}" stroke="{hummus_color}" stroke-width="1"/>
  
  <!-- Olive Oil Well -->
  <ellipse cx="200" cy="170" rx="20" ry="10" fill="{oil_color}" stroke="{oil_border}" stroke-width="1"/>
  
  <!-- Chickpeas -->
  <circle cx="170" cy="160" r="5" fill="{chickpea_color}" stroke="{chickpea_border}" stroke-width="1"/>
  <circle cx="185" cy="155" r="5" fill="{chickpea_color}" stroke="{chickpea_border}" stroke-width="1"/>
  <circle cx="200" cy="150" r="5" fill="{chickpea_color}" stroke="{chickpea_border}" stroke-width="1"/>
  <circle cx="215" cy="155" r="5" fill="{chickpea_color}" stroke="{chickpea_border}" stroke-width="1"/>
  <circle cx="230" cy="160" r="5" fill="{chickpea_color}" stroke="{chickpea_border}" stroke-width="1"/>
  
  <!-- Paprika -->
  <circle cx="200" cy="170" r="3" fill="{paprika_color}"/>
  
  <!-- Olives -->
  <circle cx="160" cy="200" r="8" fill="{olive_color}" stroke="{olive_border}" stroke-width="1"/>
  <circle cx="240" cy="200" r="8" fill="{olive_color}" stroke="{olive_border}" stroke-width="1"/>
  
  <!-- Parsley Garnish -->
  <path d="M180 140 Q 190 130 200 140" fill="none" stroke="{parsley_color}" stroke-width="2"/>
  <path d="M200 135 Q 210 125 220 135" fill="none" stroke="{parsley_color}" stroke-width="2"/>
  <path d="M190 145 Q 200 135 210 145" fill="none" stroke="{parsley_color}" stroke-width="2"/>
  
  <!-- Pita Bread -->
  <path d="M100 160 Q 120 140 140 160" fill="{pita_color}" stroke="{pita_border}" stroke-width="1"/>
  <path d="M100 160 Q 120 180 140 160" fill="{pita_color}" stroke="{pita_border}" stroke-width="1"/>
  
  <!-- Text -->
  <text x="200" y="250" font-family="Arial" font-size="16" text-anchor="middle" fill="#333">{dish_name}</text>
</svg>''',
    
    'mexican': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <!-- Background -->
  <rect width="400" height="300" fill="#f8f9fa"/>
  
  <!-- Plate -->
  <ellipse cx="200" cy="200" rx="120" ry="30" fill="{plate_color}" stroke="#333" stroke-width="2"/>
  
  <!-- Taco Shell 1 -->
  <path d="M140 180 Q 170 130 200 180" fill="{shell_color}" stroke="{shell_border}" stroke-width="2"/>
  
  <!-- Taco Filling 1 -->
  <path d="M150 175 Q 170 145 190 175" fill="{filling1_color}" stroke="{filling1_border}" stroke-width="1"/>
  <path d="M155 170 Q 170 150 185 170" fill="{filling2_color}" stroke="{filling2_border}" stroke-width="1"/>
  
  <!-- Taco Shell 2 -->
  <path d="M200 180 Q 230 130 260 180" fill="{shell_color}" stroke="{shell_border}" stroke-width="2"/>
  
  <!-- Taco Filling 2 -->
  <path d="M210 175 Q 230 145 250 175" fill="{filling1_color}" stroke="{filling1_border}" stroke-width="1"/>
  <path d="M215 170 Q 230 150 245 170" fill="{filling2_color}" stroke="{filling2_border}" stroke-width="1"/>
  
  <!-- Lime Wedges -->
  <path d="M290 180 L 310 170 L 310 190 Z" fill="{lime_color}" stroke="{lime_border}" stroke-width="1"/>
  <path d="M320 180 L 340 170 L 340 190 Z" fill="{lime_color}" stroke="{lime_border}" stroke-width="1"/>
  
  <!-- Cilantro Garnish -->
  <circle cx="160" cy="150" r="3" fill="{cilantro_color}"/>
  <circle cx="170" cy="145" r="3" fill="{cilantro_color}"/>
  <circle cx="180" cy="155" r="3" fill="{cilantro_color}"/>
  
  <circle cx="220" cy="150" r="3" fill="{cilantro_color}"/>
  <circle cx="230" cy="145" r="3" fill="{cilantro_color}"/>
  <circle cx="240" cy="155" r="3" fill="{cilantro_color}"/>
  
  <!-- Salsa -->
  <circle cx="120" cy="190" r="15" fill="{salsa_color}" stroke="{salsa_border}" stroke-width="1"/>
  
  <!-- Guacamole -->
  <circle cx="280" cy="190" r="15" fill="{guac_color}" stroke="{guac_border}" stroke-width="1"/>
  
  <!-- Text -->
  <text x="200" y="250" font-family="Arial" font-size="16" text-anchor="middle" fill="#333">{dish_name}</text>
</svg>'''
}

# Dish names for each cuisine
dish_names = {
    'asian': [
        'Asian Ramen Bowl', 'Vegetable Stir Fry', 'Tofu Pad Thai', 'Vegan Sushi Roll',
        'Coconut Curry Noodles', 'Teriyaki Bowl', 'Miso Soup', 'Spring Rolls',
        'Vegetable Dumplings', 'Bibimbap Bowl', 'Thai Green Curry', 'Pho Noodle Soup',
        'Kung Pao Tofu', 'Vegetable Fried Rice', 'Sesame Noodles', 'Tempura Vegetables',
        'Kimchi Bowl', 'Vegetable Yakisoba', 'Aloo Gobi', 'Chana Masala'
    ],
    'indian': [
        'Indian Dal Curry', 'Vegetable Biryani', 'Chana Masala', 'Aloo Gobi',
        'Vegetable Korma', 'Palak Tofu', 'Samosas', 'Vegetable Pakoras',
        'Baingan Bharta', 'Rajma Curry', 'Masala Dosa', 'Idli Sambar',
        'Vegetable Jalfrezi', 'Malai Kofta', 'Bhindi Masala', 'Pav Bhaji',
        'Vegetable Pulao', 'Chole Bhature', 'Vegan Butter Chicken', 'Roti & Curry'
    ],
    'american': [
        'Veggie Burger', 'Plant-Based Hot Dog', 'BBQ Jackfruit Sandwich', 'Vegan Mac & Cheese',
        'Buffalo Cauliflower Wings', 'Loaded Nachos', 'Vegan Pizza', 'Stuffed Bell Peppers',
        'Vegan Chili', 'Cornbread & Beans', 'Vegan Meatloaf', 'Potato Salad',
        'Vegan Coleslaw', 'Avocado Toast', 'Vegan Pancakes', 'Tofu Scramble',
        'Vegan BLT Sandwich', 'Loaded Baked Potato', 'Vegan Grilled Cheese', 'Quinoa Bowl'
    ],
    'mediterranean': [
        'Mediterranean Hummus Plate', 'Falafel Bowl', 'Greek Salad', 'Stuffed Grape Leaves',
        'Vegetable Paella', 'Ratatouille', 'Tabbouleh Salad', 'Vegetable Couscous',
        'Spanakopita', 'Vegetable Moussaka', 'Pasta Primavera', 'Risotto',
        'Vegetable Tagine', 'Shakshuka', 'Baba Ganoush', 'Pita & Mezze',
        'Vegetable Souvlaki', 'Olive Tapenade', 'Bruschetta', 'Vegetable Orzo'
    ],
    'mexican': [
        'Veggie Tacos', 'Bean Burritos', 'Vegetable Enchiladas', 'Loaded Nachos',
        'Vegetable Quesadillas', 'Guacamole & Chips', 'Mexican Rice Bowl', 'Stuffed Peppers',
        'Vegetable Fajitas', 'Tortilla Soup', 'Vegan Tamales', 'Elote Corn',
        'Black Bean Soup', 'Tostadas', 'Chilaquiles', 'Vegan Pozole',
        'Mexican Street Corn Salad', 'Sopes', 'Flautas', 'Vegan Chiles Rellenos'
    ]
}

# Color variations for each cuisine
color_variations = {
    'asian': {
        'bowl_color': ['#e0e0e0', '#d7ccc8', '#f5f5f5', '#eeeeee', '#e1bee7'],
        'noodle_color': ['#f5d742', '#ffecb3', '#fff9c4', '#fff176', '#ffd54f'],
        'veg1_color': ['#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9'],
        'veg2_color': ['#FF5722', '#FF7043', '#FF8A65', '#FFAB91', '#FFCCBC'],
        'veg3_color': ['#9C27B0', '#AB47BC', '#BA68C8', '#CE93D8', '#E1BEE7']
    },
    'indian': {
        'plate_color': ['#e0e0e0', '#d7ccc8', '#f5f5f5', '#eeeeee', '#e1bee7'],
        'curry_color': ['#FF9800', '#FFA726', '#FFB74D', '#FFCC80', '#FFE0B2'],
        'curry_border': ['#E65100', '#EF6C00', '#F57C00', '#FB8C00', '#FF9800'],
        'garnish1_color': ['#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9'],
        'garnish2_color': ['#FF5722', '#FF7043', '#FF8A65', '#FFAB91', '#FFCCBC'],
        'spice1_color': ['#FFC107', '#FFCA28', '#FFD54F', '#FFE082', '#FFECB3'],
        'spice2_color': ['#8D6E63', '#A1887F', '#BCAAA4', '#D7CCC8', '#EFEBE9'],
        'spice3_color': ['#F44336', '#EF5350', '#E57373', '#EF9A9A', '#FFCDD2']
    },
    'american': {
        'plate_color': ['#e0e0e0', '#d7ccc8', '#f5f5f5', '#eeeeee', '#e1bee7'],
        'bun_color': ['#FFA000', '#FFB300', '#FFC107', '#FFCA28', '#FFD54F'],
        'bun_border': ['#E65100', '#EF6C00', '#F57C00', '#FB8C00', '#FF9800'],
        'patty_color': ['#5D4037', '#6D4C41', '#795548', '#8D6E63', '#A1887F'],
        'patty_border': ['#3E2723', '#4E342E', '#5D4037', '#6D4C41', '#795548'],
        'lettuce_color': ['#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9'],
        'lettuce_border': ['#388E3C', '#43A047', '#4CAF50', '#66BB6A', '#81C784'],
        'tomato_color': ['#F44336', '#EF5350', '#E57373', '#EF9A9A', '#FFCDD2'],
        'tomato_border': ['#D32F2F', '#E53935', '#F44336', '#EF5350', '#E57373'],
        'cheese_color': ['#FFEB3B', '#FFEE58', '#FFF176', '#FFF59D', '#FFF9C4'],
        'cheese_border': ['#FBC02D', '#FDD835', '#FFEB3B', '#FFEE58', '#FFF176'],
        'fries_color': ['#FFC107', '#FFCA28', '#FFD54F', '#FFE082', '#FFECB3'],
        'fries_border': ['#FFA000', '#FFB300', '#FFC107', '#FFCA28', '#FFD54F']
    },
    'mediterranean': {
        'plate_color': ['#e0e0e0', '#d7ccc8', '#f5f5f5', '#eeeeee', '#e1bee7'],
        'hummus_color': ['#E8D8BF', '#EFE5D5', '#F5EEE0', '#F8F3EA', '#FAF7F2'],
        'hummus_border': ['#D7CCA3', '#E0D9B8', '#E8E1C5', '#EFE9D2', '#F5F0DE'],
        'hummus_light': ['#EFE7D3', '#F3EDE0', '#F7F2E8', '#FAF7F2', '#FCFAF7'],
        'oil_color': ['#FFC107', '#FFCA28', '#FFD54F', '#FFE082', '#FFECB3'],
        'oil_border': ['#FFA000', '#FFB300', '#FFC107', '#FFCA28', '#FFD54F'],
        'chickpea_color': ['#F5DEB3', '#F7E4C1', '#F9EACE', '#FAEFDB', '#FCF5E8'],
        'chickpea_border': ['#E6C88E', '#EBD4A4', '#F0DFBA', '#F5E9CF', '#F9F2E3'],
        'paprika_color': ['#F44336', '#EF5350', '#E57373', '#EF9A9A', '#FFCDD2'],
        'olive_color': ['#3E2723', '#4E342E', '#5D4037', '#6D4C41', '#795548'],
        'olive_border': ['#1B0000', '#2B1510', '#3B2A20', '#4B3F30', '#5B5440'],
        'parsley_color': ['#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9'],
        'pita_color': ['#F5DEB3', '#F7E4C1', '#F9EACE', '#FAEFDB', '#FCF5E8'],
        'pita_border': ['#E6C88E', '#EBD4A4', '#F0DFBA', '#F5E9CF', '#F9F2E3']
    },
    'mexican': {
        'plate_color': ['#e0e0e0', '#d7ccc8', '#f5f5f5', '#eeeeee', '#e1bee7'],
        'shell_color': ['#FFC107', '#FFCA28', '#FFD54F', '#FFE082', '#FFECB3'],
        'shell_border': ['#FFA000', '#FFB300', '#FFC107', '#FFCA28', '#FFD54F'],
        'filling1_color': ['#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9'],
        'filling1_border': ['#388E3C', '#43A047', '#4CAF50', '#66BB6A', '#81C784'],
        'filling2_color': ['#F44336', '#EF5350', '#E57373', '#EF9A9A', '#FFCDD2'],
        'filling2_border': ['#D32F2F', '#E53935', '#F44336', '#EF5350', '#E57373'],
        'lime_color': ['#CDDC39', '#D4E157', '#DCE775', '#E6EE9C', '#F0F4C3'],
        'lime_border': ['#AFB42B', '#C0CA33', '#CDDC39', '#D4E157', '#DCE775'],
        'cilantro_color': ['#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9'],
        'salsa_color': ['#F44336', '#EF5350', '#E57373', '#EF9A9A', '#FFCDD2'],
        'salsa_border': ['#D32F2F', '#E53935', '#F44336', '#EF5350', '#E57373'],
        'guac_color': ['#8BC34A', '#9CCC65', '#AED581', '#C5E1A5', '#DCEDC8'],
        'guac_border': ['#689F38', '#7CB342', '#8BC34A', '#9CCC65', '#AED581']
    }
}

# Create the cuisines directory if it doesn't exist
os.makedirs('/Users/user/Documents/Project/images/cuisines', exist_ok=True)

# Generate 20 SVG images for each cuisine type
for cuisine in templates.keys():
    for i in range(1, 21):
        # Select a random dish name
        dish_name = random.choice(dish_names[cuisine])
        
        # Create a dictionary of random color variations
        colors = {}
        for key, values in color_variations[cuisine].items():
            colors[key] = random.choice(values)
        
        # Format the SVG template with the random colors and dish name
        svg_content = templates[cuisine].format(dish_name=dish_name, **colors)
        
        # Write the SVG file
        file_path = f'/Users/user/Documents/Project/images/cuisines/{cuisine}-{i}.svg'
        with open(file_path, 'w') as f:
            f.write(svg_content)

print(f"Generated 100 cuisine SVG images (20 for each of the 5 cuisine types)")