//import { Resend } from 'resend';
import { Config, Context } from "@netlify/functions";

export default async (req, context) => {
   //const {name,email,address,phone,message} = JSON.parse(event.body),
  const data = await req;
 // await processData(data);
  return new Response(`Sucess!`);
}

export const config = {
method: "POST"
//path: "/contact"
}