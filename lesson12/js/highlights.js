const blackfootApi = ("./json/blackfoot.json");
events = document.querySelector('.events');
highlights = document.querySelector('.highlights');

fetch(blackfootApi)
    .then((response) => response.json())
    .then((blackfoot) => {
        console.log(blackfoot);
        let businesses = blackfoot['businesses']
        let events = blackfoot['events'][0]
        events = events
        console.log(events)
        console.log(blackfoot)

        events.forEach((value, i) => {
            console.log(value)
            console.log(i)
        })
    });