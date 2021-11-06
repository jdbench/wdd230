//get current date and split into parts
let d = new Date();
let dd = String(d.getDate()).padStart(2, '0');
let m = String(d.getMonth() + 1);
let yyyy = d.getFullYear();
//find span
let yearSpan = document.querySelector('#year');
//place current year in span
yearSpan.textContent = yyyy;
//create week day array
let weekDay = new Array(7);
weekDay[0] = "Sunday";
weekDay[1] = "Monday";
weekDay[2] = "Tuesday";
weekDay[3] = "Wednesday";
weekDay[4] = "Thursday";
weekDay[5] = "Friday";
weekDay[6] = "Saturday";
//create month array
let month = new Array(7);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
//turn getday and currentMonth number into string
let dow = weekDay[d.getDay()];
let currentMonth = month[d.getMonth()];
//turn into string
document.getElementById('lastEdit').innerHTML = "Last modified: "+dow+", "+dd+" "+currentMonth+" "+yyyy;



