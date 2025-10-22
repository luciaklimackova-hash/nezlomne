#!/usr/bin/env python3
import re

# Prečítať súbor
with open('dist/chcem-odist.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Upraviť hero sekciu
old_hero = '''                <h1 class="hero-title">„Odísť je ťažké.<br>Zostať môže byť ešte vyčerpávajúcejšie."</h1>
                <p class="hero-subtitle">Podpora pri príprave bezpečného odchodu.</p>
                <div class="hero-description">
                    <p>Cítite, že vo vzťahu už nemôžete zostať — ale bojíte sa, čo bude ďalej? My vám pomôžeme pripraviť bezpečný, premyslený plán tak, aby ste chránili seba a deti a nezostali zlomená.</p>
                </div>
                <div class="hero-cta">
                    <button class="btn btn-primary" onclick="scrollToSection('help-section')">Chcem vedieť, ako odísť bezpečne</button>
                </div>'''

new_hero = '''                <h1 class="hero-title">Odísť je ťažké.<br>Zostať môže byť ešte ťažšie.</h1>
                <p class="hero-subtitle">Podpora pri plánovaní odchodu – krok za krokom pre vás a deti.</p>
                <div class="hero-cta">
                    <button class="btn btn-primary" onclick="scrollToSection('co-mozete-urobit-hned-teraz')">Chcem vedieť, ako odísť bezpečne</button>
                    <p class="cta-note">(Bezplatné materiály • Citlivo • Bez tlaku)</p>
                </div>'''

content = content.replace(old_hero, new_hero)

# 2. Pridať id do next-steps sekcie
content = content.replace(
    '<section class="next-steps cream-bg">',
    '<section id="co-mozete-urobit-hned-teraz" class="next-steps cream-bg">'
)

# 3. Upraviť CSS
old_css = '''        .hero-description {
            max-width: 800px;
            margin: 2rem auto;
            text-align: center;
        }
        
        .hero-description p {
            font-size: 1.125rem;
            color: var(--text-dark);
        }'''

new_css = '''        .cta-note {
            margin-top: 1rem;
            font-size: 0.95rem;
            color: var(--text-light);
            opacity: 0.9;
        }'''

content = content.replace(old_css, new_css)

# Zapísať späť
with open('dist/chcem-odist.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Hero sekcia úspešne aktualizovaná!")
print("- Zmenený text nadpisu a podnadpisu")
print("- Pridaná CTA poznámka: (Bezplatné materiály • Citlivo • Bez tlaku)")
print("- Smooth scroll nastavený na sekciu #co-mozete-urobit-hned-teraz")
print("- Pridané id='co-mozete-urobit-hned-teraz' do sekcie")
