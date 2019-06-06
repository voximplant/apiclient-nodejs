import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Bind the push credential to the application.
client.PushCredentials.bindPushCredential({pushCredentialId: '1',
            applicationId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});