const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Add/rename a status depending on the presence of an internal status in agent_status_mapping.
  client.SmartQueue.sQ_SetAgentCustomStatusMapping({sqStatusName: 'READY',
            customStatusName: 'ReadyForCall',
            applicationId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};