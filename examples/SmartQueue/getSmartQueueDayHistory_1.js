const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the time agents spent in the ONLINE status for all SmartQueues within one application.
  const ev = await client.SmartQueue.getSmartQueueDayHistory({
    applicationId: '1',
    reportType: 'sum_agents_online_time',
  });
  console.log(ev);
})().catch(console.error);
