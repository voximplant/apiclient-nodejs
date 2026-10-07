const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the Russian regions of the phone numbers.
  const ev = await client.PhoneNumbers.getPhoneNumberRegions({
    countryCode: 'RU',
    phoneCategoryName: 'GEOGRAPHIC',
  });
  console.log(ev);
})().catch(console.error);
