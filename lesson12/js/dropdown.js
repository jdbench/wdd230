const dropdown = document.querySelector('.main-nav');
document.querySelector('.burger').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (dropdown.style.display === "flex") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "flex";
        }
    }

    }
);
function dropdownFunction() {
    if (dropdown.style.display === "flex") {
        dropdown.style.display = "none"
    } else {
        dropdown.style.display = "flex"
    }
}
