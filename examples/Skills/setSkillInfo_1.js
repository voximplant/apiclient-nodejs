const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Change the skill name.
  const ev = await client.Skills.setSkillInfo({ skillId: '1', newSkillName: 'Support' });
  console.log(ev);
})().catch(console.error);
