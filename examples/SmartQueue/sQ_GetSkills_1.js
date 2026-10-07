const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the skills with id 2 and 4
  const ev = await client.SmartQueue.sQ_GetSkills({ applicationId: '1', sqSkillId: '2;4' });
  console.log(ev);
})().catch(console.error);
