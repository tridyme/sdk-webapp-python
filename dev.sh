#!/bin/bash

# Étape 1: Lancement du frontend
echo "Lancement du frontend..."
cd frontend
npm run start:federation &
cd ..

# Étape 4: Lancement du backend
echo "Lancement du backend..."
python3 backend/main.py
