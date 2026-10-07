const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the two ACD session history records from the 2012-01-01 00:00:00 to the 2014-04-01 00:00:00.
  const ev = await client.History.getACDHistory({
    fromDate: new Date('2012-01-01 00:00:00 GMT'),
    toDate: new Date('2014-01-01 00:00:00 GMT'),
    withEvents: 'true',
    count: '2',
  });
  console.log(ev);
})().catch(console.error);
