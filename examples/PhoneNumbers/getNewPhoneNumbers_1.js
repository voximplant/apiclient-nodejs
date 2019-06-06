import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the two new fixed Russian phone numbers at max.
client.PhoneNumbers.getNewPhoneNumbers({countryCode: 'RU',
            phoneCategoryName: 'GEOGRAPHIC',
            phoneRegionId: '1',
            count: '2'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});