const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete the queue with id = 3.
  const ev = await client.SmartQueue.sQ_DelQueue({ applicationId: '1', sqQueueId: '3' });
  console.log(ev);
})().catch(console.error);
