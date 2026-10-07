const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get roles of the key.
  const ev = await client.RoleSystem.getKeyRoles({ keyId: 'ab81c50e-573e-4446-9af9-105269dfafca' });
  console.log(ev);
})().catch(console.error);
