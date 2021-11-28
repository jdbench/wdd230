function dropdownFunction() {
    let x = document.querySelector('.main-nav');
    if (x.style.display === "flex") {
        x.style.display = "none"
    } else {
        x.style.display = "flex"
    }
}
