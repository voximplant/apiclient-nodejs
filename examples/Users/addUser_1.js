const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Add a new user.
  const ev = await client.Users.addUser({
    userName: 'GordonFreeman',
    userDisplayName: 'GordonFreeman',
    userPassword: '1234567',
    applicationId: '1',
  });
  console.log(ev);
})().catch(console.error);
