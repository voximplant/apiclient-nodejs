const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get statistics for all operators and all queues from the specified date
  client.Queues.getACDOperatorStatistics({fromDate: new Date('2017-01-01 00:00:00 GMT'),
            userId: 'all'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};