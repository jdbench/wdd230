let x = new Date(document.lastModified);
let date = new Date().getFullYear();
let yearSpan = document.querySelector('#year');
document.getElementById("lastEdit").innerHTML = "Last Updated: " + x;
yearSpan.textContent = date;