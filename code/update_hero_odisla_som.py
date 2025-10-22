import re

# Načítame HTML súbor
with open('/workspace/dist/odisla-som.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Nová hero sekcia
new_hero = '''    <!-- Hero Section -->
    <section class="hero" id="main-content">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">Odišli ste. No on to ešte neskončil.</h1>
                <p class="hero-subtitle">Podpora pri zvládaní post-separačného násilia, súdnych konaní a návratu k sebe.</p>
                <p class="hero-subtitle">Pomôžeme vám získať späť pokoj, istotu a vnútornú slobodu – aj keď on sa stále snaží mať moc.</p>
                <div class="hero-cta">
                    <button class="btn btn-primary" onclick="scrollToSection('co-mozete-urobit-hned-teraz')">Chcem späť pokoj a slobodu</button>
                    <p class="cta-microtext">Bezplatné materiály • Citlivo • Bez tlaku</p>
                </div>
            </div>
        </div>
    </section>'''

# Nahradíme starú hero sekciu novou
old_hero_pattern = r'    <!-- Hero Section -->.*?    </section>'
content = re.sub(old_hero_pattern, new_hero, content, flags=re.DOTALL, count=1)

# Pridáme id na sekciu "Čo môžete urobiť hneď teraz?"
content = content.replace(
    '<section class="action-steps cream-bg">',
    '<section id="co-mozete-urobit-hned-teraz" class="action-steps cream-bg">'
)

# Nájdeme </style> pred </body> a pridáme CSS pre mikrotext
css_addition = '''        .cta-microtext {
            font-size: 0.875rem;
            color: var(--text-light);
            margin-top: 8px;
            text-align: center;
        }
    '''

# Nájdeme posledný </style> tag pred </body>
style_end = content.rfind('</style>')
if style_end != -1:
    # Nájdeme začiatok bloku CSS pred </style>
    # Pridáme CSS pred </style>
    content = content[:style_end] + css_addition + content[style_end:]

# Uložíme upravený súbor
with open('/workspace/dist/odisla-som.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Hero sekcia bola úspešne upravená v dist/odisla-som.html")

# Skopírujeme aj do git_current_version
with open('/workspace/git_current_version/odisla-som.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Súbor skopírovaný do git_current_version/odisla-som.html")
