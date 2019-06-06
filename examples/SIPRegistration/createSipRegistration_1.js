import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Create SIP registration.
client.SIPRegistration.createSipRegistration({sipUsername: 'test',
            proxy: 'localhost'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});