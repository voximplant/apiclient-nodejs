const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Send the SMS message with the text "Test message" from the phone number 447443332211 to the phone number 447443332212.
  client.SMS.sendSmsMessage({source: '447443332211',
            destination: '447443332212',
            smsBody: 'Test message'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};