import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the AL (Alabama) state info.
client.PhoneNumbers.getPhoneNumberCountryStates({countryCode: 'US',
            phoneCategoryName: 'GEOGRAPHIC',
            countryState: 'AL'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});