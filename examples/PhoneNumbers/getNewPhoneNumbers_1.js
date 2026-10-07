const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the two new fixed Russian phone numbers at max.
  const ev = await client.PhoneNumbers.getNewPhoneNumbers({
    countryCode: 'RU',
    phoneCategoryName: 'GEOGRAPHIC',
    phoneRegionId: '1',
    count: '2',
  });
  console.log(ev);
})().catch(console.error);
