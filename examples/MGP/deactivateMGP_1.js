const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Deactivate all active MGPs for the child account with ID 2.
  client.MGP.deactivateMGP({childAccountId: '2'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};