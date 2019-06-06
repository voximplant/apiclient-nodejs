const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Deactivate the phone 1.
  client.PhoneNumbers.deactivatePhoneNumber({phoneId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};