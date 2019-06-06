import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Restore list with id = 1
client.CallLists.recoverCallList({listId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});