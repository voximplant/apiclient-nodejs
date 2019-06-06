const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the two callerIDs.
  client.CallerIDs.getCallerIDs({count: '2'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};