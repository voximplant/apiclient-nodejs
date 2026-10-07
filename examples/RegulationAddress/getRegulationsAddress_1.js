const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Search regulation address with ID = 1.
  const ev = await client.RegulationAddress.getRegulationsAddress({ regulationAddressId: '1' });
  console.log(ev);
})().catch(console.error);
