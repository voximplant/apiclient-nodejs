const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get statistics for all queues from the specified date
  client.Queues.getACDQueueStatistics({fromDate: new Date('2017-01-01 00:00:00 GMT')})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};