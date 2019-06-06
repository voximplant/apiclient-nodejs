const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get a URL to make the 2000 RUR payment.
  client.TheRobokassaPaymentSystem.getRobokassaPaymentURL({amount: '2000'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};