window.addEventListener("DOMContentLoaded", function(){
    document.getElementById("switchList").addEventListener("click", function(){
        document.querySelector(".businesses").classList.remove("grid");
    });
    document.getElementById("switchGrid").addEventListener("click", function(){
        document.querySelector(".businesses").classList.add("grid");
    });
});