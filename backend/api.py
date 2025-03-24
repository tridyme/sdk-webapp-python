from fastapi import APIRouter, HTTPException, Body, Request
from functools import wraps
from fastapi.responses import FileResponse
import os

def handle_exceptions(func):
    @wraps(func)
    async def wrapper(*args, **kwargs):
        try:
            return await func(*args, **kwargs)
        except KeyError as e:
            raise HTTPException(
                status_code=400,
                detail=f"Données invalides : {str(e)}"
            )
        except ValueError as e:
            raise HTTPException(
                status_code=400,
                detail=f"Valeur invalide : {str(e)}"
            )
        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=f"Une erreur interne s'est produite : {str(e)}"
            )
    return wrapper

# Création d'un routeur API
router = APIRouter(prefix="/api", tags=["API"])

# Route pour analyser l'état
@router.post("/analysis")
@handle_exceptions
async def analyze_state(request: Request):
    # Récupérer les données JSON brutes
    json_data = await request.json()
    
    # La clé 'data' peut être présente ou non, gérons les deux cas
    if 'data' in json_data:
        data = json_data['data']
    else:
        data = json_data
    
    # Appeler la fonction de calcul avec les données
    data['length']['value'] += 10
    results = data

    return results

