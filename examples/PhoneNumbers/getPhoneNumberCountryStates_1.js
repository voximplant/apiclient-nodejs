import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the USA states.
client.PhoneNumbers.getPhoneNumberCountryStates({countryCode: 'US',
            phoneCategoryName: 'GEOGRAPHIC'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});