const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get two first identities.
  const ev = await client.Users.getUsers({ applicationId: '1', count: '2' });
  console.log(ev);
})().catch(console.error);
