import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Bind three users to one queue.
client.Queues.bindUserToQueue({applicationId: '1',
            userId: '12%3B987%3B456',
            acdQueueName: 'myqueue',
            bind: 'true'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});