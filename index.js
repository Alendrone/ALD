var hmbr = document.getElementById("burger-menu"),
mnu = document.getElementById("mobile-menu"),
exit = document.getElementById("close-menu");

hmbr.addEventListener("click",function () {
  mnu.style.display = "flex";
  mnu.focus();
});

exit.addEventListener("click",function () {
  mnu.focus();
  mnu.style.opacity = "0";
});