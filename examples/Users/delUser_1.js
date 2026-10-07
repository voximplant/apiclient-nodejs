const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete two users with ID 3 and 55.
  const ev = await client.Users.delUser({ userId: '3;55' });
  console.log(ev);
})().catch(console.error);
