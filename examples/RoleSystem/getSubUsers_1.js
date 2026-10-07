const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get subusers info.
  const ev = await client.RoleSystem.getSubUsers({});
  console.log(ev);
})().catch(console.error);
