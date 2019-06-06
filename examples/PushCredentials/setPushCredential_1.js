const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Modify credentials.
  client.PushCredentials.setPushCredential({pushCredentialId: '1',
            externalAppName: 'testapp',
            certPassword: '1234567'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};