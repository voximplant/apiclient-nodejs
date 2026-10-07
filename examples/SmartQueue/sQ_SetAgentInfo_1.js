const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Edit settings of the agent with id = 2.
  const ev = await client.SmartQueue.sQ_SetAgentInfo({
    applicationId: '1',
    userId: '2',
    handleCalls: 'true',
  });
  console.log(ev);
})().catch(console.error);
