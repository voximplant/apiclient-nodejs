const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Disable the child account.
  const ev = await client.Accounts.setChildAccountInfo({ childAccountId: '1321', active: 'false' });
  console.log(ev);
})().catch(console.error);
