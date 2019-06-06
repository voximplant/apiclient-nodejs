import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// undefined
client.CallerIDs.addCallerID({calleridNumber: '74953331122'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});