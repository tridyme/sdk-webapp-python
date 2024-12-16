from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv  # Importer load_dotenv
from bson.objectid import ObjectId
import httpx
import pathlib
import os

app = FastAPI()

# Configurer CORS
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Récupération de la variable d'environnement
env_path = pathlib.Path(__file__).parent.parent / '.env'  # Chemin vers .env.development
load_dotenv(dotenv_path=env_path)  # Charger les variables d'environnement
REACT_APP_PLATFORM_API_URL = os.environ.get("REACT_APP_PLATFORM_API_URL")
if not REACT_APP_PLATFORM_API_URL:
    raise RuntimeError("REACT_APP_PLATFORM_API_URL non définie dans les variables d'environnement")


# Chemin vers le dossier build de l'application React
build_dir = os.path.join(os.path.dirname(__file__), '../frontend', 'build')

# Serve the static files from the React build directory
app.mount("/static", StaticFiles(directory=os.path.join(build_dir,
                                                        'static')), name="static")


@app.get("/")
async def read_index():
    return FileResponse(os.path.join(build_dir, 'index.html'))


@app.get("/remoteEntry.js")
async def read_index():
    return FileResponse(os.path.join(build_dir, 'remoteEntry.js'))


@app.get("/applications/{applicationId}")
async def read_index():
    return FileResponse(os.path.join(build_dir, 'index.html'))


@app.get("/applications/{applicationId}/models/{modelId}")
async def read_index():
    return FileResponse(os.path.join(build_dir, 'index.html'))


@app.get("/api/generateId")
async def get_remote_id():
    return {"Id": str(ObjectId())}  

@app.post("/api/analysis")
async def analyze_state(state: dict):
    # Effectuer le calcul sur l'état reçu
    print('state', state['data'])
    state['data']['h']['value'] += 3
    return state


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", reload=True)



