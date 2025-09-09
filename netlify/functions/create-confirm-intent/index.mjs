import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY,{apiVersion:"2024-06-20"});

export async function handler (event, context) {
  // Unsupported method
  if (event.httpMethod !== "POST") return {statusCode:405,body:JSON.stringify({error:"Method Not Allowed"})};

  try {
    const {confirmationTokenId, amount, customer_email} = JSON.parse(event.body);

    const intent = await stripe.paymentIntents.create({
      receipt_email: customer_email,
      confirm: true,
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      confirmation_token: confirmationTokenId
    });

    return {statusCode: 200,body: JSON.stringify({client_secret: intent.client_secret,status: intent.status})};
  } catch (err) {
    return {statusCode: 400,body: JSON.stringify({ error: err.message })};
  }
};
