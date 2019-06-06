import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Attach the one US phone number to the account 1.
client.PhoneNumbers.attachPhoneNumber({countryCode: 'US',
            phoneCategoryName: 'GEOGRAPHIC',
            countryState: 'CA',
            phoneRegionId: '1100',
            phoneCount: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});