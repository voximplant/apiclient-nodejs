const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get statistics for the 'READY' and 'ONLINE' statuses of all operators; grouped by operators.
  const ev = await client.Queues.getACDOperatorStatusStatistics({
    fromDate: new Date('2019-05-20 11:00:00 GMT'),
    toDate: new Date('2019-05-20 13:00:00 GMT'),
    acdStatus: 'READY;ONLINE',
    userId: 'all',
    aggregation: 'hour',
    group: 'user',
  });
  console.log(ev);
})().catch(console.error);
