const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the two queues.
  const ev = await client.Queues.getQueues({ count: '2' });
  console.log(ev);
})().catch(console.error);
