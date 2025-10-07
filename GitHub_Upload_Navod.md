# 📋 Návod na nahratie repozitára "nezlomne" na GitHub

## 📋 Informácie o repozitári
- **GitHub používateľ**: `luciaklimackova-hash`
- **Názov repozitára**: `nezlomne`
- **Lokálny repozitár**: `git_backup/nezlomne_web/`

## 🔧 KROK 1: Vytvorenie repozitára na GitHub

1. **Prihláste sa na GitHub**: https://github.com
2. **Vytvorte nový repozitár**:
   - Kliknite na zelené tlačidlo "New" alebo "+" v pravom hornom rohu
   - Repository name: `nezlomne`
   - Description: `Webová stránka Nezlomné - archív pôvodnej verzie`
   - Nastavte ako **Public** alebo **Private** (podľa vašej preferencie)
   - ❌ **NEVYBERAJTE** "Add a README file"
   - ❌ **NEVYBERAJTE** .gitignore alebo license
   - Kliknite **"Create repository"**

## 🚀 KROK 2: Nahranie lokálneho repozitára

Po vytvorení repozitára na GitHub uvidíte inštrukcie. Použite tieto príkazy:

### A) Ak používate HTTPS (odporúčané pre začiatočníkov):

```bash
# Prejdite do repozitára
cd git_backup/nezlomne_web

# Pridajte remote repository
git remote add origin https://github.com/luciaklimackova-hash/nezlomne.git

# Nastavte hlavnú vetvu
git branch -M main

# Nahrajte repozitár na GitHub
git push -u origin main
```

### B) Ak používate SSH (pre pokročilých):

```bash
# Prejdite do repozitára
cd git_backup/nezlomne_web

# Pridajte remote repository
git remote add origin git@github.com:luciaklimackova-hash/nezlomne.git

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

### Pre SSH:
- Musíte mať nastavené SSH kľúče v GitHub účte

## ✅ KROK 4: Overenie

Po úspešnom nahratí:
1. Prejdite na: `https://github.com/luciaklimackova-hash/nezlomne`
2. Uvidíte všetky súbory webstránky
3. Skontrolujte Git históriu (2 commity)

## 📁 Súbory v repozitári

Repozitár obsahuje:
- `index.html` - Hlavná stránka
- `styles.css` - Štýly
- `script.js` - JavaScript
- HTML podstránky (som-vo-vztahu.html, chcem-odist.html, atď.)
- Obrázky a assets
- README.md

## 🆘 Riešenie problémov

### Chyba: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/luciaklimackova-hash/nezlomne.git
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
**https://github.com/luciaklimackova-hash/nezlomne**

✨ **Repozitár bude obsahovať kompletný archív pôvodnej verzie webstránky Nezlomné!**