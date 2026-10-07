const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete all the users bound to the 'myapp1' application.
  const ev = await client.Users.delUser({ userId: 'all', applicationName: 'myapp1' });
  console.log(ev);
})().catch(console.error);
