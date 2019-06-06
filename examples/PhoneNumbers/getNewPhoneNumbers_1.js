const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the two new fixed Russian phone numbers at max.
  client.PhoneNumbers.getNewPhoneNumbers({countryCode: 'RU',
            phoneCategoryName: 'GEOGRAPHIC',
            phoneRegionId: '1',
            count: '2'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};