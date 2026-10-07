const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the all subscription template prices.
  const ev = await client.Accounts.getSubscriptionPrice({});
  console.log(ev);
})().catch(console.error);
