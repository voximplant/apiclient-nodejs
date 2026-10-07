const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get two skills, but skip the first one.
  const ev = await client.Skills.getSkills({ offset: '1', count: '2' });
  console.log(ev);
})().catch(console.error);
