const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get regions with city AACHEN.
  const ev = await client.RegulationAddress.getRegions({
    countryCode: 'DE',
    phoneCategoryName: 'GEOGRAPHIC',
    cityName: 'AACHEN',
  });
  console.log(ev);
})().catch(console.error);
