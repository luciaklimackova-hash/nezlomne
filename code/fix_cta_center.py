import re

# Načítame HTML súbor
with open('/workspace/dist/odisla-som.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Upravíme CSS pre .hero-cta - zmažeme display: flex a dáme text-align: center
# Nájdeme príslušný CSS blok v <style>
content = re.sub(
    r'\.hero-cta \{[^}]*\}',
    '.hero-cta { text-align: center; margin-top: 3rem; }',
    content
)

# Pridáme display: inline-block pre tlačidlo aby sa dalo vycentrovať
# a upravíme .cta-microtext aby bol pod tlačidlom
css_update = '''        .hero-cta {
            text-align: center;
            margin-top: 3rem;
        }
        
        .hero-cta .btn {
            display: inline-block;
        }
        
        .cta-microtext {
            font-size: 0.875rem;
            color: var(--text-light);
            margin-top: 8px;
            text-align: center;
            display: block;
        }'''

# Nahradíme oba výskyty .cta-microtext CSS (sú duplicitné)
# Najprv nájdeme a odstránime všetky .cta-microtext bloky
content = re.sub(
    r'\s*\.cta-microtext \{[^}]*\}',
    '',
    content
)

# Teraz pridáme jeden správny blok pred </style>
style_end = content.rfind('</style>')
if style_end != -1:
    content = content[:style_end] + css_update + '\n    ' + content[style_end:]

# Uložíme
with open('/workspace/dist/odisla-som.html', 'w', encoding='utf-8') as f:
    f.write(content)

# Skopírujeme do git_current_version
with open('/workspace/git_current_version/odisla-som.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ CTA a mikrotext vycentrované")
