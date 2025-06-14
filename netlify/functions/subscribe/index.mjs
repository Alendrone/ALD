import axios from "axios";

exports.handler = async function (event, context) {
  try {
  const { email } = event.queryStringParameters,
  queryStringParameters = new URLSearchParams(JSON.parse(event.body || "{\"token\":\"\"}")),
  hcaptcha = axios.create(
  {
    baseURL: "https://api.hcaptcha.com",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
  let statum,
  errout;

  queryStringParameters.append("secret", process.env.HCAPTCHA_SECRET);

  await hcaptcha.post("/siteverify", queryStringParameters).then((resp) => {
    statum = resp.data.success;
  }).catch((err) => {
    errout = err.data;
  });
  if (!statum) throw new Error(errout);
  
  const json = {"members": [{"email_address": email,"status": "subscribed"}]},
  jsonData = JSON.stringify(json);
  
  const {status} = await axios({
    method:"POST",
    url:`https://us4.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `apikey ${process.env.MAILCHIMP_KEY}`
    },
    data:jsonData,
    responseType:"json",
    responseEncoding:"utf8"
  });
  if (status === 200) {
    return {
      statusCode:200,
      headers: {
        "Content-Type": "text/plain"
      },
      body:`Succeeded! ${status}`
    };
  } else throw null;
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