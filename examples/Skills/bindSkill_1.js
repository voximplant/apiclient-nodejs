const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Bind the skills 1, 5 to the users 5, 6, 10.
  const ev = await client.Skills.bindSkill({ skillId: '1;3', userId: '5;6;10' });
  console.log(ev);
})().catch(console.error);
