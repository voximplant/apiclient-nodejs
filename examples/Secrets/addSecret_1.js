const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Add a new secret to application 1
  const ev = await client.Secrets.addSecret({
    applicationId: '1',
    secretName: 'some_secret_name',
    secretValue: 'secret123',
  });
  console.log(ev);
})().catch(console.error);
