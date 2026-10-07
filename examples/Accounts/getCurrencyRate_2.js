const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the old currency rate: RUR/USD.
  const ev = await client.Accounts.getCurrencyRate({
    currency: 'RUR',
    date: new Date('2014-03-17 GMT'),
  });
  console.log(ev);
})().catch(console.error);
