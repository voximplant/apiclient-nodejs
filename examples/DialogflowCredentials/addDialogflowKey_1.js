import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Add new Dialogflow credential.
client.DialogflowCredentials.addDialogflowKey({})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});