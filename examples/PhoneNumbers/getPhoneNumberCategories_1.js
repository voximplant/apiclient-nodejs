const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get the all phone number categories.
  client.PhoneNumbers.getPhoneNumberCategories({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};