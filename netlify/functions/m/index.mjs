//import { Resend } from 'resend';
//import { Config, Context } from "@netlify/functions";

exports.handler = async function (event, context) {
  var body = JSON.stringify(event.body),
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
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `${e}` }),
  };  
};

//export const config = {
//method: "GET"
//path: "/contact"
//}