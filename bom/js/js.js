//declare elements
let x;
let date;
let yearSpan;
const books = ["1 Nephi"];
const i = document.getElementById("favchap");
const b = document.querySelector("button");
const ul = document.querySelector("ul");

//Date last modified in the footer
x = new Date(document.lastModified);
date = new Date().getFullYear();
yearSpan = document.querySelector('#year');
document.getElementById("lastEdit").textContent = "Last Updated: " + x;
yearSpan.textContent = date;

//Book of Mormon stuff in the body
b.addEventListener('click', function() {
    if (i.value){
        /*Create an "li" element*/
        let li = document.createElement("li");
        /*Create a delete button element*/
        let d = document.createElement("button");
        /*populate the li elements textContent or innerHTML with the 
        input*/
        li.textContent = i.value;
        /*populate the button textContent with an ❌*/
        d.textContent = "❌";
        /*append the list element with the li element just created and 
        appended with text and the delete button*/
        li.appendChild(d);
        ul.appendChild(li);
        /*add an event listenter to the delete button that removes the li 
        element when clicked*/
        d.addEventListener('click', function(){
            li.remove();
        })
        /*send the focus to the input element*/
        document.getElementById("favchap");
        /*clean up the successful add of a chapter by changing 
        the input to nothing or the empty string and setting the focus to 
        the input*/
    }else{
            i.setAttribute("placeholder", "You didn't enter anything!");
    }
})