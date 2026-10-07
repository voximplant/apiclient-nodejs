const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Add a new skill.
  const ev = await client.SmartQueue.sQ_AddSkill({ applicationId: '1', sqSkillName: 'mySkill' });
  console.log(ev);
})().catch(console.error);
