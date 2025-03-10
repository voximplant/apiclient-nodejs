const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Get the first call session history record with calls and record URLs from the 2020-02-25 00:00:00 UTC to the 2020-02-26 00:00:00 UTC.
  client.History.getCallHistoryAsync({
    fromDate: new Date('2020-02-25 00:00:00 GMT'),
    toDate: new Date('2020-02-26 00:00:00 GMT'),
    timezone: 'Etc/GMT',
    withCalls: 'true',
    withRecords: 'true',
    output: 'csv',
  })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
