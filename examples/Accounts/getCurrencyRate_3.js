const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the current currency rates: RUR/USD and EUR/USD.
  client.Accounts.getCurrencyRate({currency: 'RUR;EUR'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};