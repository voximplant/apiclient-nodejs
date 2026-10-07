const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the USA states.
  const ev = await client.PhoneNumbers.getPhoneNumberCountryStates({
    countryCode: 'US',
    phoneCategoryName: 'GEOGRAPHIC',
  });
  console.log(ev);
})().catch(console.error);
