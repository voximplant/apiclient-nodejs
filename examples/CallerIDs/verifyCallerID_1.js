const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Verify the callerID 1.
  client.CallerIDs.verifyCallerID({calleridId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};