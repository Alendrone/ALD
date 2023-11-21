//import { Resend } from 'resend';
//import { Config, Context } from "@netlify/functions";

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Value` }),
  };  
};

//export const config = {
//method: "GET"
//path: "/contact"
//}