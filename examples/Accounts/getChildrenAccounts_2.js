const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the particular child.
  client.Accounts.getChildrenAccounts({childAccountEmail: 'mychild@gmail.com'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};