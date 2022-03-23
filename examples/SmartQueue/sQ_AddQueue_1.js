const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Add a new queue.
  client.SmartQueue.sQ_AddQueue({applicationId: '1',
            sqQueueName: 'smartQueue1',
            callAgentSelection: 'MOST_QUALIFIED',
            callTaskSelection: 'MAX_WAITING_TIME'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};