const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Delete secret with ID 10.
  const ev = await client.Secrets.delSecret({ applicationId: '1', secretId: '10' });
  console.log(ev);
})().catch(console.error);
