const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get two applications, but skip the first one.
  const ev = await client.Applications.getApplications({ offset: '1', count: '2' });
  console.log(ev);
})().catch(console.error);
