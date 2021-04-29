const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get all lists registered by user.
  client.CallLists.getCallListDetails({listId: '1',
            output: 'json'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};