const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Set roles 1, 2, 3 for the key.
  const ev = await client.RoleSystem.setKeyRoles({
    keyId: 'ab81c76e-573e-4046-9af9-105269dfafca',
    roleId: '1;2;3',
  });
  console.log(ev);
})().catch(console.error);
