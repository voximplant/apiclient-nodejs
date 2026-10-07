const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get secrets of application 1.
  const ev = await client.Secrets.getSecrets({ applicationId: '1', count: '2' });
  console.log(ev);
})().catch(console.error);
