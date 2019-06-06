import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// undefined
client.Contractors.generateContractorInvoice({amount: '3000',
            output: 'pdf'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});