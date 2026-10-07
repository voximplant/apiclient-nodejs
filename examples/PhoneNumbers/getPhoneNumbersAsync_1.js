const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get two attached phone numbers.
  const ev = await client.PhoneNumbers.getPhoneNumbersAsync({});
  console.log(ev);
})().catch(console.error);
