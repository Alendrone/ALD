var hmbr = document.getElementById("burger-menu"),
mnu = document.getElementById("mobile-menu"),
exit = document.getElementById("close-menu"),
uri = new URL(window.location.href),
rqid = false;
function submission(e) {
  if (rqid) e.currentTarget.submit();
  e.preventDefault();
}
hmbr.addEventListener("click",function () {
  mnu.style.display = "flex";
});

exit.addEventListener("click",function () {
  mnu.style.display = "none";
});

if (uri.pathname === "/contact") {
var captcha = document.getElementById("captcha");

window.addEventListener("load", function() {
    var hcaptchaIframe = document.querySelector("iframe[src*=\"hcaptcha\"]");
    if(hcaptchaIframe) {
        // Perform styling operations here
        hcaptchaIframe.style.fontSize = "30px"; // Adjust font size as needed
    }
});


captcha.addEventListener("verified", function (e) {
  rqid = e.token;
});
captcha.addEventListener("error", function (e) {
  rqid = null;
  console.log(e.error);
});
}