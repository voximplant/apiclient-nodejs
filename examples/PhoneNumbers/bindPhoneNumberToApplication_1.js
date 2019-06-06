import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Bind the phone 1 to the application 1.
client.PhoneNumbers.bindPhoneNumberToApplication({phoneId: '1',
            applicationId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});