var hmbr = document.getElementById("burger-menu"),
mnu = document.getElementById("mobile-menu"),
exit = document.getElementById("close-menu");

hmbr.addEventListener("click",function () {
  mnu.style.animation = "popin 1180ms ease-in";
  mnu.style.display = "flex";
});

exit.addEventListener("click",function () {
  mnu.style.animation = "popin 1180ms ease-out reverse";
  mnu.style.display = "none";
});