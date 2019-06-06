import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Remove key.
client.DialogflowCredentials.delDialogflowKey({dialogflowKeyId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});