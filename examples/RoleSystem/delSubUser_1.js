const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete the subuser with id = 12 from account_id = 1.
  const ev = await client.RoleSystem.delSubUser({ subuserId: '12' });
  console.log(ev);
})().catch(console.error);
