const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the particular child.
  const ev = await client.Accounts.getChildrenAccounts({ childAccountEmail: 'mychild@gmail.com' });
  console.log(ev);
})().catch(console.error);
