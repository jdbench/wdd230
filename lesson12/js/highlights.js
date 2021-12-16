const blackfootApi = ("./json/blackfoot.json");
let eventsDiv = document.querySelector('.event-text');
let highlightsDiv = document.querySelector('.highlights');

fetch(blackfootApi)
    .then((response) => response.json())
    .then((blackfoot) => {
        let businesses = blackfoot['businesses'];

        businesses.forEach((business, i) => {
            if (i >= 0 && i < 3){
                b = `<div class="business">
                        <h3 class="business-head">${business.name}</h3>
                        <img class="business-logo" src="./images/${business.logo}" alt="business logo for ${business}">
                        <p class="business-desc">${business.description}</p>
                        <a href="tel:${business.phone} class="business-phone"><i class="fa fa-phone"></i>${business.phone}</a>
                        <p class="business-address"><i class="fa fa-map-pin"></i>${business.address}</p>
                        <a href="${business.website} class="business-site"><i class="fa fa-globe"></i>${business.website}</a>
                        <a href="${business.facebook} class="business-facebook"><i class="fa fa-facebook"></i> ${business.facebook_username}</a>
                     </div>`
                
                highlightsDiv.insertAdjacentHTML('beforeend', b);
                
                
            }
        })
        blackfoot.events.forEach((event) => {
            e = `<p class="event">${event}</p>`;
            eventsDiv.insertAdjacentHTML('beforeend', e);
        })
    });