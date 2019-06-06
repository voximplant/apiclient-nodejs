const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get the phone number categories in Russia.
  client.PhoneNumbers.getPhoneNumberCategories({countryCode: 'RU'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};