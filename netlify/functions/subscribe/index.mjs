import axios from "axios"

exports.handler = async function (event, context) {
  const { email } = event.body,
  enroll = {
    members: [
      {
        email_address: email,
        status: 'subscribed'
      }
    ]
  };

  const { status } = await axios.post(`https://us4.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}`, enroll, {
    headers: {
      Authorization: `apikey ${process.env.MAILCHIMP_KEY}`
    }
  });
};