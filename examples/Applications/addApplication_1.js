const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Add a new application.
  const ev = await client.Applications.addApplication({ applicationName: 'myapp1' });
  console.log(ev);
})().catch(console.error);
