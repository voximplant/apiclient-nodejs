const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the account's info.
  client.Accounts.getAccountInfo({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};