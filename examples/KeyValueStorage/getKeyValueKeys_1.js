const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // GetKeyValueKeys example.
  const ev = await client.KeyValueStorage.getKeyValueKeys({ applicationId: '1' });
  console.log(ev);
})().catch(console.error);
