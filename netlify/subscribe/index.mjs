import axios from "axios";

exports.handler = async function (event, context) {
  const { email } = event.body,
  {status} = await axios({
    method:"POST",
    url:`https://us4.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.MAILCHIMP_KEY}`
    },
    data:{"members": [{"email_address": email,"status": "subscribed"}]},
    responseType:"json",
    responseEncoding:"utf8"
  });
  
  
  if (status) {
    return {
      statusCode:200,
      headers: {
        "Content-Type": "text/plain"
      },
      body:`Succeeded!`
    };
  }
  /*catch (err) {
    return {
      statusCode:400,
      headers: {
        "Content-Type": "text/plain"
      },
      body:`Failed with a error of ${err}`
    };
  }*/
};