const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the Russian regions of the phone numbers.
  client.PhoneNumbers.getPhoneNumberRegions({countryCode: 'RU',
            phoneCategoryName: 'GEOGRAPHIC'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};