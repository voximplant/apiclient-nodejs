const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get all custom record storages.
  const ev = await client.RecordStorages.getCustomRecordStorages({});
  console.log(ev);
})().catch(console.error);
