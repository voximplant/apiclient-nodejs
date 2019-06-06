const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Make a manual credit card payment.
  client.TheCreditCards.make_card_payment({amount: '50',
            clientIp: '1.2.3.4'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};