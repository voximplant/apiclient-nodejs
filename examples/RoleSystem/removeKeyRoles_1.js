const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Remove the roles 1, 2, 3 from the key.
  client.RoleSystem.removeKeyRoles({keyId: 'ab81c90e-543e-4446-9af9-105269dfafca',
            roleId: '1;2;3'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};