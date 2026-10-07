const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Change the account's email.
  const ev = await client.Accounts.setAccountInfo({ newAccountEmail: 'superman@mail.ru' });
  console.log(ev);
})().catch(console.error);
