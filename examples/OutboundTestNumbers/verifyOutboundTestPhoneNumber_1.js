const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the verification code.
  client.OutboundTestNumbers.verifyOutboundTestPhoneNumber({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};