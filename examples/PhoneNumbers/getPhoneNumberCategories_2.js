import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the phone number categories in Russia.
client.PhoneNumbers.getPhoneNumberCategories({countryCode: 'RU'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});