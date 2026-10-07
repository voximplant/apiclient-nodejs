const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete the ACD queue 1.
  const ev = await client.Queues.delQueue({ acdQueueId: '1' });
  console.log(ev);
})().catch(console.error);
