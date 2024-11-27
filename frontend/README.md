# CB71-RectangularSection

- Afin de permettre aux ingénieurs de pouvoir développer leurs propres applications en ligne, <a href="https://www.tridyme.com/fr/" target="_blank">TriDyme</a> met à disposition le kit de développement <a href="https://github.com/tridyme/sdk-structure-app" target="_blank">sdk-structure-app</a>.

- Ce projet a pour objectif de servir de base simple pour permettre de créer et de publier gratuitement ses propres applications web.

- La démo est accessible ici: <a href="https://sdk-structure-app.netlify.app/" target="_blank">https://sdk-structure-app.netlify.app/</a>.

## Sommaire

- [Installations](#installations)
- [Créer notre première application](#create-my-own-app)
- [Intégration dans Tridyme](#tridyme-integration)
- [Ajouter des fonctionnalités](#add-features)
- [Les composants](#components)
- [Modification et ajout de composant](#modify-add-components)
- [Déployer son code sur GitHub](#github)
- [Mettre son application en ligne](#online-webapp)
- [Pour aller plus loin](#plus-loin)
- [Communauté & Assistance](#assistance)
- [License](#license)

```
cd existing_repo
git remote add origin https://gitlab.com/socotec-blq/cb71-pannebois.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/socotec-blq/cb71-pannebois/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name

Choose a self-explaining name for your project.

## Description

Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges

On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals

Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

Les prérequis suivants doivent être installé:

- Un environnement d'exécution JavaScript: [Node.js](#nodejs), téléchargeable <a href="https://nodejs.org/fr/download/" target="_blank">**ici**</a>
- Un logiciel de gestion de versions: [Git](#git), téléchargeable <a href="https://git-scm.com/downloads" target="_blank">**ici**</a>
- Un éditeur de code cross-platform: [VSCode](#vscode), téléchargeable <a href="https://code.visualstudio.com/Download" target="_blank">**ici**</a>

<a href="https://github.com/tridyme/sdk-structure-app" target="_blank">sdk-structure-app</a> est écrit en <a href="https://fr.reactjs.org/" target="_blank">**React.js**</a> qui lui même nécessite <a href="https://nodejs.org/fr/" target="_blank">**Node.js**</a>. **Node.js** est un environnement d'exécution JavaScript installable partout, qui permet d'écrire n'importe quel type de programme en JavaScript : outil en ligne de commande, serveur, application desktop, internet des objets (IoT).

Pour installer Node.js, allez sur <a href="https://nodejs.org/fr/download/" target="_blank">**https://nodejs.org/fr/download/**</a> puis suivez les instructions.

Afin de vérifier que Node.js version 14 a bien été installé, vous pouvez utiliser **Invite de Commandes** (cmd.exe sur Windows), et tapez la commande `node -v` afin de vérifier que vous n'avez pas de message d'erreur et que la version de Node est supérieur à la version 16.

```shell
$ node -v
v14.X.X
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

## <a name="create-my-own-app"></a>Créer notre première application

### Cloner le projet

Afin de créer notre première application, commençons par cloner <a href="https://github.com/tridyme/sdk-structure-app" target="_blank">sdk-structure-app</a> grâce à **git**.

Pour cela ouvrez votre terminal dans le repertoire ou nous souhaitons avoir notre projet:

```shell
$ git clone https://github.com/tridyme/sdk-structure-app.git
Cloning into 'sdk-structure-app'...
remote: Enumerating objects: 91, done.
remote: Counting objects: 100% (91/91), done.
remote: Compressing objects: 100% (76/76), done.
remote: Total 91 (delta 13), reused 0 (delta 0)
Unpacking objects: 100% (91/91), done.
```

### Démarrage

Une fois le clonage finalisé, vous pouvez renommer le dossier **sdk-structure-app** comme vous le souhaitez, ici nous l'appelerons **section-analysis**:

Puis, entrez dans votre dossier, lancez l'installation des modules **Node.js** via la commande `npm install` et enfin démarrez l'application avec `npm start`:

```shell
$ cd ./section-analysis
$ npm install
$ npm start
```

Notez que notre application a dû s'ouvrir automatiquement dans notre navigateur (si ce n'est pas le cas, ouvrez un nouvel onglet dans votre navigateur et saisissez l'URL indiquée par la commande dans le terminal, normalement http://localhost:3000/ ).

Cette application permet de calculer la surface d'un rectangle ainsi que son inertie suivant X.

## <a name="tridyme-integration"></a>Intégration dans Tridyme

Afin de permettre l'intégration de l'application dans la marketplace de Tridyme il est impératif de nommer la route sur laquelle tridyme redirigera pour accéder à l'application.
Dans le fichier **App.js**, modifier la route principale "/" en ajoutant un chemin spécifique.

```js
<Route exact path="/[nom-de-mon-application]" component={Application} />
<Redirect from="/" to="/[nom-de-mon-application]" />
```

## <a name="add-features"></a>Ajouter des fonctionnalités

A présent, nous souhaitons pouvoir également calculer l'inertie du rectangle suivant Y.

Afin de modifier notre application, allez dans le dossier `src`.
On y trouve le point d’entrée de l’application `src/index.js` ainsi que le composant <a href="https://fr.reactjs.org/" target="_blank">**React.js**</a> décrivant l'ensemble de l'application à savoir: `src/App.js`.

Ce dernier va contenir toutes les vues de notre Application.
Les vues sont situées dans le dossier `src/Views`. Il n'y a qu'une seule vue dans cette Application à savoir `src/Views/SectionAnalysis.js` qui est appelé dans le `src/App.js` de la manière suivante:

```js
import SectionAnalysis from "./Views/SectionAnalysis/SectionAnalysis";
```

Cependant afin de rajouter notre calcul, seul les deux fichiers suivant nous intéressent:

- [`calculations.js`](#calculationjs), est le fichier qui contient nos fonctions de calculs, par exemple la fonction permetant de calculer la surface du rectangle, son inertie suivant X,...
- [`SectionAnalysis.js`](#sectionanalysisjs), est le fichier qui affiche notre vue

### <a name="calculationjs"></a>Le calcul: calculation.js

Ce fichier permet de rajouter en un seul endroit toutes les fonctions de calcul que l'on souhaite:

Par exemple, la fonction permettant de calculer la surface d'un section:

```js
  A: (inputs) => {
    const {
      b,
      h
    } = inputs;
    return b * h;
  }, // NE PAS OUBLIER LA VIRGULE
```

Afin de pouvoir calculer l'inertie d'une section rectangulaire suivant l'axe Y, on rajoute donc à la suite la fonction suivante:

```js
  Iyy: (inputs) => {
    const {
      b,
      h
    } = inputs;
    return h * b ** 3 / 12;
  }, // NE PAS OUBLIER LA VIRGULE
```

Enfin, on met également à jour la fonction `data` qui permet de remettons les résultats du calcul et rajoutant le paramètre Iyy:

```js
  data: (inputs) => {
    return {
      A: calculations.A(inputs),
      Ixx: calculations.Ixx(inputs),
      Iyy: calculations.Iyy(inputs)
    }
  }, // NE PAS OUBLIER LA VIRGULE
```

### <a name="sectionanalysisjs"></a>La vue SectionAnalysis

Ce fichier contient donc la vue de notre Application de calcul de section rectangulaire.
Il affiche les données d'entrée du calcul à savoir la largeur et la hauteur de la section, les résultats du calcul ainsi qu'un graphe permettant de visualiser la section.

Les paramètres que l'on souhaite afficher, se trouve dans à cet endroit:

```js
const [values, setValues] = useState({
  b: 2, // Inputs: Largeur du rectangle
  h: 3, // Inputs: Hauteur du rectangle
  A: 6, // data: Surface du rectangle
  Ixx: 4.5, // data: Inertie du rectangle suivant X
});
```

Nous souhaitons calculer l'inertie de la section rectangulaire suivant Y. Pour cela, nous rajoutons l'attribut Iyy:

```js
const [values, setValues] = useState({
  b: 2, // Inputs: Largeur du rectangle
  h: 3, // Inputs: Hauteur du rectangle
  A: 6, // data: Surface du rectangle
  Ixx: 4.5, // data: Inertie du rectangle suivant X,
  Iyy: 2, // data: Inertie du rectangle suivant Y,
});
```

Nous pouvons interagir et modifier les données d'entrées grâce au composant `InputElem`.

```js
<InputElem
  value={values.A}
  text={"A"}
  description={"Surface:"}
  unit={"m2"}
  onChange={handleChangeValues("A")}
/>
```

La fonction `handleChangeValues` permet de gérer la mise à jour de l'affichage suite au calcul.

Afin d'afficher l'inertie suivant Y, nous rajoutons donc un composant `InputElem` pour Iyy de la manière suivante:

```js
<CardElem title="Résultats" subtitle="Section: caractéristiques" >
  <InputElem
    value={values.A}
    text={"A"}
    description={"Surface:"}
    unit={"m2"}
    onChange={handleChangeValues("A")}
  />
  <InputElem
    value={values.Ixx}
    text={"Ixx"}
    description={"Interie suivant x:"}
    unit={"m4"}
    onChange={handleChangeValues("Ixx")}
  />
  <InputElem
    value={values.Iyy}
    text={"Iyy"}
    description={"Interie suivant y:"}
    unit={"m4"}
    onChange={handleChangeValues("Iyy")}
  />
</CardElem>
```

## <a name="components"></a>Les composants

Nous avons vu le composant `InputElem` qui permet respectivement d'afficher les valeurs définis dans **values**.
Les composants sont listés dans le dossier `src/Components`. Tout comme les vues, vous êtes libres de les modifier ou de créer vos propres composants.
Les autres composants présents dans `SectionAnalysis.js` sont:

- [`ChartElem`](#chartelem)
- [`Grid`](#grid)
- [`CardElem`](#cardelem)

### <a name="chartelem"></a>ChartElem

Il est importé à partir du répertoire `Components` de la manière suivante:

```js
import ChartElem from "../../Components/ChartElem";
```

`ChartElem` permet d'afficher des graphes, il possède la propriété:

- `dataForChart`: prend en paramètre un objet qui possède lui-même les propriétées suivantes:
  - `dataForChart`: qui une chaîne de caractère et qui correspond au titre du graphe
  - `value`: qui est un tableau contenant l'ensemble des coordonnées **{x: X, y: Y}** que l'on souhaite afficher
  - `axisName`: qui est un objet contenant le nom des axes que l'on souhaite afficher: **{x: nomAxeX, y: nomAxeY}**
  - `unit`: qui est un objet contenant le nom unités que l'on souhaite afficher: **{x: unitéAxeX, y: unitéAxeY}**

Exemple:

```js
<ChartElem
  dataForChart={{
    chartTitle: "Section Rectangulaire",
    value: [
      { x: 0, y: 0 },
      { x: inputsData.b.value, y: 0 },
      { x: inputsData.b.value, y: inputsData.h.value },
      { x: 0, y: inputsData.h.value },
      { x: 0, y: 0 },
    ],
    axisName: { x: "Largeur de la Section ", y: "Hauteur de la section " },
    unit: { x: "m", y: "m" },
  }}
/>
```

### <a name="grid"></a>Grid

Le composant `Grid` provient de la librairie `@material-ui/core` et qui permet de constitué une grille dans laquelle les composants sont organisés et affichés de manière _responsive_ (c'est à dire que l'affichage s'adapte à la taille de l'écran).
Ce composant est importé de la librairie `@material-ui/core` de la manière suivante:

```js
import { Grid } from "@material-ui/core";
```

### <a name="cardelem"></a>CardElem

Ce composant est importé à partir du répertoire `Components` de la manière suivante:

```js
import CardElem from "../../Components/CardElem";
```

Il permet d'afficher les Cartes contenant les composants `InputElem`.

## <a name="modify-add-components"></a>Modification et ajout de composant

les composants éxistants de <a href="https://github.com/tridyme/sdk-structure-app" target="_blank">sdk-structure-app</a> sont écrits en <a href="https://fr.reactjs.org/" target="_blank">**React.js**</a>, ils sont donc entièrement modifiables.

Il est également possible de rajouter des composants. Pour plus d'information, voir les tutoriels suivants:

- Pour **React.js** sur Openclassrooms: <a href="https://openclassrooms.com/fr/courses/4664381-realisez-une-application-web-avec-react-js" target="_blank">Réalisez une application web avec React.js</a>
- **React.js** est basé lui-même sur **Javascript** qui est le language permettant de faire des calculs dans le navigateur web, pour plus d'information, voir le tutoriel d'Openclassrooms: <a href="https://openclassrooms.com/fr/courses/1916641-dynamisez-vos-sites-web-avec-javascript" target="_blank">Dynamisez vos sites web avec JavaScript</a>

## <a name="github"></a>Déployer son code sur GitHub

Une fois, les modifications implémentées, vous pouvez déployer votre code sur <a href="https://www.github.com/" target="_blank">**GitHub**</a>. Cela permet:

- d'enregistrer son code
- de travailler à plusieurs dessus
- et, nous le verrons ci-dessous, de le mettre en ligne

Pour cela, vous pouvez consulter notre article <a href="https://www.tridyme.com/fr/blog/heberger-avec-github">Deployer son Application Web en ligne gratuitement avec Netlify</a>.

- Créer un compte Heroku: <a href="https://signup.heroku.com/login" target="_blank">https://signup.heroku.com/login</a>
- Puis installer Heroku: <a href="https://devcenter.heroku.com/articles/heroku-cli#download-and-install" target="_blank">https://devcenter.heroku.com/articles/heroku-cli#download-and-install</a>

Une fois que le code de votre Application en héberger sur GitHub, vous pouvez déployer facilement votre Application.
Afin de mettre son application en ligne, voir le tutoriel suivant:
<a href="https://www.tridyme.com/fr/blog/deploiement-avec-netlify">Deployer son Application Web en ligne gratuitement avec Netlify</a>

Si vous souhaitez la mettre en ligne de manière décentralisée avec le Web3.0:
<a href="https://www.tridyme.com/fr/blog/application-web3-decentralise">Deployer son Application Web décentralisée gratuitement avec Fleek</a>

## <a name="plus-loin"></a>Pour aller plus loin

Vous pouvez utliser la librairie opensource `@tridyme/aec` qui permet de faire des calculs pour le secteur AEC (Architecture Engineering and Construction).

En utilisant cette librairie, vous pouvez remplacer le code de `calculation.js` par le suivant:

```js
import { SectionGeometry } from "@tridyme/aec";

//Option 1: utilisation de la librairie @tridyme/aec: https://github.com/tridyme/aec
const calculations = {
  data: (inputs) => {
    return {
      A: new SectionGeometry.RectangularSection(inputs).A,
      Ixx: new SectionGeometry.RectangularSection(inputs).Iy,
    };
  },
};

export default calculations;
```

Pour plus de détail sur cette librairie, voir son répertoire sur <a href="https://github.com/tridyme/aec" target="_blank">GitHub</a>.

## <a name="assistance"></a>Communauté & Assistance

Afin de mettre son application en ligne, nous allons utiliser <a href="https://www.heroku.com/" target="_blank">**Heroku**</a> qui permet de dépoyer des applications de manière gratuite.

Pour cela, il faut d'abord:

- Créer un compte Heroku: <a href="https://signup.heroku.com/login" target="_blank">https://signup.heroku.com/login</a>
- Puis installer Heroku: <a href="https://devcenter.heroku.com/articles/heroku-cli#download-and-install" target="_blank">https://devcenter.heroku.com/articles/heroku-cli#download-and-install</a>

Puis utiliser **Git** pour deployer l'application sur <a href="https://www.heroku.com/" target="_blank">**Heroku**</a>:

```shell
$ git add .
$ git commit -m "Added a Procfile."
$ heroku login
#   Heroku credentials
$ heroku create
$ git push heroku master
#   Launching... done
#      http://example.herokuapp.com deployed to Heroku
```

Your app should now be running on **http://example.herokuapp.com**.

## Tests

You can unit test your calculation functions :

Refer to **src/MyApp/Calculations/calculations.test.js**

> Note: To create new tests, prefix your files with **.test.js** (auto detection when you run npm test)

```javascript
it("surfaceRectangle() should return surface of square", () => {
  //Declare your input data
  const input = {
    h: {
      value: 2,
    },
    b: {
      value: 2,
    },
  };

  //Test if input equal desired output
  expect(calculationFunctions.surfaceRectangle(input)).toEqual(4);
});
```

Run this test with the command :

```shell
npm test
```

---

## Contributing

> To get started...

### Step 1

- **Option 1**

  - 🍴 Fork this repo!

- **Option 2**
  - 👯 Clone this repo to your local machine using `https://gitlab.com/alexis1990/triazur_plugin.git`

### Step 2

- **Code** 🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/alexis1990/triazur_plugin/compare/" target="_blank">`https://github.com/alexis1990/triazur_plugin/compare/`</a>.

---

## FAQ

- **Let us know your questions?**
  - No problem! Just do it.

---

## Support

Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap

If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing

State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment

Show your appreciation to those who have contributed to the project.

## <a name="license"></a>License

For open source projects, say how it is licensed.

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2021 © <a href="http://tridyme.com" target="_blank">TriDyme</a>.
