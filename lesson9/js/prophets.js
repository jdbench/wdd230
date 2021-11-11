const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const prophets = jsonObject[prophets];
const image = document.querySelector('img');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        prophets.forEach(prophet => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let image = document.createElement('img');
            let birthday = document.createElement('p');
            let birthPlace = document.createElement('p');

            h2.textContent = `${prophet.name} ${prophet.lastname}`
            birthday.textContent = `Date of Birth: ${prophet.birthdate}`
            birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`

            image.setAttribute('src', prophet.imageurl)
            image.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`)

            card.appendChild(h2)
            card.appendChild(image)
            card.appendChild(birthday)
            card.appendChild(birthPlace)
            document.querySelector('div.cards').appendChild(card)
        });
    })