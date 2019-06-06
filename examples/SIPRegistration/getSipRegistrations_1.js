import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get all active sip registrations
client.SIPRegistration.getSipRegistrations({})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});