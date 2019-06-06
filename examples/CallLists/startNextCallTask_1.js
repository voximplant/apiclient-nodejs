import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Start next call task
client.CallLists.startNextCallTask({listId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});