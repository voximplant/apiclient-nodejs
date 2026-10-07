const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Modify credentials.
  const ev = await client.PushCredentials.setPushCredential({
    pushCredentialId: '1',
    certPassword: '1234567',
  });
  console.log(ev);
})().catch(console.error);
