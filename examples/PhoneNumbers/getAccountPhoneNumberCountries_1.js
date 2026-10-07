const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the countries where the account with id = 1 has phone numbers attached to the application with id = 1.
  const ev = await client.PhoneNumbers.getAccountPhoneNumberCountries({ applicationId: '1' });
  console.log(ev);
})().catch(console.error);
