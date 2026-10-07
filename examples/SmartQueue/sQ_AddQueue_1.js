const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Add a new queue.
  const ev = await client.SmartQueue.sQ_AddQueue({
    applicationId: '1',
    sqQueueName: 'smartQueue1',
    callAgentSelection: 'MOST_QUALIFIED',
    callTaskSelection: 'MAX_WAITING_TIME',
  });
  console.log(ev);
})().catch(console.error);
