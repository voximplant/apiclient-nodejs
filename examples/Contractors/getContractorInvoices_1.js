const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Show the all invoices.
  client.Contractors.getContractorInvoices({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};