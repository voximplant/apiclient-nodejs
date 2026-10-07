const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Try remove link with record_id is 1.
  const ev = await client.History.deleteRecord({ recordId: '1' });
  console.log(ev);
})().catch(console.error);
