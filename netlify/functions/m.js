import { Resend } from 'resend';
import { Config, Context } from "@netlify/edge-functions";

export default async (req, context) => {
   // const {name,email,address,phone,message} = JSON.parse(event.body),
  const data = await req.text();
  await processData(data);
  return new Response(`${data}`);
}

export const config = {
  method: "POST",
  path: "/m"
}