const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Search available regulation address.
  const ev = await client.RegulationAddress.getAvailableRegulations({
    countryCode: 'DE',
    phoneCategoryName: 'GEOGRAPHIC',
    phoneRegionCode: '643',
  });
  console.log(ev);
})().catch(console.error);
