const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Unbind the skill with id = 1 from the user with id = 1.
  const ev = await client.SmartQueue.sQ_UnbindSkill({
    applicationId: '1',
    userId: '1',
    sqSkillId: '1',
  });
  console.log(ev);
})().catch(console.error);
