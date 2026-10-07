const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get subuser's roles.
  const ev = await client.RoleSystem.getSubUserRoles({ subuserId: '12' });
  console.log(ev);
})().catch(console.error);
