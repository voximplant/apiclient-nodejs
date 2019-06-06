const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Activate the MGP with ID 1 for the child account with ID 2.
  client.MGP.activateMGP({mgpTemplateId: '1',
            childAccountId: '2'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};