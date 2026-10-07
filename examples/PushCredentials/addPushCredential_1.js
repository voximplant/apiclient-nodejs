const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Add new Google credentials.
  const ev = await client.PushCredentials.addPushCredential({ pushProviderName: 'GOOGLE' });
  console.log(ev);
})().catch(console.error);
