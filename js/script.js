let lastEdit = new Date(document.lastModified);
let currentDate = new Date();
let dd = String(currentDate.getDate()).padStart(2, '0');
let m = String(currentDate.getMonth() + 1);
let year = currentDate.getFullYear();
let yearSpan = document.querySelector('#year');

//create week day array
let weekDay = {
0:"Sunday",
1:"Monday",
2:"Tuesday",
3:"Wednesday",
4:"Thursday",
5:"Friday",
6:"Saturday"
}

//create month array
let month = {
0:"January",
1:"February",
2:"March",
3:"April",
4:"May",
5:"June",
6:"July",
7:"Augus",
8:"Septembr",
9:"October",
10:"November",
11:"December"
}
//turn getday and currentMonth number into string
let dow = weekDay[currentDate.getDay()];
let currentMonth = month[currentDate.getMonth()];
let dateString = `${dow}, ${dd} ${currentMonth} ${year}`;

document.getElementById("lastEdit").innerHTML = `Last Updated: ${dateString}`;
yearSpan.textContent = year;



