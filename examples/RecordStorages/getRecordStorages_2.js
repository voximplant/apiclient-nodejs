const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the record storage with name = ru1.
  const ev = await client.RecordStorages.getRecordStorages({ recordStorageName: 'ru1' });
  console.log(ev);
})().catch(console.error);
