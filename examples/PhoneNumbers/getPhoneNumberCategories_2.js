const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the phone number categories in Russia.
  const ev = await client.PhoneNumbers.getPhoneNumberCategories({ countryCode: 'RU' });
  console.log(ev);
})().catch(console.error);
