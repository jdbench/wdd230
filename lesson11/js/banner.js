//Display Banner and close banners
let banner = document.getElementById("banner");
if (dow=="Friday" && 'https://jdbench.github.io/wdd230/lesson11/preston.html' == window.location.href){
  banner.style.display = "flex";
}else if (dow=="Friday" && 'https://jdbench.github.io/wdd230/lesson11/sodasprings.html' == window.location.href){
  banner.style.display = "flex";
}else if (dow=="Friday" && 'https://jdbench.github.io/wdd230/lesson11/preston.html' == window.location.href){
  banner.style.display = "flex";
}
function exitBanner(){
if (banner.style.display === "flex") {
  banner.style.display = "none";
}
}