//import { Resend } from 'resend';
import { Config, Context } from "@netlify/functions";

export default async (req, context) => {
  return new Response("Hello, world!");
};

//export const config = {
//method: "GET"
//path: "/contact"
//}