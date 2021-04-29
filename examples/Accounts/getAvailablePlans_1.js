const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get allowed IM plans to change.
  client.Accounts.getAvailablePlans({planType: 'IM'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};