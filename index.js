var hmbr = document.getElementById("burger-menu"),
mnu = document.getElementById("mobile-menu"),
exit = document.getElementById("close-menu"),
uri = new URL(window.location.href),
rqid = false;
function submission(e) {
  e.preventDefault();
  if (rqid) e.currentTarget.submit();
}
hmbr.addEventListener("click",function () {
  mnu.style.display = "flex";
});

exit.addEventListener("click",function () {
  mnu.style.display = "none";
});

if (uri.pathname === "/contact" || uri.pathname === "/payment") {
var captcha = document.getElementById("captcha");

captcha.addEventListener("verified", function (e) {
  rqid = e.token;
  if (uri.pathname === "/payment") document.getElementById("contact-button").disabled = false;
});
captcha.addEventListener("error", function (e) {
  rqid = false;
  console.log(e.error);
});
}