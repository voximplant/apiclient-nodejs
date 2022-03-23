const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the countries where the account with id = 1 has phone numbers attached to the application with id = 1.
  client.PhoneNumbers.getAccountPhoneNumberCountries({applicationId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};