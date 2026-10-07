const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Edit the user password.
  const ev = await client.Users.setUserInfo({ userId: '1', userPassword: '7654321' });
  console.log(ev);
})().catch(console.error);
