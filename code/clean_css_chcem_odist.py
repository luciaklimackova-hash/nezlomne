#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Načítaj súbor
with open('chcem-odist.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Odstráň staré CSS štýly pre .hero__actions a .hero__microtext
css_to_remove = '''        
        /* Hero sekcia - Chcem odísť - vycentrované CTA a mikrotext */
        .hero__actions {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            text-align: center;
            margin-top: 24px;
        }
        
        .hero__actions .btn {
            background-color: #AB2574;
            color: #FFFFFF;
            font-family: "Source Sans 3", sans-serif;
            font-weight: 600;
            font-size: 18px;
            padding: 14px 24px;
            border-radius: 8px;
            border: none;
            text-align: center;
        }
        
        .hero__microtext {
            font-family: "Source Sans 3", "Source Sans Pro", system-ui, -apple-system, sans-serif;
            font-size: 15px;
            color: #504F50;
            text-align: center;
            margin-top: 6px;
            line-height: 1.5;
        }'''

mobile_css_to_remove = '''            
            .hero__actions {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;
                text-align: center;
            }
            
            .hero__microtext {
                font-size: 14px;
                line-height: 1.5;
                margin-top: 8px;
            }'''

# Odstráň oba bloky
content = content.replace(css_to_remove, '')
content = content.replace(mobile_css_to_remove, '')

# Odstráň aj starý .hero-description štýl, ak existuje
old_hero_desc_css = '''        
        .hero-description {
            max-width: 800px;
            margin: 2rem auto;
            text-align: center;
        }
        
        .hero-description p {
            font-size: 1.125rem;
            color: var(--text-dark);
        }'''

content = content.replace(old_hero_desc_css, '')

# Ulož
with open('chcem-odist.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ CSS vyčistené")
