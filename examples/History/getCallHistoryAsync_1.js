const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the first call session history record with calls and record URLs from the 2020-02-25 00:00:00 UTC to the 2020-02-26 00:00:00 UTC.
  const ev = await client.History.getCallHistoryAsync({
    fromDate: new Date('2020-02-25 00:00:00 GMT'),
    toDate: new Date('2020-02-26 00:00:00 GMT'),
    timezone: 'Etc/GMT',
    withCalls: 'true',
    withRecords: 'true',
    output: 'csv',
  });
  console.log(ev);
})().catch(console.error);
