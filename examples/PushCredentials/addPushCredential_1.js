import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Add new Apple credentials.
client.PushCredentials.addPushCredential({pushProviderName: 'APPLE',
            certPassword: '12345678',
            certFileName: 'apple_certificate_name',
            isDevMode: 'false''})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});