const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Start next call task
  client.CallLists.startNextCallTask({listId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};