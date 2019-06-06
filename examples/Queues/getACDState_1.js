const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the state of the queue 1.
  client.Queues.getACDState({acdQueueId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};