var hmbr = document.getElementById("burger-menu"),
mnu = document.getElementById("mobile-menu"),
exit = document.getElementById("close-menu");

hmbr.addEventListener("click",function () {
  mnu.style.transition = "opacity 1180ms";
  mnu.style.opacity = "1";
  mnu.style.display = "flex";
});

exit.addEventListener("click",function () {
  mnu.style.transition = "opacity 1180ms";
  mnu.style.opacity = "0";
  mnu.style.display = "none";
});