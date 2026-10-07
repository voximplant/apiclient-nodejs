const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Edit the password and description for the subuser with id = 12 from account_id = 1.
  const ev = await client.RoleSystem.setSubUserInfo({
    subuserId: '12',
    oldSubuserPassword: 'old_test_password',
    newSubuserPassword: 'test_pass',
    description: 'test_desc',
  });
  console.log(ev);
})().catch(console.error);
