const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Gets the saved credit cards.
  client.CreditCards.get_payment_credentials({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};