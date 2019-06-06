import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Delete SIP registration with id 1.
client.SIPRegistration.deleteSipRegistration({sipRegistrationId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});