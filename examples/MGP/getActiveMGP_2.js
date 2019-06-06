const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get all the active MGPs for the current account.
  client.MGP.getActiveMGP({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};