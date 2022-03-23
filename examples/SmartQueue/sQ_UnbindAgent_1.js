const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Unbind the agent with id 1 from all queues.
  client.SmartQueue.sQ_UnbindAgent({applicationId: '1',
            sqQueueId: 'all',
            userId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};