const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get statistics for the 'READY' and 'ONLINE' statuses of all operators; grouped by operators.
  client.Queues.getACDOperatorStatusStatistics({fromDate: new Date('2019-05-20 11:00:00 GMT'),
            toDate: new Date('2019-05-20 13:00:00 GMT'),
            acdStatus: 'READY;ONLINE',
            userId: 'all',
            aggregation: 'hour',
            group: 'user'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};