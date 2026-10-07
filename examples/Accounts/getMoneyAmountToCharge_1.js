const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the recommended money amount to charge in USD.
  const ev = await client.Accounts.getMoneyAmountToCharge({ currency: 'USD' });
  console.log(ev);
})().catch(console.error);
