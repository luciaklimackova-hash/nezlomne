# Aktualizácia hero sekcie - Chcem odísť

## Dátum: 2025-10-22

## Vykonané zmeny:

### HTML štruktúra
- Zmenená trieda `hero-cta` na `hero__actions` pre konzistenciu
- Pridaný mikrotext `<p class="hero__microtext">Bezplatné materiály • Citlivo • Bez tlaku</p>` pod CTA tlačidlo

### CSS štýly
**Desktop:**
- `.hero__actions`: flexbox centrovanie (flex-direction: column, align-items: center, gap: 8px)
- `.hero__actions .btn`: #AB2574 pozadie, 18px font, 14px/24px padding
- `.hero__microtext`: Source Sans 3 font, 15px, #504F50 farba, centrovanie

**Mobilné (max-width: 768px):**
- `.hero__actions`: gap: 10px
- `.hero__microtext`: 14px font, margin-top: 8px

### Súbory aktualizované:
- `chcem-odist.html`
- `dist/chcem-odist.html`
- `git_current_version/chcem-odist.html`

## Výsledok:
Hero sekcia na podstránke "Chcem odísť" má teraz rovnaké vizuálne zarovnanie ako na podstránke "Som vo vzťahu" - CTA tlačidlo je vycentrované a mikrotext je priamo pod ním.
