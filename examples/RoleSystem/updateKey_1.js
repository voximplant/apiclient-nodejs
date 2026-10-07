const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Create a new subuser for account_id = 1.
  const ev = await client.RoleSystem.updateKey({
    keyId: 'ab98c70e-573e-4446-9af9-105269dfafca',
    description: 'test_desc',
  });
  console.log(ev);
})().catch(console.error);
