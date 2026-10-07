const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete the all applications.
  const ev = await client.Applications.delApplication({ applicationId: 'all' });
  console.log(ev);
})().catch(console.error);
