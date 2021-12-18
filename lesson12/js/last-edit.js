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

let lastEdit = new Date(document.lastModified);

dd = String(lastEdit.getDate()).padStart(2, '0');
m = String(lastEdit.getMonth() + 1);
yyyy = lastEdit.getFullYear();

dow = weekDay[lastEdit.getDay()];
currentMonth = month[lastEdit.getMonth()];
dateString = `${dow}, ${dd} ${currentMonth} ${yyyy}`;
document.getElementById("last-edit").innerHTML = `Last Updated: ${dateString}`;

