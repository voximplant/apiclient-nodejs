const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Set roles 1, 2, 3 for the key.
  client.RoleSystem.setKeyRoles({keyId: 'ab81c76e-573e-4046-9af9-105269dfafca',
            roleId: '1;2;3'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};