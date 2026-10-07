const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Remove credentials.
  const ev = await client.PushCredentials.delPushCredential({ pushCredentialId: '1' });
  console.log(ev);
})().catch(console.error);
