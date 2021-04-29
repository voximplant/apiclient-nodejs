const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // GetKeyValueItems example.
  client.KeyValueStorage.getKeyValueItems({applicationId: '1',
            key: 'key1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};