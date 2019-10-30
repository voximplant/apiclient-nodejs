const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get messages beginning from 1st of March that were sent to number 12345678222. Number of resulting rows is limited to 2.
  client.SMS.getSmsHistory({destinationNumber: '12345678222',
            fromDate: new Date('2019-03-01 GMT')})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};