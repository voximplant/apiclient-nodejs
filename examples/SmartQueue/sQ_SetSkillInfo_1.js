const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Edit a skill.
  const ev = await client.SmartQueue.sQ_SetSkillInfo({
    applicationId: '1',
    sqSkillId: '1',
    newSqSkillName: 'newSkill',
  });
  console.log(ev);
})().catch(console.error);
