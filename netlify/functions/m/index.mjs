//import { Resend } from 'resend';
//import { Config, Context } from "@netlify/functions";

exports.handler = async function (event, context) {
  var e = JSON.stringify(event);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `${e}` }),
  };  
};

//export const config = {
//method: "GET"
//path: "/contact"
//}