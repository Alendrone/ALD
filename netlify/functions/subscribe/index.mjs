import axios from "axios";

exports.handler = async function (event, context) {
  try {
    const { email } = event.body,
    enroll = {
      members: [
        {
          email_address: email,
          status: 'subscribed'
        }
        ]
    };
    
    await axios.post(`https://us4.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}`, enroll, {
      headers: {
        Authorization: `Basic ${process.env.MAILCHIMP_KEY}`
      }
    });
    return {
      statusCode:200,
      headers: {
        "Content-Type": "text/plain"
      },
      body:`Succeeded!`
    };
  }
  catch (err) {
    return {
      statusCode:400,
      headers: {
        "Content-Type": "text/plain"
      },
      body:`Failed with a error of ${err}`
    };
  }
};