const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get all agents with their current statuses.
  client.SmartQueue.sQ_GetAgents({applicationId: '1',
            withSqStatuses: 'true'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};