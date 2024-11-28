#!/bin/bash

# Étape 1: Mise en route de Python
echo "Initialisation de l'environnement Python..."
cd backend
python3.12 -m venv env
source env/bin/activate
pip install --upgrade pip
pip install -r requirements.txt


# Étape 2: Mise en route de React.js
echo "Initialisation de l'application React.js..."
cd ../frontend
nvm use 22
npm install
cd module-federation
npm install
cd ../..

# Étape 3: Lancement de React.js
echo "Lancement de l'application React.js..."
cd frontend
npm run start:federation &
cd ..

# Étape 4: Lancement de Python
echo "Lancement de l'application Python..."
python3 backend/main.py
