const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Deletes the default credit card.
  client.TheCreditCards.del_payment_credentials({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};