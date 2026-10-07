const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the current currency rates: RUR/USD and EUR/USD.
  const ev = await client.Accounts.getCurrencyRate({ currency: 'RUR;EUR' });
  console.log(ev);
})().catch(console.error);
