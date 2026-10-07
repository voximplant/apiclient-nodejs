const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Enable the auto charging.
  const ev = await client.PhoneNumbers.setPhoneNumberInfo({ phoneId: '1', autoCharge: 'true' });
  console.log(ev);
})().catch(console.error);
