const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the time agents spent in the DIALING status for all smart queues within one application.
  client.SmartQueue.getSmartQueueRealtimeMetrics({applicationId: '1',
            reportType: 'sum_agents_dialing_time'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};