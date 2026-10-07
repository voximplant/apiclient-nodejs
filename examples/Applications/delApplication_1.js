const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete the application 1 and 3.
  const ev = await client.Applications.delApplication({ applicationId: '1;3' });
  console.log(ev);
})().catch(console.error);
