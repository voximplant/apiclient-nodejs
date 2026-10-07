const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Add a new skill.
  const ev = await client.Skills.addSkill({ skillName: 'English' });
  console.log(ev);
})().catch(console.error);
