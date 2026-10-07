const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Unbind the agent with id 1 from all queues.
  const ev = await client.SmartQueue.sQ_UnbindAgent({
    applicationId: '1',
    sqQueueId: 'all',
    userId: '1',
  });
  console.log(ev);
})().catch(console.error);
