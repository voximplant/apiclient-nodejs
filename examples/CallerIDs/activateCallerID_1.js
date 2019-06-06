const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Activate the callerID by the verification code.
  client.CallerIDs.activateCallerID({calleridId: '1',
            verificationCode: '12345'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};