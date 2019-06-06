const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // undefined
  client.RoleSystem.deleteKey({keyId: 'ab81c66e-570e-4446-9af9-105269dfafca'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};