const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the Germany region of the phone numbers.
  const ev = await client.PhoneNumbers.getActualPhoneNumberRegion({
    countryCode: 'DE',
    phoneCategoryName: 'GEOGRAPHIC',
    phoneRegionId: '1',
  });
  console.log(ev);
})().catch(console.error);
