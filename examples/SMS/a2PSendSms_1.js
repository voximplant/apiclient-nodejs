const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Send the SMS message with the text "Test message" from the phone number 447443332211 to the phone numbers 447443332212 and 447443332213.
  const ev = await client.SMS.a2PSendSms({
    srcNumber: '447443332211',
    dstNumbers: '447443332212;447443332213',
    text: 'Test message',
  });
  console.log(ev);
})().catch(console.error);
