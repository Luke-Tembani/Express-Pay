const {Paynow} = require("paynow");
require("dotenv").config();

const ID = process.env.PAYNOW_INTEGRATION_ID;
const KEY = process.env.PAYNOW_INTEGRATION_KEY;
let paynow = new Paynow(`${ID}`, `${KEY}`);


module.exports = function pay(Payee_Contact, Transaction_Reference,Transaction_Amount,Customer_Email,ISP) {

  const payment = paynow.createPayment(Transaction_Reference, `${Customer_Email}`);

  paynow.resultUrl = process.env.RESULT_URL;
  
  payment.add(Transaction_Reference, `${Transaction_Amount}`);

  return paynow.sendMobile(payment, `${Payee_Contact}`, ISP)
    .then(function (response) {
      console.log(`${ISP} Response`,response);
    });
}