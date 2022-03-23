const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Activate the personal phone number by the verification code.
  client.OutboundTestNumbers.activateOutboundTestPhoneNumber({verificationCode: '12345'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};