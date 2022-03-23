const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get all the queues.
  client.SmartQueue.sQ_GetQueues({applicationId: '1',
            sqQueueId: '1;2'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};