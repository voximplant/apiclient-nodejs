const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Generate a service_level report file in csv format for the period from 2021-03-17 00:00:00 to 2021-03-17 22:00:00.
  client.SmartQueue.requestSmartQueueHistory({applicationId: '1',
            sqQueueId: '1',
            reportType: 'service_level',
            maxWaitingSec: '6',
            fromDate: new Date('2021-03-17 00:00:00 GMT'),
            toDate: new Date('2021-03-17 22:00:00 GMT')})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};