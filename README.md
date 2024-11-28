## Installation des prérequis

### Installation de Python 3.12

### Installation de Node.js

### Installation de Docker

## Initalisation de l'application

```shell
$ chmod +x init.sh
```

```shell
$ ./init.sh
```

## Lancement de l'application en mode developpement (après initialisation)

```shell
$ chmod +x dev.sh
```

```shell
$ ./dev.sh
```

## Déploiement de l'application

```shell
$ chmod +x deploy.sh
```

```shell
$ ./deploy.sh
```

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
