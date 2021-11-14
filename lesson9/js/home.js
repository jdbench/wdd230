const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const image = document.querySelector('img');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        
        console.table(jsonObject);
        
        const towns = jsonObject['towns'];
        towns.forEach(town => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let image = document.createElement('img');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');

            h2.textContent = `${town.name}`;
            h3.textContent = `${town.motto}`
            founded.textContent = `Year Founded: ${town.yearFounded}`;
            population.textContent = `Place of Birth: ${town.currentPopulation}`;
            rainfall.textContent = `Average Rainfall: ${town.averageRainfall}`;

            image.setAttribute('src', '../lesson9/images/150x150.png')
            image.setAttribute('data-src', town.photo);
            image.setAttribute('alt', `${town.name}`);

            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(founded);
            card.appendChild(image);
            card.appendChild(population);
            card.appendChild(rainfall);
            document.querySelector('div.towns').appendChild(card);
        });
    })