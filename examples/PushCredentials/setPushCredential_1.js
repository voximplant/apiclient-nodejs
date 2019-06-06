import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Modify credentials.
client.PushCredentials.setPushCredential({pushCredentialId: '1',
            externalAppName: 'testapp',
            certPassword: '1234567'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});