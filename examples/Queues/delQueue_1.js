import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Delete the ACD queue 1.
client.Queues.delQueue({acdQueueId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});