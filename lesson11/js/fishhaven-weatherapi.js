const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=eb89a2a288bf7798308b3106df4a6297";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=eb89a2a288bf7798308b3106df4a6297";
//Preston
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        //declare variables
        let fTemp = kToF(jsObject.main.temp);
        let prestonTemp = document.getElementById('temp');
        let desc = jsObject.weather[0].description;
        let wind = Math.round(jsObject.wind.speed);
       
        //Add humitity
        document.getElementById('humidity').innerHTML = `Humidity: ${jsObject.main.humidity}%`
       
        //Add description
        document.getElementById('desc').textContent = `Currently: ${desc}`;
       
        //Add Wind Speed
        document.getElementById('wind').textContent = `Wind Speed: ${wind} mph`;
       
        //Add Today's low temperature
        document.getElementById('temp-low').innerHTML = `Low: ${kToF(jsObject.main.temp_min)}&#8457;`;
       
        //Add Today's high temperature
        document.getElementById('temp-high').innerHTML = `High: ${kToF(jsObject.main.temp_max)}&#8457;`;
       
        //Add Real Feel Temperature
        document.getElementById('real-feel').innerHTML = `Real Feel: ${kToF(jsObject.main.feels_like)}&#8457;`;
       
        //Add Current Temperature
        prestonTemp.innerHTML = `Temperature: ${fTemp}&#8457;`;

        //Calculate Windchill
        let windChill = Math.round(fTemp - (wind * .7));

        //Add windchill
        document.getElementById("wind-chill").innerHTML=`Wind Chill: ${windChill}&#8457;`;
    });
    //Fetch forecast url
    fetch(forecastUrl)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        //Add daily weather forecast
        const currentDate = new Date(jsObject.list[0].dt_txt)
        const today = currentDate.getDay();
        let i = today;
        let dayOfTheWeek;
        const days = document.querySelectorAll('.five-day-name');

        //Make days array
        const abrevDays = {
            0: 'SUN',
            1: 'MON',
            2: 'TUE',
            3: 'WED',
            4: 'THUR',
            5: 'FRI',
            6: 'SAT',
        }

        days.forEach((day) => {
            Object.keys(abrevDays).forEach((day) => {
                if (i > 6) {
                    i = 0;
                }
                if (day == i) {
                    dayOfTheWeek = abrevDays[i];
                }
            })
            day.innerHTML = dayOfTheWeek;
            i += 1;
        })

        //Add 5 day forecast image
        const fiveDayImages = document.querySelectorAll('.five-day-image');
        //add forecast temp
        const fiveDayTemp = document.querySelectorAll('.five-day-temp');
        //create new initiator
        let j = 0;

        jsObject.list.forEach((item, i) => {
            let itemDT = new Date(item.dt_txt);
            let now = itemDT.getHours();

            if (now == 18) {
                //Print weather for five day forecast
                let fiveDayWeather = kToF(jsObject.list[i].main.temp);
                fiveDayTemp[j].innerHTML = `${fiveDayWeather}&#8457;`;
                //Give each day correct forecast image
                let imagesrc = `https://openweathermap.org/img/w/${jsObject.list[i].weather[0].icon}.png`;
                fiveDayImages[j].setAttribute('src', imagesrc)

                j += 1;
            }
        })
        for (i = today, j = 0; j < fiveDayImages.length; j++, i++){
            if(i > 6){
                i = 0;
            }
            fiveDayImages[j].setAttribute('alt', `An image depicting the weather of ${weekDays[i]}`)
        }
});



function kToF(kTemp){
    return Math.round((kTemp * (9/5)) - 459.67);
}