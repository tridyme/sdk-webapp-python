from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

app = FastAPI()

# Chemin vers le dossier build de l'application React
build_dir = os.path.join(os.path.dirname(__file__), 'frontend', 'build')

# Serve the static files from the React build directory
app.mount("/static", StaticFiles(directory=os.path.join(build_dir, 'static')), name="static")

@app.get("/")
async def read_index():
    return FileResponse(os.path.join(build_dir, 'index.html'))

@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    return FileResponse(os.path.join(build_dir, 'index.html'))

@app.get("/api/data")
async def get_data():
    return {"message": "Hello from FastAPI!"}