const { VoximplantApiClient } = require('@voximplant/apiclient-nodejs');
(async () => {
  const client = new VoximplantApiClient();
  await client.ready();
  // Get the time agents spent in the DIALING status for all SmartQueues within one application.
  const ev = await client.SmartQueue.getSmartQueueRealtimeMetrics({
    applicationId: '1',
    reportType: 'sum_agents_dialing_time',
  });
  console.log(ev);
})().catch(console.error);
