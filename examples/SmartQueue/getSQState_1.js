const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the current state of the smart queue with id = 1.
  client.SmartQueue.getSQState({applicationId: '1',
            sqQueueId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};