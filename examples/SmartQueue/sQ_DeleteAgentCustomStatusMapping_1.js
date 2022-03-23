const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Remove a mapping for sq_status_name = READY.
  client.SmartQueue.sQ_DeleteAgentCustomStatusMapping({sqStatusName: 'READY',
            applicationId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};