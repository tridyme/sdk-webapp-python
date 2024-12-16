## Créer mon application

Ce projet vous permet de créer et de publier vos propres applications de ligne et de les proposer dans la marketplace de <a href="https://www.tridyme.com/fr/" target="_blank">TriDyme</a>.

## Sommaire (Optional)

- [Installations](#installations)
- [Créer notre première application](#create-my-own-app)
- [Ajouter des fonctionnalités](#add-features)
- [Les composants](#components)
- [Modification et ajout de composant](#modify-add-components)
- [Déployer son code sur GitHub](#github)
- [Mettre son application en ligne](#online-webapp)
- [License](#license)

## <a name="installations"></a>Installations

Les prérequis suivants doivent être installé:

- Un environnement d'exécution JavaScript: [Node.js](#nodejs), téléchargeable <a href="https://nodejs.org/fr/download/" target="_blank">**ici**</a>
- Un environnement d'exécution Python: [Python](#python), téléchargeable <a href="https://www.python.org/downloads/" target="_blank">**ici**</a>
- Un logiciel de gestion de versions: [Git](#git), téléchargeable <a href="https://git-scm.com/downloads" target="_blank">**ici**</a>
- Un éditeur de code cross-platform: [VSCode](#vscode), téléchargeable <a href="https://code.visualstudio.com/Download" target="_blank">**ici**</a>

### <a name="nodejs"></a>Node.js

Ce kit de développement est écrit en <a href="https://fr.reactjs.org/" target="_blank">**React.js**</a> qui lui même nécessite <a href="https://nodejs.org/fr/" target="_blank">**Node.js**</a>. **Node.js** est un environnement d'exécution JavaScript installable partout, qui permet d'écrire n'importe quel type de programme en JavaScript : outil en ligne de commande, serveur, application desktop, internet des objets (IoT).

Pour installer Node.js, allez sur <a href="https://nodejs.org/fr/download/" target="_blank">**https://nodejs.org/fr/download/**</a> puis suivez les instructions.

Afin de vérifier que Node.js a été bien installé, vous pouvez utiliser **Invite de Commandes** (cmd.exe sur Windows), et tapez la commande `node -v` afin de vérifier que vous n'avez pas de message d'erreur et que la version de Node est supérieur à la version 6.

```shell
$ node -v
v16.14.0
```

**Node.js** est installé avec **npm** est le gestionnaire de modules de Node. Afin de vérifier que **npm** est bien installé et que la version de Node est supérieur à la version 5, tapez la commande `npm -v` :

```shell
$ npm -v
6.9.0
```

### <a name="git"></a>Git

<a href="https://git-scm.com/">**Git**</a> est un logiciel de gestion de versions, il permet de versionner, d'enregistrer et de rendre open-source du code. Pour l'installer: <a href="https://git-scm.com/downloads" target="_blank">**https://git-scm.com/downloads**</a>.

De même, pour vérifier que l'installation c'est bien déroulé, taper la commande `git version`:

```shell
$ git version
git version 2.21.0.windows.1
```

### <a name="vscode"></a>VSCode (recommandé)

Afin de pouvoir développer son application, le plus simple est d'utiliser <a href="https://code.visualstudio.com">**VSCode**</a> qui est un éditeur de code cross-platform, open-source et gratuit supportant une dizaine de langages.

Pour l'installer: <a href="https://code.visualstudio.com/Download" target="_blank">**https://code.visualstudio.com/Download**</a>.

## Installation des prérequis

### Installation de VS Code

### Installation de Git

### Installation de Python 3.12

### Installation de Node.js 22

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
