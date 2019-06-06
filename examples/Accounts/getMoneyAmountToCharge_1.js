const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the recommended money amount to charge in USD.
  client.Accounts.getMoneyAmountToCharge({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};