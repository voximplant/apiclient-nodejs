const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Delete the queue with id = 3.
  client.SmartQueue.sQ_DelQueue({applicationId: '1',
            sqQueueId: '3'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};