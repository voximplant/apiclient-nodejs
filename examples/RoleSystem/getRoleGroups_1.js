const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get all role groups.
  const ev = await client.RoleSystem.getRoleGroups({});
  console.log(ev);
})().catch(console.error);
