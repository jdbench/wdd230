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
document.getElementById('currentDate').innerHTML = dow+", "+dd+" "+currentMonth+" "+yyyy;
//Add a drop down funcionatlity
function dropdownFunction() {
    let x = document.getElementById('dropdown-links');
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}

	//Add wayfinding
  $(function(){
    $('a').each(function(){
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('active'); $(this).parents('li').addClass('active');
    }
  });
});

//Display Banner and close banners
let banner = document.getElementById("banner");
if (dow=="Saturday"){
  banner.style.display = "flex";
}
function exitBanner(){
if (banner.style.display === "flex") {
  banner.style.display = "none";
}
}

//toggle days of the week
let mon = document.getElementById("monday");
let tue = document.getElementById("tuesday");
let wed = document.getElementById("wednesday");
let thur = document.getElementById("thursday");
let fri = document.getElementById("friday");
let sat = document.getElementById("saturday");
let sun = document.getElementById("sunday");
if (dow == "Monday"){
  sat.style.display = "none";
  sun.style.display = "none";
} else if (dow == "Tuesday"){
  sun.style.display="none";
  mon.style.display="none";
} else if (dow == "Wednesday"){
  mon.style.display="none";
  tue.style.display="none";
} else if (dow == "Thursday"){
  tue.style.display="none";
  wed.style.display="none";
} else if (dow == "Friday"){
  wed.style.display="none";
  thur.style.display="none";
} else if (dow == "Saturday"){
  thur.style.display="none";
  fri.style.display="none";
} else{
  fri.style.display="none";
  sat.style.displays="none";
}
