import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the current currency rate: RUR/USD.
client.Accounts.getCurrencyRate({currency: 'RUR'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});