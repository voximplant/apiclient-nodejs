const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Change the account's password.
  client.Accounts.setAccountInfo({newAccountPassword: '7654321'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};