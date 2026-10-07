const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Update the value for secret 10.
  const ev = await client.Secrets.setSecretInfo({
    applicationId: '1',
    secretId: '10',
    secretValue: 'newsecret456',
  });
  console.log(ev);
})().catch(console.error);
