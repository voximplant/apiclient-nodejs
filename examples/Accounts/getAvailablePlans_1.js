const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get allowed IM plans to change.
  const ev = await client.Accounts.getAvailablePlans({ planType: 'IM' });
  console.log(ev);
})().catch(console.error);
