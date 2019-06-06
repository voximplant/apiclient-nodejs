const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Disable the child account.
  client.Accounts.setChildAccountInfo({childAccountId: '1321',
            active: 'false'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};