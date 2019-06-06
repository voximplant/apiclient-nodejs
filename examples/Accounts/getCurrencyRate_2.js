import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the old currency rate: RUR/USD.
client.Accounts.getCurrencyRate({currency: 'RUR',
            date: '2014-03-17'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});