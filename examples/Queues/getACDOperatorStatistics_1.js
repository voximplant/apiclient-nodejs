import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get statistics for all operators and all queues from the specified date
client.Queues.getACDOperatorStatistics({fromDate: '2017-01-01 00:00:00',
            userId: 'all'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});