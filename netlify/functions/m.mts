import { Resend } from 'resend';
import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
   // const {name,email,address,phone,message} = JSON.parse(event.body),
  const data = await req.text();
  await processData(data);
  return new Response(`${data}`);
}

export const config: Config = {
  method: "POST",
  path: "/m"
}