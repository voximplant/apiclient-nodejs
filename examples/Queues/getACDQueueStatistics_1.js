const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get WT and TT statistics for the queue from the specified date.
  const ev = await client.Queues.getACDQueueStatistics({
    fromDate: new Date('2021-04-08 00:00:00 GMT'),
    toDate: new Date('2021-04-10 00:00:00 GMT'),
    acdQueueId: '54',
    report: 'WT;TT',
    aggregation: 'day',
  });
  console.log(ev);
})().catch(console.error);
