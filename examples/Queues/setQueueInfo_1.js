import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Change the queue name.
client.Queues.setQueueInfo({acdQueueId: '1',
            newAcdQueueName: 'support'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});