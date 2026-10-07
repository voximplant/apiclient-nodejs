const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Bind the skills with id 1 and 2 to all users.
  const ev = await client.SmartQueue.sQ_BindSkill({
    applicationId: '1',
    userId: 'all',
    sqSkills: '[{"sq_skill_id":1,"sq_skill_level":1},{"sq_skill_id":2,"sq_skill_level":5}]',
  });
  console.log(ev);
})().catch(console.error);
