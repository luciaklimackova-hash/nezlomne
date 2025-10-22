# Aktualizácia hero sekcie - Chcem odísť

## Dátum: 2025-10-22 (posledná aktualizácia: 18:42)

## Vykonané zmeny:

### HTML štruktúra (1:1 s "Som vo vzťahu")
- Odstránená trieda `hero--chcem-odist` a wrapper `<div class="container">`
- Použitá priama štruktúra: `<section class="hero">` → `<div class="hero__content">`
- Zmenené triedy: `hero__cta` → `hero__actions`, `hero__note` → `hero__microtext`
- CTA zmenené z `<button onclick>` na `<a href="#co-mozete-urobit-hned-teraz">` pre smooth scroll
- Mikrotext integrovaný priamo do `.hero__actions` bloku

### CSS štýly (1:1 s "Som vo vzťahu")
**Desktop:**
- `.hero`: min-height:60vh, flexbox, padding:48px 24px
- `.hero__content`: max-width:720px, centrovanie, text-align:center
- `.hero__title`: Merriweather, 56px, font-weight:700, line-height:1.15
- `.hero__subtitle`: Source Sans 3, 20px, color:#504F50, line-height:1.6
- `.hero__actions`: flex column, align-items:center, gap:10px, margin-top:24px
- `.hero__actions .btn`: background:#AB2574, 18px font, padding:14px 24px, border-radius:8px
- `.hero__microtext`: Source Sans 3, 15px, color:#504F50, margin-top:6px

**Responzívne:**
- max-width:1023.98px: title:44px, subtitle:18px
- max-width:767.98px: hero padding:64px 20px, title:34px, subtitle:17px, btn:100% width (max:360px), microtext:14px

### Dodatočné úpravy:
- Pridané `html{ scroll-behavior:smooth; }` pre plynulý scroll
- Pridané `id="co-mozete-urobit-hned-teraz"` na Next Steps sekciu
- Prebíjanie starých float štýlov: `float:none !important`

### Súbory aktualizované:
- `chcem-odist.html`
- `dist/chcem-odist.html`
- `git_current_version/chcem-odist.html`

### Deployment:
- URL: https://im9bskcn4x2n.space.minimax.io/chcem-odist.html
- Referenčná stránka: https://im9bskcn4x2n.space.minimax.io/som-vo-vztahu.html

## Výsledok:
Hero sekcia na podstránke "Chcem odísť" je teraz vizuálne a štrukturálne identická so sekciou na podstránke "Som vo vzťahu". Všetky rozloženia, fonty, medzery, zarovnania a responzívne hodnoty sú synchronizované.
