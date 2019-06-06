const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // undefined
  client.Accounts.getAccountDocuments({withDetails: 'true'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};