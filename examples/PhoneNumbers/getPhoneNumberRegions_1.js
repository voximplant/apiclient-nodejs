import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the Russian regions of the phone numbers.
client.PhoneNumbers.getPhoneNumberRegions({countryCode: 'RU',
            phoneCategoryName: 'GEOGRAPHIC'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});