const apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=43.1905&lon=-112.3450&units=imperial&appid=eb89a2a288bf7798308b3106df4a6297";
fetch(apiUrl)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });