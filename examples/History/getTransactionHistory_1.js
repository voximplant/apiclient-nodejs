import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the three transactions record from the 2012-01-01 00:00:00 UTC to the 2014-01-01 00:00:00 UTC with the 'gift' or 'money_distribution' types.
client.History.getTransactionHistory({fromDate: '2012-01-01 00%3A00%3A00',
            toDate: '2014-01-01 00%3A00%3A00',
            count: '3',
            transactionType: 'gift%3Bmoney_distribution',
            timezone: 'Etc/GMT'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});