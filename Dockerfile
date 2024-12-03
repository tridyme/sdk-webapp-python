# Étape 1 : Construire le frontend
FROM node:22-alpine AS frontend
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Étape 2 : Configurer le backend
FROM python:3.12-slim
WORKDIR /app
COPY backend/requirements.txt .
RUN pip install -r requirements.txt
COPY backend/ .
COPY --from=frontend /app/build ./frontend/build
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]