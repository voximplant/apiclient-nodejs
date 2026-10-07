const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Change the account's password.
  const ev = await client.Accounts.setAccountInfo({ newAccountPassword: '7654321' });
  console.log(ev);
})().catch(console.error);
