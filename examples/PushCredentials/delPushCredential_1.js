const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Remove credentials.
  client.PushCredentials.delPushCredential({pushCredentialId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};