const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete the skill with id = 5.
  const ev = await client.SmartQueue.sQ_DelSkill({ applicationId: '1', sqSkillId: '5' });
  console.log(ev);
})().catch(console.error);
