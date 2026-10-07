const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // GetKeyValueItems example.
  const ev = await client.KeyValueStorage.getKeyValueItems({ applicationId: '1', key: 'test' });
  console.log(ev);
})().catch(console.error);
