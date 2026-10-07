const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // undefined
  const ev = await client.RoleSystem.deleteKey({ keyId: 'ab81c66e-570e-4446-9af9-105269dfafca' });
  console.log(ev);
})().catch(console.error);
