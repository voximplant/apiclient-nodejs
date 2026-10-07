const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get all the queues.
  const ev = await client.SmartQueue.sQ_GetQueues({ applicationId: '1', sqQueueId: '1;2' });
  console.log(ev);
})().catch(console.error);
