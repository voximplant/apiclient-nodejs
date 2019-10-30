const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get a URL to make the 2000 RUR payment.
  client.RobokassaPaymentSystem.getRobokassaPaymentURL({amount: '2000'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};