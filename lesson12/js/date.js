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
const weekDays = {
0: "Sunday",
1: "Monday",
2: "Tuesday",
3: "Wednesday",
4: "Thursday",
5: "Friday",
6: "Saturday"
}
//create month array
const month = {
0: "January",
1: "February",
2: "March",
3: "April",
4: "May",
5: "June",
6: "July",
7: "August",
8: "September",
9: "October",
10: "November",
11: "December"
}
//turn getday and currentMonth number into string
let dow = weekDays[d.getDay()];
let currentMonth = month[d.getMonth()];
let dateString = `${dow}, ${dd} ${currentMonth} ${yyyy}`;
//turn into string
document.getElementById('currentDate').innerHTML = dateString;