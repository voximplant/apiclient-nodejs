const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Try to find the 79997770044 CID.
  client.CallerIDs.getCallerIDs({calleridNumber: '79997770044'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};