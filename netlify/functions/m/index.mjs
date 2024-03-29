import {Resend} from "resend";
import {textGeneration} from "@huggingface/inference";
import fetch from "node-fetch";
import queryString from "query-string";

exports.handler = async function (event, context) {
  var body = event.body,
  resend = new Resend(process.env.PASSPHRASE),
  uid = Math.floor(Date.now() / 1000).toString(),
  submit = [],
  params = body.split("&"),
  i = params.length,
  len,
  nth,
  cur,
  success,
  response_json,
  rawdata;
  
 for (;i;--i) {
    var cur = i - 1;
    params[cur] = params[cur].split("=");
    submit[cur] = decodeURIComponent(params[cur][1]);
    if (submit[cur].indexOf("+") + 1) submit[cur] = submit[cur].split("+").join(" ");
 }
 var data = {
   secret: process.env.SECRET,
   response: submit[5]
  },
 encoded = queryString.stringify(data),
 response = await fetch("https://api.hcaptcha.com/siteverify",{
  method:"POST",
  headers:{
    "Content-Type":"application/x-www-form-urlencoded"
  },
  body: encoded
 }).then(rsp => rsp.json())
 .then(dat => {
   response_json = dat;
 });
 success = response_json["success"];
 try {
   await textGeneration({
     accessToken: process.env.TOKEN,
     model: "mistralai/Mistral-7B-Instruct-v0.2",
     inputs:`Perform a analysis on the text: "${submit[4]}", using just one number and determine its magnitude factoring in the text's meaning by comparing and contrasting whether it sounds like a suspicious/spam/scam/phishing/social engineering attempt (closer to zero), potentially suspicious/spam/scam/phishing/social engineering (closer to the mid-range), or not suspicious/spam/scam/phishing/social engineering (closer to nine) from one out of ten.\nFirst I require you MUST give me your best guess of the number from 0-9 and then your explanation after; no exceptions.`,
     parameters:{
       "temperature": 0.1,
       "max_new_tokens": 4096
   }}).then(function (resp) {
     rawdata = resp.generated_text.split("\n")[3];
   });


   for (nth = rawdata.length;nth;--nth) {
     cur = rawdata.charCodeAt(nth - 1) - 48;
     if (10 > cur && cur >= 0) break;
   }

   if (cur < 6) throw null;
 }
 catch (err) {
   if (success === true) await resend.emails.send({
    from: "ALD <info@arborlifedesigns.net>",
    to: ["educote1975@gmail.com"],
    subject: `Potentional Correspondence from ${submit[0]}`,
    text: `Message:\n"${submit[4]}"\n\nEmail:\n"${submit[1]}"\n\nLocation:\n"${submit[2]}"\n\nPhone:\n"${submit[3]}"`,
    headers: {
      "X-Entity-Ref-ID":uid,
    },
  tags: [
    {
      name: "category",
      value: "email_submission",
    },
  ],
 });
   return {
      statusCode:400,
      headers: {
        "Content-Type": "text/html"
      },
      body:`<!doctype html><html><head><title>Under review.</title><link href=../../fonts.css rel=stylesheet></head><body><style>:root{font-size:1px}body,html{background:#000;font-size:35rem;font-family:Brisa Sans}.container{padding:0;min-width:auto;margin:0 -50% 0 -50%;width:100%;max-height:100vh;max-width:100vw;display:block;position:absolute;inset:0 50% 0 50%;box-sizing:content-box;background:#000}@media (min-height:626px) and (min-width:365px){.container{font-size:20rem}}@media (min-height:912px) and (min-width:540px){.container{font-size:40rem}.container{font-size:60rem}}@media (min-width:992px) and (min-height:654px){.container{font-size:100rem}}@media (min-width:1363px) and (min-height:559px){.container{font-size:120rem}}@media (min-width:1932px) and (min-height:1121px){.container{font-size:150rem}}.wrapper{line-height:1.5em;letter-spacing:.075em;right:100%;margin:50% 0 0 0;color:#fff;left:0;width:100%;padding:0;position:absolute;box-sizing:border-box;display:flex;text-align:center;justify-content:center;align-content:center;object-position:center;align-items:center}svg{width:5em;height:auto}</style><div class=container><div class=wrapper style="margin:0 auto"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#808080" fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/></svg></div><div class=wrapper><h2 style=color:#808080>Pending.</h2></div><br><br><br><div class=wrapper><p><span style=font-style:italic>Suspicous activity detected.</span><br/>Your email is sent but is pending for review.</div></div></body></html>`,
   };
 }
 try {
   if (!event.body.length) throw null;
   if (success === true) await resend.emails.send({
    from: "ALD <info@arborlifedesigns.net>",
    to: ["arborlifedesigns@gmail.com"],
    subject: `Inbound Correspondence from ${submit[0]}`,
    text: `Message:\n"${submit[4]}"\n\nEmail:\n"${submit[1]}"\n\nLocation:\n"${submit[2]}"\n\nPhone:\n"${submit[3]}"`,
    headers: {
      "X-Entity-Ref-ID":uid,
    },
  tags: [
    {
      name: "category",
      value: "email_submission",
    },
  ],
 });
 else throw null;
   return {
     statusCode: 200,
     headers: {
       "Content-Type": "text/html"
     },
     body: `<!doctype html><html><head><title>Thank you!</title><link href=../../fonts.css rel=stylesheet></head><body><style>:root{font-size:1px}body,html{background:#000;font-size:35rem;font-family:Brisa Sans}}.container{padding:0;min-width:auto;margin:0 -50% 0 -50%;width:100%;max-height:100vh;max-width:100vw;display:block;position:absolute;inset:0 50% 0 50%;box-sizing:content-box;background:#000}@media (min-height:626px) and (min-width:365px){.container{font-size:20rem}}@media (min-height:912px) and (min-width:540px){.container{font-size:40rem}.container{font-size:60rem}}@media (min-width:992px) and (min-height:654px){.container{font-size:100rem}}@media (min-width:1363px) and (min-height:559px){.container{font-size:120rem}}@media (min-width:1932px) and (min-height:1121px){.container{font-size:150rem}}.wrapper{line-height:1.5em;letter-spacing:.075em;right:100%;margin:50% 0 0 0;color:#fff;left:0;width:100%;padding:0;position:absolute;box-sizing:border-box;display:flex;text-align:center;justify-content:center;align-content:center;object-position:center;align-items:center}svg{width:5em}</style><div class=container><div class=wrapper style="margin:0 auto"><svg fill=none viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg><path clip-rule=evenodd d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-6-3c.3.3.3.7 0 1l-5 5c-.3.3-.7.3-1 0l-2-2a.7.7 0 1 1 1-1l1.5 1.4 2.2-2.2L15 9c.3-.3.7-.3 1 0Z"fill=#7FFFD4 fill-rule=evenodd /></svg></div><div class=wrapper><h2 style=color:#7fffd4>Received.</h2></div><br><br><br><div class=wrapper><p><span style=font-style:italic>Hi ${submit[0]},</span> we will get back with you, shortly!</div></div></body></html>`,
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