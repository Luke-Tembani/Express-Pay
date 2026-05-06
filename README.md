Hello Everyone👋,

I am pleased to introduce you to the Paynow Integration Package. This package is a part of "PAYNOW" and aims to simplify the process of implementing EXPRESS CHECKOUT PAYMENTS using ECOCASH & One Money.


- SETUP

To set up the package, you simply need to run "npm i express-pay" and configure your keys from https://www.paynow.co.zw/home/businesshome in the .env file. Then, import the downloaded method into your file. Make sure to enter all required arguments for the function to work correctly.


- USAGE EXAMPLE

.env VARIABLE NAMES
- PAYNOW_INTEGRATION_KEY=
- PAYNOW_INTEGRATION_ID=
- RESULT_URL=

const pay = require("express-pay");

REQUIRED ARGUMENTS
- Payee Contact (String)
- Transaction Reference (String)
- Amount (Number)
- Customer Email (String)
- ISP (String)

function makePayment(){
    pay("0770000000","Transaction_Reference",1.0,"test@gmail.com","onemoney"); // ISP ("onemoney"/"ecocash");
}
makePayment();

Create a webhook that will be used by paynow to POST Transaction Results
NodeJS API EXAMPLE

router.post("/transaction_results",(req,res)=>{
    console.log(req.body);
})

Result Scenarios:
Paid:
reference=Test1&paynowreference=XXX&amount=0.10&status=Paid&pollurl=httpsXXX&hash=XXX
Cancelled:
reference=Test1&paynowreference=XXX&amount=0.10&status=Cancelled&pollurl=httpsXXX&hash=XXX

- NB
Please note that you should not push the .env file to your repo, as this could potentially allow others to access them. Instead, create environment variables on the hosting platform.

- SUPPORT
If you have any other questions or require support, please feel free to contact us via :
email    :lukemunyandu@gmail.com
phone    :+263 774 975 876
WhatsApp :+263 781 327 381  / +263 779 999 175

Thank you.