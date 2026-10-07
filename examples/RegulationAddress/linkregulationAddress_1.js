const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Link the regulation address to a phone number.
  const ev = await client.RegulationAddress.linkregulationAddress({
    regulationAddressId: '1',
    phoneId: '1',
  });
  console.log(ev);
})().catch(console.error);
