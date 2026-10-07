const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // GetKeyValueItem example.
  const ev = await client.KeyValueStorage.getKeyValueItem({ applicationId: '1', key: 'key1' });
  console.log(ev);
})().catch(console.error);
