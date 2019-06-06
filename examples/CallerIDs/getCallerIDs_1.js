import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the two callerIDs.
client.CallerIDs.getCallerIDs({count: '2'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});