const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the status mappings.
  client.SmartQueue.sQ_GetAgentCustomStatusMapping({applicationId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};