const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Unbind the user with id 123 from all SIP registrations.
  client.SIPRegistration.bindSipRegistration({userId: '123',
            bind: 'false'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};