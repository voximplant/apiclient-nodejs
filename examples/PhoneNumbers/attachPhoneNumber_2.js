const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Attach the '74953332211' and '74953332299' phone numbers to the account 1.
  const ev = await client.PhoneNumbers.attachPhoneNumber({
    countryCode: 'RU',
    phoneCategoryName: 'GEOGRAPHIC',
    phoneRegionId: '4',
    phoneNumber: '74953332211;74953332211',
  });
  console.log(ev);
})().catch(console.error);
