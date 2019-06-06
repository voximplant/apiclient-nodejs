import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the two attached phone numbers.
client.PhoneNumbers.getPhoneNumbers({count: '2'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});