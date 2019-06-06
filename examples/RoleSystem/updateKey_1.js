const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Create a new subuser for account_id = 1.
  client.RoleSystem.updateKey({keyId: 'ab98c70e-573e-4446-9af9-105269dfafca',
            description: 'test_desc'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};