const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get the two attached phone numbers.
  client.PhoneNumbers.getPhoneNumbers({count: '2'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};