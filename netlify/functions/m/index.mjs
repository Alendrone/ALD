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
     body: `<h2>Success!</h2>`,
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