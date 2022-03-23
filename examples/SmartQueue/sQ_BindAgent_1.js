const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Bind the agent with id 1 and 2 to the queue with id = 1.
  client.SmartQueue.sQ_BindAgent({applicationId: '1',
            sqQueueId: '1',
            userId: '1;2'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};