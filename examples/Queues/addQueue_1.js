const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Add a new ACD queue for the application 1.
  client.Queues.addQueue({applicationId: '1',
            acdQueueName: 'myqueue'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};