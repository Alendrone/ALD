var hmbr = document.getElementById("burger-menu"),
mnu = document.getElementById("mobile-menu"),
exit = document.getElementById("close-menu");

hmbr.addEventListener("click",function () {
  mnu.style.display = "flex";
});

exit.addEventListener("click",function () {
  mnu.style.opacity = "0";
});