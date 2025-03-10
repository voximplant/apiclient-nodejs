const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Get the three transactions record from the 2012-01-01 00:00:00 UTC to the 2014-01-01 00:00:00 UTC with the 'gift' or 'money_distribution' types.
  client.History.getTransactionHistoryAsync({
    fromDate: new Date('2012-01-01 00:00:00 GMT'),
    toDate: new Date('2014-01-01 00:00:00 GMT'),
    transactionType: 'gift;money_distribution',
    timezone: 'Etc/GMT',
    output: 'csv',
  })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
