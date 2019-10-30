const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Downloads agreement with account document id = 48
  client.Agreements.downloadAgreement({output: 'pdf',
            documentId: '48'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};