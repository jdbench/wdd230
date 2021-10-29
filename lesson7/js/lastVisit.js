//Declare variables
let div = document.getElementById('lastVisit');
let daysSince = 0;
let lastVisit;
let time = new Date();



//Create function to populate local storage
function store() {
    localStorage.setItem('lastVisit', time.getTime());
    localStorage.setItem('currentVisit', time.getTime());
}

/*Create function to calculate the amount of days that have passed since
the last visit*/
function getDays() {
    let past = localStorage.getItem('lastVisit');
    let present = localStorage.getItem('currentVisit');

    //log to console
    console.log(past);
    console.log(present);

    daysSince = Math.round((present - past) / (1000 * 3600 * 24));
    return daysSince;
}

//Create function to setDate
function setDate(){
    localStorage.setItem('currentVisit', time.getTime());
    daysSince = getDays();
}

/*if statement to populate storage and calculate days since last visit
if there is no record of a prior visit*/
if(!localStorage.getItem('lastVisit')) {
    store();
    daysSince = getDays();
} else {//if there is a previous visit, create a currentVisit
    setDate();
}

//display the days since the user has been to the page
div.innerHTML = "You visited this page " + daysSince + " days ago.";

//Set currentVisit as lastVisit
localStorage.setItem('lastVisit', time.getTime());