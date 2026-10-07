const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  //
  const ev = await client.Accounts.getResourcePrice({ resourceType: 'VOIPIN;VOIPOUT' });
  console.log(ev);
})().catch(console.error);
