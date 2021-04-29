const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get AC and TT statistics for two operators and the queue from the specified date.
  client.Queues.getACDOperatorStatistics({fromDate: new Date('2021-04-08 00:00:00 GMT'),
            toDate: new Date('2021-04-10 00:00:00 GMT'),
            acdQueueId: '54',
            userId: '1768;1769',
            report: 'AC;TT',
            aggregation: 'day'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};