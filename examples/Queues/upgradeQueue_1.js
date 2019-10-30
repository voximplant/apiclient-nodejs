const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Upgrades the ACD queue with ID 123.
  client.Queues.upgradeQueue({acdQueueId: '123'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};