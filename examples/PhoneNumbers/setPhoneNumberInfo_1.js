import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Enable the auto charging.
client.PhoneNumbers.setPhoneNumberInfo({phoneId: '1',
            autoCharge: 'true'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});