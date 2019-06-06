const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Bind the push credential to the application.
  client.PushCredentials.bindPushCredential({pushCredentialId: '1',
            applicationId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};