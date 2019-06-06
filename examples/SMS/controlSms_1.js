const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Enable work with SMS for phone number 447443332211.
  client.SMS.controlSms({phoneNumber: '447443332211',
            command: 'enable'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};