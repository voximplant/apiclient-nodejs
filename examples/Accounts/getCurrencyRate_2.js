const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the old currency rate: RUR/USD.
  client.Accounts.getCurrencyRate({currency: 'RUR',
            date: new Date('2014-03-17 GMT')})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};