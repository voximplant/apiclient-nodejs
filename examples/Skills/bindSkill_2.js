const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Bind the all skill to the queues 11, 12.
  const ev = await client.Skills.bindSkill({ skillId: 'all', acdQueueId: '11;12', bind: 'true' });
  console.log(ev);
})().catch(console.error);
