import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the current currency rates: RUR/USD and EUR/USD.
client.Accounts.getCurrencyRate({currency: 'RUR%3BEUR'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});