var hmbr = document.getElementById("burger-menu"),
mnu = document.getElementById("mobile-menu"),
exit = document.getElementById("close-menu"),
uri = new URL(window.location.href);

hmbr.addEventListener("click",function () {
  mnu.style.display = "flex";
});

exit.addEventListener("click",function () {
  mnu.style.display = "none";
});

if (uri.pathname === "/contact") {
var captcha = document.getElementById("captcha");
hcaptcha.render();
captcha.addEventListener("verified", function (e) {
  console.log("verified event", {token: e.token});
});
captcha.addEventListener("error", function (e) {
  console.log("error event", {error: e.error});
});
}