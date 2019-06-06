const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Bind three users to one queue.
  client.Queues.bindUserToQueue({applicationId: '1',
            userId: '12;987;456',
            acdQueueName: 'myqueue',
            bind: 'true'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};