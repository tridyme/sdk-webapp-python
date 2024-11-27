## Getting started

1/ Création d'un environnement virtuel

```shell
$ python3 -m venv env
```

2/ Activation de l'environnement virtuel

```shell
$ source env/bin/activate
```

3/ Installation des librairies

Mettre à jour pip:

```shell
$ pip install --upgrade pip
```

```shell
$ python3 -m pip install -r requirements.txt
```

4/ Configuration de fastapi

<!-- ```shell
$ uvicorn main:app --port 8000  --reload
``` -->

```
$ python3 main.py
```

## Worker

```
$ celery -A worker.celery_app worker --loglevel=info --pool=solo
```

On Windows you may face following error : 
DLL load failed while importing onnx_cpp2py_export: Une routine d’initialisation d’une bibliothèque de liens dynamiques (DLL) a échoué.

To solve this run winget install --id Microsoft.VCRedist.2015+.x64 --source winget on cmd/shell