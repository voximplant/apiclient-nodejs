const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Remove a mapping for sq_status_name = READY.
  const ev = await client.SmartQueue.sQ_DeleteAgentCustomStatusMapping({
    sqStatusName: 'READY',
    applicationId: '1',
  });
  console.log(ev);
})().catch(console.error);
