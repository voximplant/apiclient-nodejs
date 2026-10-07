const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete the skill 1.
  const ev = await client.Skills.delSkill({ skillId: '1' });
  console.log(ev);
})().catch(console.error);
