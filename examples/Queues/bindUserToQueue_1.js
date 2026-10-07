const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Bind three users to one queue.
  const ev = await client.Queues.bindUserToQueue({
    applicationId: '1',
    userId: '12;987;456',
    acdQueueName: 'myqueue',
    bind: 'true',
  });
  console.log(ev);
})().catch(console.error);
