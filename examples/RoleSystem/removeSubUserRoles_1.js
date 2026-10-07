const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Remove roles 1,2,3 from the subuser with id = 12.
  const ev = await client.RoleSystem.removeSubUserRoles({ subuserId: '12', roleId: '1;2;3' });
  console.log(ev);
})().catch(console.error);
