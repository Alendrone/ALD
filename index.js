var hmbr = document.getElementById("burger-menu"),
mnu = document.getElementById("mobile-menu"),
exit = document.getElementById("close-menu");

hmbr.addEventListener("click",function () {
  setTimeout(function() {mnu.style.animation = "popin 1180ms ease-in";},1180);
  mnu.style.display = "flex";
});

exit.addEventListener("click",function () {
  setTimeout(function() {mnu.style.animation = "popin 1180ms ease-out reverse";},1180);
  mnu.style.display = "none";
});