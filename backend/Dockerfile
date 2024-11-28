# Utiliser une image de base pour Python
FROM python:3.12-slim

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de l'application backend
COPY requirements.txt ./requirements.txt
COPY main.py ./main.py

# Installer les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Exposer le port sur lequel l'application sera accessible
EXPOSE 8000

# Commande pour démarrer l'application FastAPI
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
