import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Delete the callerID 1.
client.CallerIDs.delCallerID({calleridId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});