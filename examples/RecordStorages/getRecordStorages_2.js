const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the record storage with name = ru1.
  client.RecordStorages.getRecordStorages({recordStorageName: 'ru1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};