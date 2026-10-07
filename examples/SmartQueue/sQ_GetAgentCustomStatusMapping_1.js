const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the status mappings.
  const ev = await client.SmartQueue.sQ_GetAgentCustomStatusMapping({ applicationId: '1' });
  console.log(ev);
})().catch(console.error);
