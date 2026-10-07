const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Deactivate the phone 1.
  const ev = await client.PhoneNumbers.deactivatePhoneNumber({ phoneId: '1' });
  console.log(ev);
})().catch(console.error);
