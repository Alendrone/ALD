import { Resend } from 'resend';

exports.handler = async (event, context) => {
 try {
   // const {name,email,address,phone,message} = JSON.parse(event.body),
  const body = JSON.parse(event.body),
  resend = new Resend('re_BrHTVc4y_FL5za8s2n7bSQQDVAYEroPuK'),
  uid = Math.floor(Date.now() / 1000).toString();
  return {
    statusCode: 400,
    body: JSON.stringify( { success: `Mail delivered from ${body}` } ),
    };
  }
 } catch (err) {
  return {statusCode:400,body:JSON.stringify({error:`Malformed Request: ${err}\n${body}`})};
 }
 try {
  await resend.emails.send({
  from: 'ALD <info@arborlifedesigns.net>',
  to: ['delivered@resend.dev','evanducote@gmail.com','ducote.help@gmail.com'],
  subject: `Inbound Correspondence from ${name}`,
  text: `Message:\n"${message}"\nEmail:\n"${email}"\nLocation:\n"${address}"\nPhone:\n"${phone}"`,
  headers: {
    'X-Entity-Ref-ID':uid,
  },
  tags: [
    {
      name: 'category',
      value: 'email_submission',
    },
  ],
 });
  return {
    statusCode: 400,
    body: JSON.stringify( { success: `Mail delivered from ${name}` } ),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify( { error: `Mail had trouble sending:  ${err}`} ),
    };
  }
}