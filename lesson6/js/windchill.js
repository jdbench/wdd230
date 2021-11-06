let wind = document.getElementById("wind").innerHTML.replace(/[^0-9]/g,'');
let temp = document.getElementById("temp").innerHTML.replace(/[^0-9]/g,'');
let windSpeed = parseInt(wind);
let avgTemp = parseInt(temp);
let windChill = parseInt(35.74 + 0.6215 * avgTemp - 35.75 * windSpeed**0.16 + 0.4275 * avgTemp * windSpeed**0.16);
document.getElementById("wind-chill").innerHTML="Wind Chill: " + windChill+"&#8457;";