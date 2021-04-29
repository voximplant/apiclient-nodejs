const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Restore list with id = 1.
  client.CallLists.recoverCallList({listId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};