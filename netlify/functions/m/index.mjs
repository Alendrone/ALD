//import {Resend} from "resend";

exports.handler = async function (event, context) {
  var body = JSON.stringify(event.body),
  uid = Math.floor(Date.now() / 1000).toString(),
  submit = {},
  params = body.split("&"),
  i = params.length;
  
  for (;i;--i) {
    var [key, value] = params[i - 1].split("="),
    decodedKey = decodeURIComponent(key),
    decodedValue = decodeURIComponent(value);
    
    if (submit.hasOwnProperty(decodedKey)) {
      if (!Array.isArray(submit[decodedKey])) {
        submit[decodedKey] = [submit[decodedKey]];
    }
      
    submit[decodedKey].push(decodedValue);
    } else submit[decodedKey] = decodedValue;
 }
  
 try {
   return {
     statusCode: 200,
     headers: {
       "Content-Type": "text/html"
     },
     body: `<!doctype html><html><head><title>Thank you!</title><link href=/../../fonts.css rel=stylesheet></head><body><style>:root{font-size:1px}body,html{font-size:35rem}.container{padding:0;min-width:auto;margin:0 -50% 0 -50%;width:100%;max-height:100vh;max-width:100vw;display:block;position:absolute;inset:0 50% 0 50%;box-sizing:content-box;background:#000}@media (min-height:626px) and (min-width:365px){.container{font-size:20rem}}@media (min-height:912px) and (min-width:540px){.container{font-size:40rem}.container{font-size:60rem}}@media (min-width:992px) and (min-height:654px){.container{font-size:100rem}}@media (min-width:1363px) and (min-height:559px){.container{font-size:120rem}}@media (min-width:1932px) and (min-height:1121px){.container{font-size:150rem}}.wrapper{line-height:1.5em;letter-spacing:.075em;right:100%;margin:50% 0 0 0;color:#fff;left:0;width:100%;padding:0;position:absolute;box-sizing:border-box;display:flex;text-align:center;justify-content:center;align-content:center;object-position:center;align-items:center}svg{width:5em}</style><div class=container><div class=wrapper style="margin:0 auto"><svg fill=none viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg><path clip-rule=evenodd d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-6-3c.3.3.3.7 0 1l-5 5c-.3.3-.7.3-1 0l-2-2a.7.7 0 1 1 1-1l1.5 1.4 2.2-2.2L15 9c.3-.3.7-.3 1 0Z"fill=#7FFFD4 fill-rule=evenodd /></svg></div><div class=wrapper><h2 style=color:#7fffd4>Recieved.</h2></div><br><br><br><div class=wrapper><p><span style=font-style:italic>Hi ${name},</span> we will get back with you, shortly!</div></div></body></html>`,
   };
 }
  catch (err) {
    return {
      statusCode:400,
      headers: {
        "Content-Type": "text/html"
      },
      body:`<h2>Oops. Something is a afoot!</h2>`,
    };
  }
};