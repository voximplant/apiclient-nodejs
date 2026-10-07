const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get two attached phone numbers.
  const ev = await client.PhoneNumbers.getPhoneNumbers({ count: '2' });
  console.log(ev);
})().catch(console.error);
