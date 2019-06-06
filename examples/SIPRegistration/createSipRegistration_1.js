const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Create SIP registration.
  client.SIPRegistration.createSipRegistration({sipUsername: 'test',
            proxy: 'localhost'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};