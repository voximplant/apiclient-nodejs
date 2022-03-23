const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Edit settings of the agent with id = 2.
  client.SmartQueue.sQ_SetAgentInfo({applicationId: '1',
            userId: '2',
            handleCalls: 'true'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};