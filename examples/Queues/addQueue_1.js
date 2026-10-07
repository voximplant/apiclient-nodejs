const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Add a new ACD queue for the application 1.
  const ev = await client.Queues.addQueue({ applicationId: '1', acdQueueName: 'myqueue' });
  console.log(ev);
})().catch(console.error);
