const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // undefined
  client.Contractors.generateContractorInvoice({amount: '3000',
            output: 'pdf'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};