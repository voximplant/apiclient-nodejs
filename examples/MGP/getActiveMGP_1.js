const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get all the active MGPs for the child account with ID 2.
  client.MGP.getActiveMGP({childAccountId: '2'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};