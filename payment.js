import axios from "axios";

function calculateGrossAmount(netAmount) {
  // Define Stripe fee structure
  if (!netAmount) netAmount = .5;
  const percent = 2.9,
  fixed = .30,
  grossAmount = (netAmount + fixed) / (1 - percent / 100);
  return Math.round(grossAmount * 100) / 100; // Round to 2 decimal places
}

document.querySelectorAll("input[data-type='currency']").forEach(input => {
    input.addEventListener('keyup', function() {
        formatCurrency(this);
    });
    input.addEventListener('blur', function() {
        formatCurrency(this, "blur");
    });
});

function formatNumber(n) {
    // format number 1000000 to 1,234,567
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatCurrency(input, blur) {
    // appends $ to value, validates decimal side
    // and puts cursor back in right position.
    
    // don't validate empty input
    if (input.value === "") return;
    
    // get input value
    var input_val = input.value;
    
    // Remove "US$ " prefix for calculations if it exists
    if (input_val.startsWith("US$ ")) {
        input_val = input_val.substring(4);
    }
    
    // Remove any commas for proper parsing
    var parsed_val = input_val.replace(/,/g, "");
    var newVal = parseFloat(parsed_val);
    var grossNew = calculateGrossAmount(newVal);
    
    if (blur === "blur") {
        if (!oldGross || oldGross !== newVal) {
            input_val = grossNew.toString();
            oldGross = grossNew;
        }
        else return;
    } else {
        // If not on blur, keep the current input value for formatting
        input_val = parsed_val;
    }
    
    // original length
    var original_len = input.value.length;
    // initial caret position 
    var caret_pos = input.selectionStart;

    // check for decimal
    if (input_val.indexOf(".") >= 0) {
        // get position of first decimal
        // this prevents multiple decimals from
        // being entered
        var decimal_pos = input_val.indexOf(".");
        // split number by decimal point
        var left_side = input_val.substring(0, decimal_pos);
        var right_side = input_val.substring(decimal_pos + 1);

        // add commas to left side of number
        left_side = formatNumber(left_side);

        // validate right side
        right_side = right_side.replace(/\D/g, "");

        // On blur make sure 2 numbers after decimal
        if (blur === "blur") {
            right_side += "00";
            right_side = right_side.substring(0, 2);
        }

        // Limit decimal to only 2 digits
        right_side = right_side.substring(0, 2);

        // join number by .
        input_val = "US$ " + left_side + "." + right_side;

    } else {
        // no decimal entered
        // add commas to number
        // remove all non-digits
        input_val = formatNumber(input_val);
        input_val = "US$ " + input_val;
        
        // final formatting
        if (blur === "blur" && input_val === "US$ ") input_val += "0.50";
        else if (blur === "blur") input_val += ".00";
    }

    // send updated string to input
    input.value = input_val;
    
    // put caret back in the right position
    var updated_len = input_val.length;
    caret_pos = updated_len - original_len + caret_pos;
    input.setSelectionRange(caret_pos, caret_pos);
}


const userAgents = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.2592.68","Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:127.0) Gecko/20100101 Firefox/127.0"],
Dfaults = ["text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8","text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"],
NDX = (Math.random() * 3) | 0,
statumMsg = document.getElementById("payment-message");

var portnumbr = "",
paymentMethodType,
srcURL,
oldGross;

if (window.location.port.length > 1) portnumbr = `:${window.location.port}`;

srcURL = `${window.location.protocol}//${window.location.hostname}${portnumbr}`;

