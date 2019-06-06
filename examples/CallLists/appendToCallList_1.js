const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Append new tasks to existing call list.
  client.CallLists.appendToCallList({listId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};