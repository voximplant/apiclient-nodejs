const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get all record storages.
  const ev = await client.RecordStorages.getRecordStorages({});
  console.log(ev);
})().catch(console.error);
