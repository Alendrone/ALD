var hmbr = document.getElementById("burger-menu"),
mnu = document.getElementById("mobile-menu"),
exit = document.getElementById("close-menu"),
uri = new URL(window.location.href),
rqid = false;

function subscribe() {
  var mail = document.getElementById("emailaddress").value,
  options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({token:rqid}),
  };
  fetch("/subscribe?email=" + mail, options)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Handle the response data
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function submission(e) {
  e.preventDefault();
  if (uri.pathname === "/contact") {
    var checkbox = document.getElementById("mailchimp");
    if (checkbox.checked && rqid) subscribe();
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