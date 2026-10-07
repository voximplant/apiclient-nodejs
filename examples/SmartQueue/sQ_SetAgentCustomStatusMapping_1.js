const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Add/rename a status depending on the presence of an internal status in agent_status_mapping.
  const ev = await client.SmartQueue.sQ_SetAgentCustomStatusMapping({
    sqStatusName: 'READY',
    customStatusName: 'ReadyForCall',
    applicationId: '1',
  });
  console.log(ev);
})().catch(console.error);
