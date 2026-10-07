const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Unbind the skills 1, 6 from the all users and the queues 11, 12.
  const ev = await client.Skills.bindSkill({ skillId: '1;6', acdQueueId: '11;12', userId: 'all' });
  console.log(ev);
})().catch(console.error);
