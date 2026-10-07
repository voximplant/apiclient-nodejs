const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get Germany.
  const ev = await client.RegulationAddress.getCountries({ countryCode: 'DE' });
  console.log(ev);
})().catch(console.error);
