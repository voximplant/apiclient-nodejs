const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Search for zip codes in Germany.
  const ev = await client.RegulationAddress.getZIPCodes({ countryCode: 'DE', count: '1' });
  console.log(ev);
})().catch(console.error);
