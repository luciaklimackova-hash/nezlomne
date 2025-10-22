#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Načítaj súbor
with open('chcem-odist.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Starý hero blok
old_hero = '''    <!-- Hero Section -->
    <section class="hero" id="main-content">
        <div class="hero-background">
            <img src="Asset 24.png" alt="" class="hero-arches" aria-hidden="true">
        </div>
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">„Odísť je ťažké.<br>Zostať môže byť ešte vyčerpávajúcejšie."</h1>
                <p class="hero-subtitle">Podpora pri príprave bezpečného odchodu.</p>
                <div class="hero-description">
                    <p>Cítite, že vo vzťahu už nemôžete zostať — ale bojíte sa, čo bude ďalej? My vám pomôžeme pripraviť bezpečný, premyslený plán tak, aby ste chránili seba a deti a nezostali zlomená.</p>
                </div>
                <div class="hero__actions">
                    <button class="btn btn-primary" onclick="scrollToSection('help-section')">Chcem vedieť, ako odísť bezpečne</button>
                    <p class="hero__microtext">Bezplatné materiály • Citlivo • Bez tlaku</p>
                </div>
            </div>
        </div>
    </section>'''

# Nový hero blok
new_hero = '''    <!-- Hero Section -->
    <section class="hero hero--chcem-odist" id="main-content">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title">Odísť je ťažké.<br>Zostať môže byť ešte ťažšie.</h1>
                <p class="hero__subtitle">Podpora pri plánovaní odchodu – krok za krokom pre vás a deti.</p>
                <div class="hero__cta">
                    <button class="btn btn-primary" onclick="scrollToSection('help-section')">Chcem vedieť, ako odísť bezpečne</button>
                </div>
                <p class="hero__note">(Bezplatné materiály • Citlivo • Bez tlaku)</p>
            </div>
        </div>
    </section>'''

# Vymeň
content = content.replace(old_hero, new_hero)

# Ulož
with open('chcem-odist.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Hero sekcia upravená")
