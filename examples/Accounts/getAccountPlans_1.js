const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get all account plans with packages.
  const ev = await client.Accounts.getAccountPlans({});
  console.log(ev);
})().catch(console.error);
