const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get the first call session history record from the 2012-01-01 00:00:00 UTC to the 2014-01-01 00:00:00 UTC
  client.History.getCallHistory({fromDate: new Date('2012-01-01 00:00:00 GMT'),
            toDate: new Date('2014-01-01 00:00:00 GMT'),
            count: '1',
            timezone: 'Etc/GMT'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};