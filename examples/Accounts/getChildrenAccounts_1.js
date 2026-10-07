const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the specified children.
  const ev = await client.Accounts.getChildrenAccounts({ childAccountId: '414877;464478' });
  console.log(ev);
})().catch(console.error);
