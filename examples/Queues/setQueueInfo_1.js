const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Change the queue name.
  const ev = await client.Queues.setQueueInfo({ acdQueueId: '1', newAcdQueueName: 'support' });
  console.log(ev);
})().catch(console.error);
