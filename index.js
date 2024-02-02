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
captcha.render({"site-key":"a3524c06-9e6e-4856-a31b-98e565f80c78"});
captcha.addEventListener("verified", function (e) {
  console.log("verified event", {token: e.token});
});
captcha.addEventListener("error", function (e) {
  console.log("error event", {error: e.error});
});
}