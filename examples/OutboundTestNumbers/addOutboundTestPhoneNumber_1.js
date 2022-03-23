const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Add a personal phone number.
  client.OutboundTestNumbers.addOutboundTestPhoneNumber({phoneNumber: '12223334444'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};