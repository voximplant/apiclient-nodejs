const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the current state of the SmartQueue with id = 1.
  const ev = await client.SmartQueue.getSQState({ applicationId: '1', sqQueueId: '1' });
  console.log(ev);
})().catch(console.error);
