import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Disable work with SMS for phone number 447443332211.
client.SMS.controlSms({phoneNumber: '447443332211',
            command: 'disable'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});