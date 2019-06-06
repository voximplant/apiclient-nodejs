const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Charge the all frozen phone numbers.
  client.Accounts.chargeAccount({phoneNumber: 'all'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};