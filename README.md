#### Projet agile <!-- omit in toc -->
# Client Web <!-- omit in toc -->

***Ce repo contient le code du front web du projet agile.***

***Il communique (comme le front android), avec le serveur REST disponible dans le repo "[server](https://gitlab.com/univlille/defi-agile-iut/skeleton/server)" que je vous recommande de lancer avant d'attaquer ce README***

## Sommaire <!-- omit in toc -->
- [TL;DR](#tldr)
- [Setup du projet](#setup-du-projet)
	- [1. Installation](#1-installation)
	- [2. Lancement du serveur web](#2-lancement-du-serveur-web)
	- [3. Compilation du JS](#3-compilation-du-js)
- [FAQ](#faq)
	- [Que contient le `package.json` fourni ?](#que-contient-le-packagejson-fourni-)
	- [Ma question n'est pas là ?](#ma-question-nest-pas-là-)

## TL;DR
1. Fork + clone du repo
2. Dans un terminal :
	```bash
	cd client-web
	npm install
	npm start
	```
3. Dans un 2e terminal :
	```bash
	cd client-web
	npm run watch
	```

## Setup du projet
### 1. Installation


1. Faites un fork de ce repo et clonez dans le dossier de votre choix.
2. Puis installez les dépendances du projet avec la commande :
	```bash
	npm install
	```
	Le repo est en effet initialisé avec un fichier `package.json` prêt à l'emploi (pour plus d'infos, voir FAQ : [Que contient le `package.json` fourni ?](#que-contient-le-packagejson-fourni-)).

	***NB:** Pensez à utiliser le terminal intégré de VSCodium :* <kbd>CTRL</kbd>+<kbd>J</kbd>

### 2. Lancement du serveur web

**Le client web dispose de son propre serveur HTTP. Son rôle est simple : servir tous les éléments statiques de l'application (les fichiers html, css, js, images, etc.).**

Ce serveur web doit donc être lancé **en parallèle** du serveur REST (*qui lui doit en principe être déjà lancé sur le port `8080`*) :

1. **Lancez notre serveur web statique** en tapant :
	```bash
	cd client-web
	npm start
	```

	<img alt="" width="480" src="https://gitlab.com/univlille/defi-agile-iut/skeleton/client-web/uploads/7582c3ae30463f2888942e7e4bf300e4/npm-start.gif" />

	***NB :** vous aurez bien entendu remarqué que la commande est différente de ce que vous aviez fait jusque là en TP de JS. Pour plus d'explications voir dans la FAQ : [Où est passée la commande `npx serve -l 8000` ? et c'est quoi ce `npm start` ?](#où-est-passée-la-commande-npx-serve--l-8000--et-cest-quoi-ce-npm-start-)*

2. **Vérifiez que la page `public/index.html` s'affiche bien dans votre navigateur** en ouvrant l'adresse http://localhost:8000/. Le résultat attendu est le suivant :

	<img alt="" src="https://gitlab.com/univlille/defi-agile-iut/skeleton/client-web/uploads/8960ccf488eeae4ec3196a2138f89fbe/localhost-sans-js.png" >

### 3. Compilation du JS

**Par défaut votre page HTML déclenche une erreur [404](https://http.cat/404) (*visible dans les devtools*) puisqu'elle s'attend à trouver un fichier `public/build/main.bundle.js` qui n'existe pas encore.**

1. **Dans un second terminal** (*je vous recommande un 2e terminal splitté dans VSCodium*), **lancez la compilation en mode "watch"** :
	```bash
	npm run watch
	```

	<img alt="" src="https://gitlab.com/univlille/defi-agile-iut/skeleton/client-web/uploads/efb0c488306150dcced82dbe4ac8b759/npm-run-watch.gif" width="480" >

2. **Vérifiez que la page `public/index.html` affiche maintenant le texte retourné par le serveur REST** : rechargez http://localhost:8000/. Le résultat attendu est le suivant :

	<img alt="" src="https://gitlab.com/univlille/defi-agile-iut/skeleton/client-web/uploads/f747f3a7ba2d4f3c01dd941b0041aaa1/localhost-avec-js.gif" >

**Voilà, vous êtes maintenant prêt à coder !**

## FAQ

### Que contient le `package.json` fourni ?
Il contient principalement la liste des dépendances du projet. Il s'agit notamment des outils qui vont servir à la compilation du code JS moderne pour le rendre compatible avec les anciens navigateurs, à savoir :
- [babel](https://babeljs.io/) pour la compilation des syntaxes ES6+ en ES5
- [webpack](https://webpack.js.org/) pour la gestion des modules ES6 (import/export)

Il contient également différents scripts qui permettront de lancer la compilation et le serveur HTTP statique.

### Où est passée la commande `npx serve -l 8000` ? et c'est quoi ce `npm start` ?<!-- omit in toc -->
Pour mémoire la commande que l'on utilisait dans les TPs pour lancer le serveur web était : `npx serve -l 8000`.

En réalité si vous inspectez le fichier `package.json` vous verrez que l'on retrouve bien cette commande dans la clé `"scripts"` :
```json
"start": "serve public -l tcp://0.0.0.0:8000"
```
Les seules différences avec ce qui était fait en TP sont :
- on n'utilise plus `npx`. A la place, le paquet [serve](https://www.npmjs.com/package/serve) est installé directement dans le projet (*cf. la clé `"dependencies"` du `package.json`*). [serve](https://www.npmjs.com/package/serve) n'est donc pas re-téléchargé à chaque fois (comme c'était le cas avec `npx`), ce qui permet d'accélérer sensiblement le lancement du serveur)
- on passe un paramètre supplémentaire à `serve` qui est le dossier dans lequel on veut lancer le serveur : il s'agit du dossier `public` (c'est celui qui contient la page HTML et tous les assets)
- pour écouter les connexions entrantes sur tous les noms de domaines (et pas que "localhost"), on passe `tcp://0.0.0.0:8000` et plus uniquement le numéro de port.

### Ma question n'est pas là ?
Envoyez votre question sur discord dans le channel `#help` !
