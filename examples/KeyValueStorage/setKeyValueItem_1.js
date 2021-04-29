const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // SetKeyValueItem example.
  client.KeyValueStorage.setKeyValueItem({applicationId: '1',
            key: 'key1',
            value: 'value1',
            ttl: '864000'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};