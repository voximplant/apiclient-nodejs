import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Bind SIP registration with id 1 to application with id 123.
client.SIPRegistration.bindSipRegistration({applicationId: '123',
            sipRegistrationId: '1',
            bind: 'true'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});