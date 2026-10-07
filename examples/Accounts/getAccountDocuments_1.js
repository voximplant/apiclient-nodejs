const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // undefined
  const ev = await client.Accounts.getAccountDocuments({ withDetails: 'true' });
  console.log(ev);
})().catch(console.error);
