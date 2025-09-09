import { Resend } from "resend";
import { InferenceClient } from "@huggingface/inference";
import querystring from "node:querystring";

export async function handler(event, context) {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing request body" }),
      };
    }

    // Parse form submission (x-www-form-urlencoded expected)
    const params = event.body.split("&").map(p => decodeURIComponent(p.split("=")[1] || ""));
    const [name, email, location, phone, message, captcha] = params;

    const resend = new Resend(process.env.PASSPHRASE); // make sure this is correct!
    const uid = Math.floor(Date.now() / 1000).toString();

    // ✅ Verify hCaptcha
    const captchaData = {
      secret: process.env.SECRET,
      response: captcha,
    };

    const captchaResp = await fetch("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: querystring.stringify(captchaData),
    });

    const captchaJson = await captchaResp.json();
    const captchaSuccess = captchaJson.success === true;

    if (!captchaSuccess) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Captcha failed",
          details: captchaJson,
        }),
      };
    }

    // ✅ Hugging Face analysis
    let suspiciousScore = null;
    let explanation = "";
    try {
      const client = new InferenceClient(process.env.TOKEN);
      const chatCompletion = await client.chatCompletion({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: [
          {
            role: "user",
            content: `Perform analysis on the text: "${message}". Return ONLY one number (0–9) followed by explanation.`,
          },
        ],
        max_tokens: 512,
        temperature: 0.1,
      });

      const content = chatCompletion.choices[0]?.message?.content || "";
      suspiciousScore = parseInt(content.match(/[0-9]/)?.[0] ?? "-1", 10);
      explanation = content;
    } catch (err) {
      console.error("Hugging Face error:", err);
    }

    // ✅ Send email
    let emailResult = null;
    try {
      emailResult = await resend.emails.send({
        from: "ALD <onboarding@resend.dev>",
        to: ["arborlifedesigns@gmail.com", "ducote.help@gmail.com"],
        subject: `Inbound Correspondence from ${name}`,
        text: `Message:\n"${message}"\n\nEmail:\n"${email}"\n\nLocation:\n"${location}"\n\nPhone:\n"${phone}"\n\nSuspicious Score: ${suspiciousScore}\n\nExplanation:\n${explanation}`,
        headers: { "X-Entity-Ref-ID": uid },
        tags: [{ name: "category", value: "email_submission" }],
      });
    } catch (err) {
      console.error("Resend error:", err);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Email failed", details: err.message }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Form processed successfully",
        suspiciousScore,
        explanation,
        emailResult,
      }),
    };
  } catch (err) {
    console.error("Handler error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unexpected failure", details: err.message }),
    };
  }
}
