const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // 
  client.Accounts.getResourcePrice({resourceType: 'VOIPIN;VOIPOUT'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};