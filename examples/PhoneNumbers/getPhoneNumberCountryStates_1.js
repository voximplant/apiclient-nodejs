const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the USA states.
  client.PhoneNumbers.getPhoneNumberCountryStates({countryCode: 'US',
            phoneCategoryName: 'GEOGRAPHIC'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};