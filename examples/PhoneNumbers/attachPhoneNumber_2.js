import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Attach the '74953332211' phone number to the account 1.
client.PhoneNumbers.attachPhoneNumber({countryCode: 'RU',
            phoneCategoryName: 'GEOGRAPHIC',
            phoneRegionId: '4',
            phoneNumber: '74953332211'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});