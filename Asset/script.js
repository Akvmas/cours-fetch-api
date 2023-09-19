    const Url = "https://randomuser.me/api?results=50&nat=FR";

    const tableBody = document.getElementById('userTable');
    fetch(Url)
    .then(response => response.json())
    .then(data => {
        const users = data.results;

        users.forEach(user => {
            // Création de la ligne et des cellules
            var row = document.createElement('tr');

            var usernameCell = document.createElement('td');
            usernameCell.textContent = user.login.username;
            row.appendChild(usernameCell);

            var genderCell = document.createElement('td');
            genderCell.textContent = user.gender;
            row.appendChild(genderCell);

            var nameCell = document.createElement('td');
            nameCell.textContent = user.name.title+' ' + user.name.first + ' ' + user.name.last;
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
