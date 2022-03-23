const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // GetAccountInvoices example.
  client.Invoices.getAccountInvoices({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};