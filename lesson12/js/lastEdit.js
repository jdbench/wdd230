let x = new Date(document.lastModified);
let date = new Date().getFullYear();
document.getElementById("lastEdit").innerHTML = "Last Updated: " + x;
yearSpan.textContent = date;