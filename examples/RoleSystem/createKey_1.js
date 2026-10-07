const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Create a key pair.
  const ev = await client.RoleSystem.createKey({});
  console.log(ev);
})().catch(console.error);
