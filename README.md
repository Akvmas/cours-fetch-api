# Intégration des Données Utilisateur dans un Tableau HTML

Ce guide vous montrera comment extraire des données de l'API de randomuser.me et les afficher dans un tableau HTML.

## Table des matières

- [Structure de base du tableau HTML](#structure-de-base-du-tableau-html)
- [Script JavaScript pour la récupération des données](#script-javascript-pour-la-récupération-des-données)
- [En-tête du tableau](#en-tête-du-tableau)
- [Récupération et affichage des données](#récupération-et-affichage-des-données)

## Structure de Base du Tableau HTML

Commencez par créer une structure HTML pour votre tableau :

```html
<table>
    <thead>
        <tr>
            <th>Nom d'utilisateur</th>
            <th>Genre</th>
            <th>Nom</th>
            <th>Photo</th>
            <th>Ville</th>
            <th>Pays</th>
        </tr>
    </thead>
    <tbody id="userTable">
        <!-- Les données seront insérées ici -->
    </tbody>
</table>
```
## Script JavaScript pour la Récupération des Données
Nous utiliserons fetch pour récupérer les données de l'API. Assurez-vous d'ajouter le script à la fin de votre fichier HTML :

```html
<script src="path/to/your/script.js"></script>
```
## En-tête du Tableau
Assurez-vous que l'en-tête de votre tableau reflète les colonnes que vous voulez afficher :
```html
<thead>
    <tr>
        <th>Nom d'utilisateur</th>
        <th>Genre</th>
        <th>Nom</th>
        <th>Photo</th>
        <th>Ville</th>
        <th>Pays</th>
    </tr>
</thead>
```
## Récupération et Affichage des Données
Dans votre script JavaScript, utilisez le code suivant pour récupérer les données et les afficher dans le tableau :
```JavaScript
const tableBody = document.getElementById('userTable');
const url = 'https://randomuser.me/api?results=50&nat=FR';

fetch(url)
.then(response => response.json())
.then(data => {
    const users = data.results;

    users.forEach(user => {
        var row = document.createElement('tr');
        
        var usernameCell = document.createElement('td');
        usernameCell.textContent = user.login.username;
        row.appendChild(usernameCell);

        var genderCell = document.createElement('td');
        genderCell.textContent = user.gender;
        row.appendChild(genderCell);

        var nameCell = document.createElement('td');
        nameCell.textContent = user.name.first + ' ' + user.name.last;
        row.appendChild(nameCell);

        var imageCell = document.createElement('td');
        var img = document.createElement('img');
        img.setAttribute('src', user.picture.medium);
        img.setAttribute('alt', 'Image de ' + user.name.first + ' ' + user.name.last);
        imageCell.appendChild(img);
        row.appendChild(imageCell);

        var cityCell = document.createElement('td');
        cityCell.textContent = user.location.city;
        row.appendChild(cityCell);

        var countryCell = document.createElement('td');
        countryCell.textContent = user.location.country;
        row.appendChild(countryCell);

        tableBody.appendChild(row);
    });
})
.catch(error => {
    console.error("Erreur lors de la récupération des données", error);
});
```
## Conclusion
Vous avez maintenant un tableau HTML qui affiche les données de l'API randomuser.me de manière dynamique. Vous pouvez facilement adapter ce guide à d'autres structures de données ou à d'autres besoins d'affichage.

```yaml
---
Ce README donne une vue d'ensemble du processus d'intégration des données utilisateur dans un tableau HTML. Vous pouvez copier et coller ce contenu dans un fichier `README.md` à la racine de votre projet.
```
