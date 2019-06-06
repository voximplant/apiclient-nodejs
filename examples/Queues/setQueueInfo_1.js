const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Change the queue name.
  client.Queues.setQueueInfo({acdQueueId: '1',
            newAcdQueueName: 'support'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};