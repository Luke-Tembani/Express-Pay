Hello Everyone👋,

I am pleased to introduce you to the Paynow Integration Package. This package is a part of "PAYNOW" and aims to simplify the process of implementing EXPRESS CHECKOUT PAYMENTS using ECOCASH.


- SETUP

To set up the package, you simply need to run "npm i paynow_integration" and configure your keys from https://www.paynow.co.zw/home/businesshome in the .env file. Then, import the downloaded method into your file. Make sure to enter all required arguments for the function to work correctly and implement it as an asynchronous function.


- USAGE EXAMPLE

const pay = require("paynow_integration");

REQUIRED ARGUMENTS
- Payee Contact (String)
- Transaction Reference (String)
- Amount (Number)
- Customer Email (String)
- Product Name (String)

async function makePayment(){
    let result = pay("0770000000","Transaction_Reference",1.0,"test@gmail.com","Test Product");
    console.log(result);
}

makePayment();

Result Scenarios:

- Paid = Transaction paid successfully
- Cancelled = Transaction cancelled / Incorrect PIN
- Timed Out = Transaction took long to be paid (NB - Timeout is 20seconds)


- NB
Please note that you should not push the .env file to your repositories with keys, as this could potentially allow others to access them. Instead, create environment variables on the hosting platform.

- SUPPORT

If you have any other questions or require support, please feel free to contact us via :
email    :lukemunyandu@gmail.com
phone    :+263 774 975 876
WhatsApp :+263 781 327 381

Thank you.