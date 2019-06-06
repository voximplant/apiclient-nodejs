import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the two ACD session history records from the 2012-01-01 00:00:00 to the 2014-04-01 00:00:00
client.History.getACDHistory({fromDate: '2012-01-01 00%3A00%3A00',
            toDate: '2014-01-01 00%3A00%3A00',
            withEvents: 'true',
            count: '2'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});