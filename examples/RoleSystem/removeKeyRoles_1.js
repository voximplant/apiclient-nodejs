const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Remove the roles 1, 2, 3 from the key.
  const ev = await client.RoleSystem.removeKeyRoles({
    keyId: 'ab81c90e-543e-4446-9af9-105269dfafca',
    roleId: '1;2;3',
  });
  console.log(ev);
})().catch(console.error);
