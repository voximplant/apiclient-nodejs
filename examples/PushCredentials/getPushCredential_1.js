const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get push credentials.
  const ev = await client.PushCredentials.getPushCredential({ pushCredentialId: '1' });
  console.log(ev);
})().catch(console.error);
