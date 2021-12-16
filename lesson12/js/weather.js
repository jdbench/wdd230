const apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=43.1905&lon=-112.3450&units=imperial&appid=eb89a2a288bf7798308b3106df4a6297";

let weatherDiv = document.querySelector(".weather");
let forecastDiv = document.querySelector(".three-day-forecast");
let alertDiv = document.querySelector(".alert");
//current weather
fetch(apiUrl)
    .then((response) => response.json())
    .then((weather) => {
        let current = weather['current'];
        let temp = `${Math.round(current['temp'])}<sup>\u00B0F</sup>`;
        let humidity = `${current['humidity']}%`;
        let current_weather = current['weather'][0];
        let icon = current_weather['icon'];
        let desc = current_weather['description'];

        
        display_weather = `<h3 class="weather-header">Current Weather</h3>
                           <img src="http://openweathermap.org/img/wn/${icon}.png" class="current-weather-icon" alt="current weather icon for ${desc}">
                           <p class="current-desc">${desc}</p>
                           <p class="current-temp">${temp}</p>
                           <p class="current-humidity">${humidity}</p>`;
        weatherDiv.innerHTML = display_weather;
        if (weather['alerts']) {
            let alerts = weather['alerts'][0]['event'];
            display_alerts = `<div class="alert">
                                <h1 class="alert-text">Alert: ${alerts}</h1><div><a href="javascript:void(0);" class="close" onclick="exitAlert()">❌</a></div>
                              </div>`;
            alertDiv.innerHTML = display_alerts;
        }
        
});
//forecasted weather
fetch(apiUrl)
    .then((response) => response.json())
    .then((forecast) => {
        let fday = "";
        forecast.daily.forEach((value, i) => {
            if (i > 0 && i < 4) {
                let day = new Date(value.dt * 1000).toLocaleDateString("en", {
                    weekday: "long"
                });
                let icon = `http://openweathermap.org/img/wn/${value.weather[0].icon}.png`;
                let temp = value.temp.day.toFixed(0);
                fday = `<div class="forecast-day">
                        <p class="forecast-day-name">${day}</p>
                        <div class="forecast-img-container"><img src="${icon}" class="forecast-img" alt="the forecast icon for ${day}"></div>
                        <div class="forecast-day-temp">${temp}<sup>\u00B0F</sup></div>
                        </div>`;
                        forecastDiv.insertAdjacentHTML('beforeend', fday);
            };
        })
    })

function exitAlert(){
    if(alertDiv.style.display==="flex"){
        alertDiv.style.display="none"}}