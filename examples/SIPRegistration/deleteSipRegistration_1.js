const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Delete SIP registration with id 1.
  client.SIPRegistration.deleteSipRegistration({sipRegistrationId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};