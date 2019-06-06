import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Bind SIP registration with id 1 to the application with id 123.
client.SIPRegistration.updateSipRegistration({sipRegistrationId: '1',
            applicationId: '123'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});