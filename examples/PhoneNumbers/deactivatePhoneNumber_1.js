import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Deactivate the phone 1.
client.PhoneNumbers.deactivatePhoneNumber({phoneId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});