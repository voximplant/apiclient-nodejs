const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get all active sip registrations.
  client.SIPRegistration.getSipRegistrations({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};