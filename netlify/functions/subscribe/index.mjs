import axios from "axios";

exports.handler = async function (event, context) {
  try {
  const { email } = event.body;
  
  const json = {"members": [{"email_address": email,"status": "subscribed"}]};
  
  /*await axios({
    method:"POST",
    url:`https://us4.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `apikey ${process.env.MAILCHIMP_KEY}`
    },
    data:,
    responseType:"json",
    responseEncoding:"utf8"
  });*/
  
    return {
      statusCode:200,
      headers: {
        "Content-Type": "text/plain"
      },
      body:`Succeeded! ${JSON.stringify(json)}`
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