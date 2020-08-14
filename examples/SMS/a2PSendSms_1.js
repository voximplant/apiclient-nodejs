const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Send the SMS message with the text "Test message" from the phone number 447443332211 to the phone numbers 447443332212 and 447443332213.
  client.SMS.a2PSendSms({srcNumber: '447443332211',
            dstNumbers: '447443332212;447443332213',
            text: 'Test message'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};