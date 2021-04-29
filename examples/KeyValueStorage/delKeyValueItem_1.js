const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // DelKeyValueItem example.
  client.KeyValueStorage.delKeyValueItem({applicationId: '1',
            key: 'key1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};