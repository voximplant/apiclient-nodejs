const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Bind the agent with id 1 and 2 to the queue with id = 1.
  const ev = await client.SmartQueue.sQ_BindAgent({
    applicationId: '1',
    sqQueueId: '1',
    userId: '1;2',
  });
  console.log(ev);
})().catch(console.error);
