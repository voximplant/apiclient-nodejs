const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the current currency rate: RUR/USD.
  const ev = await client.Accounts.getCurrencyRate({ currency: 'RUR' });
  console.log(ev);
})().catch(console.error);
