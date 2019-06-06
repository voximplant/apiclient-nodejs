const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the all children.
  client.Accounts.getChildrenAccounts({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};