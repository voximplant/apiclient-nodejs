const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Change the account's email.
  client.Accounts.setAccountInfo({newAccountEmail: 'superman@mail.ru'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};