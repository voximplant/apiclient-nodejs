import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the Germany region of the phone numbers.
client.PhoneNumbers.getActualPhoneNumberRegion({countryCode: 'DE',
            phoneCategoryName: 'GEOGRAPHIC',
            phoneRegionId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});