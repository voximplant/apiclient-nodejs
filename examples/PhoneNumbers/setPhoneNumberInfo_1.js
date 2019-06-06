const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Enable the auto charging.
  client.PhoneNumbers.setPhoneNumberInfo({phoneId: '1',
            autoCharge: 'true'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};