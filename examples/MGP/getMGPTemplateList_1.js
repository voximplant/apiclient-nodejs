const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get MGP templates which can be activated for the current and the children accounts.
  client.MGP.getMGPTemplateList({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};