const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Disable work with SMS for phone number 447443332211.
  const ev = await client.SMS.controlSms({ phoneNumber: '447443332211', command: 'disable' });
  console.log(ev);
})().catch(console.error);