async function handleServerResponse (response,stripe) {
  if (response.error) {
    // Show error from server on payment form
    statumMsg.textContent = `Something is amiss: ${response.error}!`;
  } else if (response.status === "requires_action") {
    // Use Stripe.js to handle the required next action
    const {
      error,
      paymentIntent
    } = await stripe.handleNextAction({
      clientSecret: response.client_secret
    });

    if (error) {
      // Show error from Stripe.js in payment form
      statumMsg.textContent = `Something is amiss: ${error}!`;
    } else {
      statumMsg.textContent = `Payment successful!`;
      // Actions handled, show success message
    }
  } else {
    // No actions needed, show success message
    statumMsg.textContent = `Payment successful!`;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  console.log("URL:",`${window.location.protocol}//${window.location.hostname}${portnumbr}`);

  var paymentMethodType;
  const options = {
    business: {
      name: "ALD"
    },
    paymentMethodOrder: ["card","us_bank_account","cashapp","amazon_pay","link"],
    defaultValues: {
      billingDetails:{
        name: "Unspecified",
        email: "",
        phone: "+1 ",
        address: {
          line1: "",
          line2: "",
          city:"",
          state:"",
          country:"US",
          postal_code:""
        }
      }
    },
    layout:"tabs",
    fields: {
      billingDetails: {
        name:"auto",
        email:"never",
        phone:"never",
        address: {
          line1:"never",
          line2:"never",
          city:"never",
          state:"never",
          country:"never",
          postalCode:"auto"
        }
      }
    },
    terms: {
      card:"always",
      usBankAccount: "always",
      paypal: "always",
      cashapp: "always",
      googlePay: "always",
      applePay:"always"
    }
  },
  appearance = {
    theme:"night",
    labels:"above",
    variables: {
      fontFamily:"Sohne, system-ui, sans-serif",
      fontWeightNormal:"500",
      borderRadius:"8px",
      colorBackground:"#0A2540",
      colorPrimary:"#EFC078",
      accessibleColorOnColorPrimary:"#1A1B25",
      colorText:"white",
      colorTextSecondary:"white",
      colorTextPlaceholder:"#ABB2BF",
      tabIconColor:"white",
      logoColor:"dark",
    },
    rules: {
      ".Input": {
        backgroundColor:"#212D63",
        border:"1px solid var(--colorPrimary)"
      }
    }
  },
  stripe = Stripe("pk_live_51PVFAM07xQtIlHl5nneheqyHshNmnrBOzRIgxXQs6GYp7cmtOWsgQnRlQYwUFez0teYb8OYUlIKi91XLMvEm4gts00iISFGmfg",{apiVersion:"2024-06-20"}),
  elements = stripe.elements({ appearance, loader:"always", externalPaymentMethodTypes:["external_interac","external_line_pay","external_paysafecard","external_samsung_pay","external_sezzle"],paymentMethodCreation: "manual", mode: "payment", amount:50, currency: "usd"}),
  paymentElement = elements.create("payment",options),
  form = document.getElementById("payment-form"),
  submitBtn = document.getElementById("contact-button");
  submitBtn.disabled = true;

  paymentElement.mount("#payment-element");
  paymentElement.on("ready", (e) => {
    paymentElement.on("change", (e) => {
      if (e.complete) {
        if (!e.value || !e.value.type) return;
        paymentMethodType = e.value.type;
        submitBtn.disabled = false;
        console.log("Selected payment method type:", paymentMethodType);
      } else submitBtn.disabled = true;
    });
  });
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    var money = document.getElementById("currency-field").value,
    email = document.getElementById("email-address").value,
    usrname = encodeURIComponent(email.split("@")[0]);
    
    // Extract amount properly by removing "US$ " prefix and commas
    const formattedAmount = money.startsWith("US$ ") ? money.substring(4) : money;
    const cleanAmount = formattedAmount.replace(/,/g, "");
    
    if (submitBtn.disabled) return;
    submitBtn.disabled = true;

    const {error: submitError} = await elements.submit();
    if (submitError) {
      console.error(submitError.message);
      submitBtn.disabled = false;
      return;
    }

    const {error, confirmationToken} = await stripe.createConfirmationToken({
      elements,
      params: {
        return_url: `${srcURL}/response?username=${usrname}`,
        payment_method_data: {
          billing_details: {
            email:"info@arborlifedesigns.com",
            phone:"+1 (201)-345-6789",
            address: {
              line1:"N/a",
              line2:"N/a",
              city:"N/a",
              state:"N/a",
              country:"US"
            }
          }
        }
      },
    });

    if (error) {
      console.error(error.message);
      submitBtn.disabled = false;
      return;
    }

    // Calculate amount in cents (stripe requires amount in smallest currency unit)
    let totaldue = Math.round((parseFloat(cleanAmount) * 100));
    if (!totaldue || isNaN(totaldue)) totaldue = 50;
    
    const res = await axios({
      method:"POST",
      url:"/create-confirm-intent",
      baseURL:srcURL,
      headers: {
        "Content-Type": "application/json",
        "Accept": Dfaults[NDX],
        "Accept-Language": "en-US,en;q=0.9",
      },
      data:{confirmationTokenId: confirmationToken.id, amount: totaldue, customer_email: email},
      responseType:"json",
      responseEncoding:"utf8"
    });

    handleServerResponse(res.data,stripe);
  },{once:true});
});