const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Update SIP registration with id 1.
  client.SIPRegistration.updateSipRegistration({sipRegistrationId: '1',
            sipUsername: 'HedyLamarr',
            outboundProxy: '12',
            password: '123456'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};