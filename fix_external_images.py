#!/usr/bin/env python3
"""
Fix External Image URLs in SVG Files and HTML

This script replaces external Unsplash URLs with proper SVG content
to prevent CORS issues and loading failures.
"""

import os
import re
from pathlib import Path

def create_proper_svg_content(title, color="#4a7c59"):
    """Create a proper SVG with geometric shapes instead of external URLs"""
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
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

def fix_svg_files():
    """Fix SVG files that reference external URLs"""
    project_root = Path('/Users/user/Documents/Project')
    images_dir = project_root / 'images'
    
    # Find all SVG files with external URLs
    svg_files = list(images_dir.rglob('*.svg'))
    
    fixed_count = 0
    
    for svg_file in svg_files:
        try:
            with open(svg_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if file contains external Unsplash URLs
            if 'unsplash.com' in content:
                # Extract title from existing content or use filename
                title_match = re.search(r'<title>(.*?)</title>', content)
                if title_match:
                    title = title_match.group(1)
                else:
                    title = svg_file.stem.replace('-', ' ').title()
                
                # Create new SVG content
                new_content = create_proper_svg_content(title)
                
                # Write the fixed content
                with open(svg_file, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                
                print(f"Fixed: {svg_file.relative_to(project_root)}")
                fixed_count += 1
                
        except Exception as e:
            print(f"Error processing {svg_file}: {e}")
    
    return fixed_count

def fix_html_files():
    """Fix HTML files that reference external Unsplash URLs"""
    project_root = Path('/Users/user/Documents/Project')
    
    # Find all HTML files
    html_files = list(project_root.rglob('*.html'))
    
    fixed_count = 0
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if file contains external Unsplash URLs
            if 'unsplash.com' in content:
                # Replace external image URLs with placeholder
                content = re.sub(
                    r'https://(?:source|images)\.unsplash\.com/[^"\s]+',
                    './images/placeholder-recipe.svg',
                    content
                )
                
                # Write the fixed content
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                print(f"Fixed: {html_file.relative_to(project_root)}")
                fixed_count += 1
                
        except Exception as e:
            print(f"Error processing {html_file}: {e}")
    
    return fixed_count

def create_placeholder_svg():
    """Create a proper placeholder SVG"""
    placeholder_path = Path('/Users/user/Documents/Project/images/placeholder-recipe.svg')
    
    placeholder_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4a7c59;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2d5a3d;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#grad1)"/>
  <circle cx="150" cy="120" r="60" fill="rgba(255,255,255,0.2)"/>
  <circle cx="450" cy="280" r="80" fill="rgba(255,255,255,0.1)"/>
  <rect x="200" y="150" width="200" height="100" rx="15" fill="rgba(255,255,255,0.15)"/>
  <text x="300" y="210" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Vegan Recipe</text>
</svg>'''
    
    with open(placeholder_path, 'w', encoding='utf-8') as f:
        f.write(placeholder_content)
    
    print(f"Created placeholder: {placeholder_path}")

def main():
    print("Fixing external image URLs in the website...")
    print("=" * 50)
    
    # Create proper placeholder
    create_placeholder_svg()
    
    # Fix SVG files
    print("\nFixing SVG files...")
    svg_count = fix_svg_files()
    
    # Fix HTML files
    print("\nFixing HTML files...")
    html_count = fix_html_files()
    
    print("\n" + "=" * 50)
    print(f"Fixed {svg_count} SVG files")
    print(f"Fixed {html_count} HTML files")
    print("\nAll external image URLs have been replaced with local SVG content.")
    print("The website should now load properly without external dependencies!")

if __name__ == "__main__":
    main()