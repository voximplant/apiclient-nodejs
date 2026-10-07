const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the value of secret 10.
  const ev = await client.Secrets.getSecretValue({ applicationId: '1', secretId: '10' });
  console.log(ev);
})().catch(console.error);
