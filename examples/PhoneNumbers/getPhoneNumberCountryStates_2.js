const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the AL (Alabama) state info.
  client.PhoneNumbers.getPhoneNumberCountryStates({countryCode: 'US',
            phoneCategoryName: 'GEOGRAPHIC',
            countryState: 'AL'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};