const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Send the SMS message with the text "Test message" from the phone number 447443332211 to the phone number 447443332212.
  const ev = await client.SMS.sendSmsMessage({
    source: '447443332211',
    destination: '447443332212',
    smsBody: 'Test message',
  });
  console.log(ev);
})().catch(console.error);
