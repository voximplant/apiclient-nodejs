const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Try remove link with record_id is 1.
  client.History.deleteRecord({recordId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};