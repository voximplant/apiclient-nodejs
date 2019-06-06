import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Append new tasks to existing call list.
client.CallLists.appendToCallList({listId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});