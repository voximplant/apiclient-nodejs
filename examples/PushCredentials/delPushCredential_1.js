import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Remove credentials.
client.PushCredentials.delPushCredential({pushCredentialId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});