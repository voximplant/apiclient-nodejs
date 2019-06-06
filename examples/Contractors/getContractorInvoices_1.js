import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Show the all invoices.
client.Contractors.getContractorInvoices({})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});