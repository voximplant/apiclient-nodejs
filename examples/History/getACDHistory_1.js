const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the two ACD session history records from the 2012-01-01 00:00:00 to the 2014-04-01 00:00:00.
  client.History.getACDHistory({fromDate: new Date('2012-01-01 00:00:00 GMT'),
            toDate: new Date('2014-01-01 00:00:00 GMT'),
            withEvents: 'true',
            count: '2'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};