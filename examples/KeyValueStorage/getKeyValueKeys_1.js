const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // GetKeyValueKeys example.
  client.KeyValueStorage.getKeyValueKeys({applicationId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};