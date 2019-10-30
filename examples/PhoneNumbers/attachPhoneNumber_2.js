const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Attach the '74953332211' and '74953332299' phone numbers to the account 1.
  client.PhoneNumbers.attachPhoneNumber({countryCode: 'RU',
            phoneCategoryName: 'GEOGRAPHIC',
            phoneRegionId: '4',
            phoneNumber: '74953332211;74953332211'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};