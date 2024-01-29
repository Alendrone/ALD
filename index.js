var hmbr = document.getElementById("burger-menu"),
mnu = document.getElementById("mobile-menu"),
exit = document.getElementById("close-menu");

hmbr.addEventListener("click",function () {
  mnu.style.display = "flex";
  mnu.style.animation = "pop-in 1180ms 0 1";
});

exit.addEventListener("click",function () {
  mnu.style.display = "none";
  mnu.style.animation = "pop-in 1180ms 0 1 reverse";
});