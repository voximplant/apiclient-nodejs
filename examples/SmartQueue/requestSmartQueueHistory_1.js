const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Generate a service_level report file in csv format for the period from 2021-03-17 00:00:00 to 2021-03-17 22:00:00.
  const ev = await client.SmartQueue.requestSmartQueueHistory({
    applicationId: '1',
    sqQueueId: '1',
    reportType: 'service_level',
    maxWaitingSec: '6',
    fromDate: new Date('2021-03-17 00:00:00 GMT'),
    toDate: new Date('2021-03-17 22:00:00 GMT'),
  });
  console.log(ev);
})().catch(console.error);
