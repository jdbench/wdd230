//Display Banner and close banners
let banner = document.getElementById("banner");
if (dow=="Friday" && 'https://jdbench.github.io/wdd230/lesson10/preston-10.html' == window.location.href){
  banner.style.display = "flex";
}
function exitBanner(){
if (banner.style.display === "flex") {
  banner.style.display = "none";
}
}