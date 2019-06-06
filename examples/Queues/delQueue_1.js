const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Delete the ACD queue 1.
  client.Queues.delQueue({acdQueueId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};