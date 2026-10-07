const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the three transactions record from the 2012-01-01 00:00:00 UTC to the 2014-01-01 00:00:00 UTC with the 'gift' or 'money_distribution' types.
  const ev = await client.History.getTransactionHistory({
    fromDate: new Date('2012-01-01 00:00:00 GMT'),
    toDate: new Date('2014-01-01 00:00:00 GMT'),
    count: '3',
    transactionType: 'gift;money_distribution',
    timezone: 'Etc/GMT',
  });
  console.log(ev);
})().catch(console.error);
