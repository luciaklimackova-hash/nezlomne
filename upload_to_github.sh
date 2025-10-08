#!/bin/bash

# 🚀 Skript na nahratie AKTUÁLNEJ verzie repozitára "nezlomne-current" na GitHub
# Používateľ: luciaklimackova-hash
# Repozitár: nezlomne-current (alebo nezlomne-aktualne)

echo "🔗 Nahráváme AKTUÁLNU verziu repozitára na GitHub..."
echo "📁 Repozitár bude: https://github.com/luciaklimackova-hash/nezlomne-current"
echo ""

# Skontrolujeme, či sme v správnom adresári
if [ ! -d ".git" ]; then
    echo "❌ Chyba: Nie ste v Git repozitári!"
    echo "💡 Spustite skript z adresára: git_current_version/"
    exit 1
fi

echo "📊 Stav repozitára:"
git log --oneline | head -3
echo ""

# Pridáme remote repository (ak už neexistuje)
echo "🔗 Pridávame GitHub remote repository..."
git remote remove origin 2>/dev/null || true

# Ponúkneme možnosť výberu názvu repozitára
echo "🎯 Vyberte názov repozitára na GitHub:"
echo "   1) nezlomne-current"
echo "   2) nezlomne-aktualne" 
echo "   3) nezlomne-website"
echo "   4) nezlomne"
echo ""
read -p "Zadajte číslo (1-4) alebo vlastný názov: " choice

case $choice in
    1) REPO_NAME="nezlomne-current" ;;
    2) REPO_NAME="nezlomne-aktualne" ;;
    3) REPO_NAME="nezlomne-website" ;;
    4) REPO_NAME="nezlomne" ;;
    *) REPO_NAME="$choice" ;;
esac

echo "✅ Vybraný názov repozitára: $REPO_NAME"
git remote add origin https://github.com/luciaklimackova-hash/$REPO_NAME.git

# Nastavíme hlavnú vetvu na main
echo "🌿 Nastavujeme hlavnú vetvu na 'main'..."
git branch -M main

# Nahráme repozitár
echo "📤 Nahráváme repozitár na GitHub..."
echo "🔑 GitHub vás požiada o autentifikáciu:"
echo "   Username: luciaklimackova-hash"
echo "   Password: Váš GitHub Personal Access Token"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Úspech! Repozitár bol nahraný na GitHub"
    echo "🌐 Dostupný na: https://github.com/luciaklimackova-hash/$REPO_NAME"
    echo "📊 Nahraných súborov: $(git ls-files | wc -l)"
    echo "💾 Veľkosť repozitára: $(du -sh .git | cut -f1)"
else
    echo ""
    echo "❌ Chyba pri nahrávaní. Skontrolujte:"
    echo "   1. Internetové pripojenie"
    echo "   2. GitHub autentifikáciu"
    echo "   3. Či repozitár '$REPO_NAME' existuje na GitHub"
    echo ""
    echo "💡 Najprv vytvorte repozitár na GitHub s názvom: $REPO_NAME"
fi
