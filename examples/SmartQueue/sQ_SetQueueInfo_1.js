const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Edit the queue with id = 1.
  const ev = await client.SmartQueue.sQ_SetQueueInfo({
    applicationId: '1',
    sqQueueId: '1',
    newSqQueueName: 'myNewSmartQueue',
  });
  console.log(ev);
})().catch(console.error);
