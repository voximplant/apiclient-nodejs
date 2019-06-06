import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Enable work with SMS for phone number 447443332211.
client.SMS.controlSms({phoneNumber: '447443332211',
            command: 'enable'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});