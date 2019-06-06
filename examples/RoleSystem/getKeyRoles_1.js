const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get roles of the key.
  client.RoleSystem.getKeyRoles({keyId: 'ab81c50e-573e-4446-9af9-105269dfafca'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};