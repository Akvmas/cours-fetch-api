    function getImageUrl(gender) {
        if (gender === 'female') {
            return 'https://thenounproject.com/api/private/icons/5939037/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0';  // Remplacez par le chemin réel vers votre image
        } else if (gender === 'male') {
            return 'https://static.thenounproject.com/png/4464174-200.png';  // Remplacez par le chemin réel vers votre image
        } else {
            return '';  // Remplacez par le chemin réel vers votre image
        }
    }
    
    const tableBody = document.getElementById('userTable');
    const Url = 'https://randomuser.me/api?results=50';
    
    fetch(Url)
        .then(response => response.json())
        .then(data => {
            const users = data.results;
    
            users.forEach(user => {
                var row = document.createElement('tr');
    
                var usernameCell = document.createElement('td');
                usernameCell.textContent = user.login.username;
                row.appendChild(usernameCell);
    
                var genderCell = document.createElement('td');
                var genderImg = document.createElement('img');
                genderImg.setAttribute('src', getImageUrl(user.gender));
                genderImg.setAttribute('alt', 'Icône de genre');
                genderImg.setAttribute('width', '100');  // Définir la largeur
                genderImg.setAttribute('height', '100');
                genderCell.appendChild(genderImg);
                row.appendChild(genderCell);
    
                var nameCell = document.createElement('td');
                nameCell.textContent = user.name.title + ' ' + user.name.first + ' ' + user.name.last;
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
                var flagSpan = document.createElement('span');
                var countryCode = user.nat.toLowerCase();  // Convertir le code du pays en minuscules
                flagSpan.classList.add('flag-icon', 'flag-icon-' + countryCode);
                countryCell.appendChild(flagSpan);
                row.appendChild(countryCell);
    
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des données", error);
        });
    