import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Activate the callerID by the verification code.
client.CallerIDs.activateCallerID({calleridId: '1',
            verificationCode: '12345'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});