const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get all agents with their current statuses.
  const ev = await client.SmartQueue.sQ_GetAgents({ applicationId: '1', withSqStatuses: 'true' });
  console.log(ev);
})().catch(console.error);
