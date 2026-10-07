const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Change the application name.
  const ev = await client.Applications.setApplicationInfo({
    applicationId: '1',
    applicationName: 'myapp11',
  });
  console.log(ev);
})().catch(console.error);
