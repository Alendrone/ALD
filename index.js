var hmbr = document.getElementById("burger-menu"),
mnu = document.getElementById("mobile-menu"),
exit = document.getElementById("close-menu");

hmbr.addEventListener("click",function () {
  mnu.style.animationName =  "popin";
  setTimeout(function() {mnu.style.display = "flex";},1180);
});

exit.addEventListener("click",function () {
  mnu.style.animationName = "popin";
  setTimeout(function() {mnu.style.display = "none";},1180);
});