const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the state of the queue 1.
  const ev = await client.Queues.getACDState({ acdQueueId: '1' });
  console.log(ev);
})().catch(console.error);
