const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Try to pay and attach the credit card.
  client.CreditCards.create_payment_credentials({cardHolder: 'MRJOE',
            acct: '1234123412341234',
            cvv: '123',
            expirationYear: '2016',
            expirationMonth: '12',
            save: 'true',
            autoCharge: 'true',
            minBalance: '5',
            cardOverrunValue: '10',
            amount: '50',
            clientIp: '1.2.3.4'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};