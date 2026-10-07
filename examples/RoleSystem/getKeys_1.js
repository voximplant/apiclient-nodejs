const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get keys info of the specified account.
  const ev = await client.RoleSystem.getKeys({});
  console.log(ev);
})().catch(console.error);
