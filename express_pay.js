const {Paynow} = require("paynow");
require("dotenv").config();
const axios = require("axios");


const ID = process.env.PAYNOW_INTEGRATION_ID;
const KEY = process.env.PAYNOW_INTEGRATION_KEY;
let paynow = new Paynow(`${ID}`, `${KEY}`);

module.exports = function Pay(Payee_Contact, Transaction_Reference,Transaction_Amount,Customer_Email,Product_Name) {

  const payment = paynow.createPayment(`${Transaction_Reference}`, `${Customer_Email}`);
  payment.add(`${Product_Name}`, `${Transaction_Amount}`);
  const maxTimeout = 30000; 

  return paynow.sendMobile(payment, `${Payee_Contact}`, "ecocash")
    .then(async function (response) {
      let initStatus = "Sent";
      const startTime = Date.now();

      return new Promise((resolve, reject) => {
        
        const intervalId = setInterval(async () => {
          try {
 
        const result = await getTransactionStatus(response);

              if (result !== initStatus) {
              clearInterval(intervalId);

              if (result === "Paid") {
                resolve("Paid");
              } else if (result === "Cancelled") {
                resolve("Cancelled");
              }else if(result==="Sent"){
                resolve("Not Authorised");
              } else {
                resolve("Transaction failed")
              }
            } else if (Date.now() - startTime >= maxTimeout) {
              clearInterval(intervalId);
              resolve("Transaction timed out");
            }
          } catch (error) {
            clearInterval(intervalId);
            reject(error);
          }
        }, 2000);
      });
    });
}

async function getTransactionStatus(response){  
  

  try {

   
    

    const response_1 = await axios.get(`${response.pollUrl}`);
   
    const resbody = response_1.data;


    const start = resbody.indexOf('status=') + 'status='.length;


    const end = resbody.indexOf('&', start);
    

    const status = resbody.substring(start, end);

    

    return status;
  } catch (error) {
    return console.log('error', error);
  }
}