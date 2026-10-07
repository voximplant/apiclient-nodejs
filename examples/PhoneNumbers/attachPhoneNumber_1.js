const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Attach a US phone number to the account 1.
  const ev = await client.PhoneNumbers.attachPhoneNumber({
    countryCode: 'US',
    phoneCategoryName: 'GEOGRAPHIC',
    countryState: 'CA',
    phoneRegionId: '1100',
    phoneCount: '1',
  });
  console.log(ev);
})().catch(console.error);
