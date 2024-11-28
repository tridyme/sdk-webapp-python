from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
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

# Chemin vers le dossier build de l'application React
build_dir = os.path.join(os.path.dirname(__file__), '../frontend', 'build')

# Serve the static files from the React build directory
app.mount("/static", StaticFiles(directory=os.path.join(build_dir, 'static')), name="static")

@app.get("/")
async def read_index():
    return FileResponse(os.path.join(build_dir, 'index.html'))

@app.get("/applications/{applicationId}")
async def read_index():
    return FileResponse(os.path.join(build_dir, 'index.html'))

@app.get("/applications/{applicationId}/models/{modelId}")
async def read_index():
    return FileResponse(os.path.join(build_dir, 'index.html'))

@app.get("/api/data")
async def get_data():
    return {"message": "Hello from FastAPI!"}

@app.post("/api/analysis")
async def analyze_state(state: dict):
    # Effectuer le calcul sur l'état reçu
    print('state', state['data'])
    result = {"calculated_value": "calcul fini"}  # Exemple de calcul
    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", reload=True)