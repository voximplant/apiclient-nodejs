const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Create a new subuser for account_id = 1.
  const ev = await client.RoleSystem.addSubUser({
    newSubuserName: 'John_McClane',
    newSubuserPassword: 'pssw0rd',
  });
  console.log(ev);
})().catch(console.error);
