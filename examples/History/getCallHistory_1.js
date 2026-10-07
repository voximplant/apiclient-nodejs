const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the first call session history record with calls and record URLs from the 2020-02-25 00:00:00 UTC to the 2020-02-26 00:00:00 UTC.
  const ev = await client.History.getCallHistory({
    fromDate: new Date('2020-02-25 00:00:00 GMT'),
    toDate: new Date('2020-02-26 00:00:00 GMT'),
    count: '1',
    timezone: 'Etc/GMT',
    withCalls: 'true',
    withRecords: 'true',
  });
  console.log(ev);
})().catch(console.error);
