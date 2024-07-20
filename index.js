import axios from "axios";
var hmbr = document.getElementById("burger-menu"),
mnu = document.getElementById("mobile-menu"),
exit = document.getElementById("close-menu"),
uri = new URL(window.location.href),
rqid = false;

async function submission(e) {
  e.preventDefault();
  if (uri.pathname === "/contact") {
    var subscribed = document.getElementById("mailchimp").checked,
    mail = document.getElementById("email-address").value,
    query = new URLSearchParams({
      email: mail
    });
    if (subscribed) await axios({
        method:"POST",
        url:`https://arborlifedesigns.com/subscribe`,
        params:query,
        data:{},
    });
  }
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
  document.getElementById("contact-button").disabled = false;
});
captcha.addEventListener("error", function (e) {
  rqid = false;
  console.log(e.error);
});
}