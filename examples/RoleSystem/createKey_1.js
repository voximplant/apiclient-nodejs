const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Create a key pair.
  client.RoleSystem.createKey({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};