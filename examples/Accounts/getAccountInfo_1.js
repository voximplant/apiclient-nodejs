const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the account's info.
  const ev = await client.Accounts.getAccountInfo({});
  console.log(ev);
})().catch(console.error);
