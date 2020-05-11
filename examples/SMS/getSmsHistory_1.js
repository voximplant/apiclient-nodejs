const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get messages that had been sent to number 12345678222 starting from March 1, 2019. Number of resulting rows is limited to 2.
  client.SMS.getSmsHistory({destinationNumber: '12345678222',
            fromDate: new Date('2019-03-01 00:00:00 GMT')})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};