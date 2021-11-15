function dropdownFunction() {
    let x = document.getElementById('dropdown-links');
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}