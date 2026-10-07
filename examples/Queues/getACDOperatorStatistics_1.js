const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get AC and TT statistics for two operators and the queue from the specified date.
  const ev = await client.Queues.getACDOperatorStatistics({
    fromDate: new Date('2021-04-08 00:00:00 GMT'),
    toDate: new Date('2021-04-10 00:00:00 GMT'),
    acdQueueId: '54',
    userId: '1768;1769',
    report: 'AC;TT',
    aggregation: 'day',
  });
  console.log(ev);
})().catch(console.error);
