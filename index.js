var hmbr = document.getElementById("burger-menu"),
mnu = document.getElementById("mobile-menu"),
exit = document.getElementById("close-menu");
mnu.style.opacity = "0";
mnu.style.visibility = "hidden";
mnu.style.display = "flex";

hmbr.addEventListener("click",function () {
  mnu.style.animationName =  "popin";
  mnu.style.transition = "animation 1180ms";
  mnu.style.visibility = "visible";
  mnu.style.opacity = "1";
  //mnu.style.display = "flex";
});

exit.addEventListener("click",function () {
  mnu.style.animationName = "popin";
  mnu.style.visibility = "hidden";
  mnu.style.opacity = "0";
  //mnu.style.display = "none";
});