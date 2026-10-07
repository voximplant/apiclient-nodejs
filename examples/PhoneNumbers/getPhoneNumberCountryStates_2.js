const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the AL (Alabama) state info.
  const ev = await client.PhoneNumbers.getPhoneNumberCountryStates({
    countryCode: 'US',
    phoneCategoryName: 'GEOGRAPHIC',
    countryState: 'AL',
  });
  console.log(ev);
})().catch(console.error);
