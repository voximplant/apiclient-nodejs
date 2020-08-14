const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Create SIP registration.
  client.SIPRegistration.createSipRegistration({sipUsername: 'JohnGalt',
            proxy: 'localhost'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};