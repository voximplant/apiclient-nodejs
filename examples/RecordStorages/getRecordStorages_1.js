const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get all record storages.
  client.RecordStorages.getRecordStorages({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};