# 📋 Návod na nahratie AKTUÁLNEJ verzie "nezlomne" na GitHub

## 📋 Informácie o repozitári
- **GitHub používateľ**: `luciaklimackova-hash`
- **Odporúčaný názov repozitára**: `nezlomne-current` (alebo `nezlomne-aktualne`)
- **Lokálny repozitár**: `git_current_version/`
- **Verzia**: Aktuálna opravená verzia s funkčnými pozadiami

## 🔧 KROK 1: Vytvorenie repozitára na GitHub

1. **Prihláste sa na GitHub**: https://github.com
2. **Vytvorte nový repozitár**:
   - Kliknite na zelené tlačidlo "New" alebo "+" v pravom hornom rohu
   - Repository name: `nezlomne-current` (alebo `nezlomne-aktualne`)
   - Description: `Aktuálna verzia webovej stránky Nezlomné - opravená a funkčná`
   - Nastavte ako **Public** alebo **Private** (podľa vašej preferencie)
   - ❌ **NEVYBERAJTE** "Add a README file" (už je súčasťou projektu)
   - ❌ **NEVYBERAJTE** .gitignore alebo license (už sú súčasťou projektu)
   - Kliknite **"Create repository"**

## 🚀 KROK 2: Nahranie lokálneho repozitára

### Možnosť A: Automatický skript (najjednoduchšie)

```bash
# Prejdite do repozitára
cd git_current_version

# Spustite automatizačný skript
bash upload_to_github.sh
```

Skript vás prevedie procesom a ponúkne výber názvu repozitára.

### Možnosť B: Manuálne príkazy

```bash
# Prejdite do repozitára  
cd git_current_version

# Pridajte remote repository (nahraďte názov ak chcete iný)
git remote add origin https://github.com/luciaklimackova-hash/nezlomne-current.git

# Nastavte hlavnú vetvu
git branch -M main

# Nahrajte repozitár na GitHub
git push -u origin main
```

## 🔑 KROK 3: Autentifikácia

Pri prvom nahrávaní GitHub požiada o autentifikáciu:

### Pre HTTPS:
- **Username**: `luciaklimackova-hash`
- **Password**: Váš GitHub Personal Access Token (nie obyčajné heslo!)

### Ako vytvoriť Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)  
3. Nastavte scope: `repo` (full repository access)
4. Copy token a použite ho ako heslo

## ✅ KROK 4: Overenie

Po úspešnom nahratí:
1. Prejdite na: `https://github.com/luciaklimackova-hash/nezlomne-current`
2. Uvidíte všetky súbory aktuálnej webstránky
3. Skontrolujte Git históriu (2 commity)

## 📁 Obsah repozitára

Repozitár obsahuje **aktuálnu opravenou verziu** s týmito súbormi:

### 🏠 Hlavné stránky
- `index.html` - Domovská stránka
- `som-vo-vztahu.html` - Som vo vzťahu  
- `chcem-odist.html` - Chcem odísť
- `odisla-som.html` - Odišla som
- `o-nas.html` - O nás
- `pomoc-zdroje.html` - Pomoc a zdroje

### 🎨 Štýly a skripty
- `styles.css` - **Opravené** CSS štýly s funkčnými pozadiami
- `script.js` - JavaScript funkcie

### 🖼️ Grafické prvky
- `Asset*.png` - Grafické prvky a obluky (opravené cesty)
- `Logo*.png` - Logá organizácie
- `*.jpg, *.jpeg` - Fotografie a pozadia

### 📋 Dokumentácia
- `README.md` - Dokumentácia projektu
- `.gitignore` - Git ignorované súbory
- `upload_to_github.sh` - Automatizačný skript

## 🎯 Hlavné opravy v tejto verzii

✅ **Header pozadie** - Opravené na funkčný obrázok  
✅ **Obluky na domovskej stránke** - Opravené cesty k Asset súborom  
✅ **"Ako vám môžeme pomôcť?" sekcia** - Funkčné pozadie mitchell copy.jpeg  
✅ **Responzívny dizajn** - Optimalizované pre mobilné zariadenia  
✅ **Navigácia** - Plne funkčné menu so správnymi odkazmi  

## 🆘 Riešenie problémov

### Chyba: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/luciaklimackova-hash/nezlomne-current.git
```

### Chyba s autentifikáciou:
- Skontrolujte používateľské meno a token
- Pre HTTPS použite Personal Access Token namiesto hesla

### Chyba: "Updates were rejected"
```bash
git pull origin main --allow-unrelated-histories
git push origin main
```

## 🎯 Finálny výsledok

Po dokončení bude váš repozitár dostupný na:
**https://github.com/luciaklimackova-hash/nezlomne-current**

✨ **Repozitár bude obsahovať najnovšiu, plne funkčnú verziu webstránky Nezlomné!**

---

## 📊 Štatistiky repozitára
- **Súbory**: 29 súborov
- **Veľkosť**: ~55MB (vrátane všetkých obrázkov)
- **Commity**: 2 (základný commit + automatizačný skript)
- **Autor**: Lucia Klimackova (luciaklimackova@nezlomne.sk)
