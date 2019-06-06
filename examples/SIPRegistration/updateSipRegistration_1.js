import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Update SIP registration with id 1.
client.SIPRegistration.updateSipRegistration({sipRegistrationId: '1',
            sipUsername: 'test',
            outboundProxy: '12',
            password: '123456'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});