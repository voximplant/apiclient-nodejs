const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Charge the frozen phone number: 79993330011.
  client.Accounts.chargeAccount({phoneNumber: '79993330011'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};