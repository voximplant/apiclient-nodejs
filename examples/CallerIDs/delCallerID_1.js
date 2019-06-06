const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Delete the callerID 1.
  client.CallerIDs.delCallerID({calleridId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};