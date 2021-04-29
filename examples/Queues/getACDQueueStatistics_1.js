const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get WT and TT statistics for the queue from the specified date.
  client.Queues.getACDQueueStatistics({fromDate: new Date('2021-04-08 00:00:00 GMT'),
            toDate: new Date('2021-04-10 00:00:00 GMT'),
            acdQueueId: '54',
            report: 'WT;TT',
            aggregation: 'day'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};