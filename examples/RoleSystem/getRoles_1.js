const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get all roles.
  const ev = await client.RoleSystem.getRoles({});
  console.log(ev);
})().catch(console.error);
