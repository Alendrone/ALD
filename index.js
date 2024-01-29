var hmbr = document.getElementById("burger-menu"),
mnu = document.getElementById("mobile-menu"),
exit = document.getElementById("close-menu");

hmbr.addEventListener("click",function () {
  mnu.style.animation = "pop-in 1180ms ease-in 0s 1";
  mnu.style.display = "flex";
});

exit.addEventListener("click",function () {
  mnu.style.animation = "pop-in 1180ms ease-out 0s 1 reverse";
  mnu.style.display = "none";
});