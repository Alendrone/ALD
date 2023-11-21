//import { Resend } from 'resend';
import { Config, Context } from "@netlify/functions";

export default async (req) => {
  return new Response("Hello, world!");
}

//export const config = {
//method: "GET"
//path: "/contact"
//}