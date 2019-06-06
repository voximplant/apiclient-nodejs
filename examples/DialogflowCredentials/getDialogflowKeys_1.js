import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get push credentials.
client.DialogflowCredentials.getDialogflowKeys({dialogflowKeyId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});