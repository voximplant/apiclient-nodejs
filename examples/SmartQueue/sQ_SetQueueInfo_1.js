const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Edit the queue with id = 1.
  client.SmartQueue.sQ_SetQueueInfo({applicationId: '1',
            sqQueueId: '1',
            newSqQueueName: 'myNewSmartQueue'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};