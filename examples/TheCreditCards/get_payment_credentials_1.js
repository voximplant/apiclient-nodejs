const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Gets the saved credit cards.
  client.TheCreditCards.get_payment_credentials({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};