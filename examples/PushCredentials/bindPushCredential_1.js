const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Bind the push credential to the application.
  const ev = await client.PushCredentials.bindPushCredential({
    pushCredentialId: '1',
    applicationId: '1',
  });
  console.log(ev);
})().catch(console.error);
