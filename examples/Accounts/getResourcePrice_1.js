const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  //
  const ev = await client.Accounts.getResourcePrice({});
  console.log(ev);
})().catch(console.error);
