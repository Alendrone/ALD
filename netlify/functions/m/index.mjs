//import {Resend} from "resend";
//resend = new Resend("re_BrHTVc4y_FL5za8s2n7bSQQDVAYEroPuK"), 
exports.handler = async function (event, context) {
  var body = event.body,
  uid = Math.floor(Date.now() / 1000).toString(),
  submit = [],
  params = body.split("&"),
  i = params.length;
  
  //params[i - 1].split("=");
 for (;i;--i) {
    var cur = i - 1;
    params[cur] = params[cur].split("=");
    submit[cur] = decodeURIComponent(params[cur][1]);
    if (submit[cur].indexOf("+") + 1) submit[cur] = submit[cur].split("+").join(" ");
 }
 try {
   if (!event.body.length) throw null;
   /*await resend.emails.send({
    from: "ALD <info@arborlifedesigns.net>",
    to: ["arborlifedesigns@gmail.com"],
    subject: `Inbound Correspondence from ${submit[0]}`,
    text: `Message:\n"${submit[4]}"\nEmail:\n"${submit[1]}"\nLocation:\n"${submit[2]}"\nPhone:\n"${submit[3]}"`,
    headers: {
      "X-Entity-Ref-ID":uid,
    },
  tags: [
    {
      name: "category",
      value: "email_submission",
    },
  ],
 }); */
   return {
     statusCode: 200,
     headers: {
       "Content-Type": "text/html"
     },
     body: `<!doctype html><html><head><title>Thank you!</title><link href=../../fonts.css rel=stylesheet></head><body><style>:root{font-size:1px}body,html{background:#000;font-size:35rem;font-family:Brisa Sans}}.container{padding:0;min-width:auto;margin:0 -50% 0 -50%;width:100%;max-height:100vh;max-width:100vw;display:block;position:absolute;inset:0 50% 0 50%;box-sizing:content-box;background:#000}@media (min-height:626px) and (min-width:365px){.container{font-size:20rem}}@media (min-height:912px) and (min-width:540px){.container{font-size:40rem}.container{font-size:60rem}}@media (min-width:992px) and (min-height:654px){.container{font-size:100rem}}@media (min-width:1363px) and (min-height:559px){.container{font-size:120rem}}@media (min-width:1932px) and (min-height:1121px){.container{font-size:150rem}}.wrapper{line-height:1.5em;letter-spacing:.075em;right:100%;margin:50% 0 0 0;color:#fff;left:0;width:100%;padding:0;position:absolute;box-sizing:border-box;display:flex;text-align:center;justify-content:center;align-content:center;object-position:center;align-items:center}svg{width:5em}</style><div class=container><div class=wrapper style="margin:0 auto"><svg fill=none viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg><path clip-rule=evenodd d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-6-3c.3.3.3.7 0 1l-5 5c-.3.3-.7.3-1 0l-2-2a.7.7 0 1 1 1-1l1.5 1.4 2.2-2.2L15 9c.3-.3.7-.3 1 0Z"fill=#7FFFD4 fill-rule=evenodd /></svg></div><div class=wrapper><h2 style=color:#7fffd4>Received.</h2></div><br><br><br><div class=wrapper><p><span style=font-style:italic>Hi ${submit},</span> we will get back with you, shortly!</div></div></body></html>`,
   };
 }

  catch (err) {
    return {
      statusCode:400,
      headers: {
        "Content-Type": "text/html"
      },
      body:`<!doctype html><html><head><title>Try again.</title><link href=../../fonts.css rel=stylesheet></head><body><style>:root{font-size:1px}body,html{background:#000;font-size:35rem;font-family:Brisa Sans}.container{padding:0;min-width:auto;margin:0 -50% 0 -50%;width:100%;max-height:100vh;max-width:100vw;display:block;position:absolute;inset:0 50% 0 50%;box-sizing:content-box;background:#000}@media (min-height:626px) and (min-width:365px){.container{font-size:20rem}}@media (min-height:912px) and (min-width:540px){.container{font-size:40rem}.container{font-size:60rem}}@media (min-width:992px) and (min-height:654px){.container{font-size:100rem}}@media (min-width:1363px) and (min-height:559px){.container{font-size:120rem}}@media (min-width:1932px) and (min-height:1121px){.container{font-size:150rem}}.wrapper{line-height:1.5em;letter-spacing:.075em;right:100%;margin:50% 0 0 0;color:#fff;left:0;width:100%;padding:0;position:absolute;box-sizing:border-box;display:flex;text-align:center;justify-content:center;align-content:center;object-position:center;align-items:center}svg{width:5em}</style><div class=container><div class=wrapper style="margin:0 auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FF0000" fill-rule="evenodd" d="M21.7 20.2c.3.4.3 1 0 1.5a1 1 0 0 1-1.5 0L16 17.4l-4.3 4.3a1 1 0 0 1-1.4 0 1 1 0 0 1 0-1.4l4.3-4.3-4.3-4.2a1 1 0 1 1 1.4-1.4l4.3 4.2 4.3-4.3a1 1 0 0 1 1.4 0c.4.4.4 1 0 1.4L17.4 16l4.3 4.2ZM16 0a16 16 0 1 0 0 32 16 16 0 0 0 0-32Z"/></svg></div><div class=wrapper><h2 style=color:#FF0000>Failed.</h2></div><br><br><br><div class=wrapper><p><span style=font-style:italic>Oops.</span>  Something is afoot! ${err}</div></div></body></html>`,
    };
  }
};