import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the state of the queue 1.
client.Queues.getACDState({acdQueueId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});