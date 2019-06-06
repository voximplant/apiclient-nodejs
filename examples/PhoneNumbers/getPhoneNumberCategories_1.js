import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the all phone number categories.
client.PhoneNumbers.getPhoneNumberCategories({})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});