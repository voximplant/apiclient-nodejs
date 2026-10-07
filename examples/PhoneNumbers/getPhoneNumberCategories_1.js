const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the all phone number categories.
  const ev = await client.PhoneNumbers.getPhoneNumberCategories({});
  console.log(ev);
})().catch(console.error);
