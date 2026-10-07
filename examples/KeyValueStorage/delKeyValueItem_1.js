const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // DelKeyValueItem example.
  const ev = await client.KeyValueStorage.delKeyValueItem({ applicationId: '1', key: 'key1' });
  console.log(ev);
})().catch(console.error);
