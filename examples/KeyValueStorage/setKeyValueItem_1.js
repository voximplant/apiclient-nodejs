const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // SetKeyValueItem example.
  const ev = await client.KeyValueStorage.setKeyValueItem({
    applicationId: '1',
    key: 'key1',
    value: 'value1',
    ttl: '864000',
  });
  console.log(ev);
})().catch(console.error);
