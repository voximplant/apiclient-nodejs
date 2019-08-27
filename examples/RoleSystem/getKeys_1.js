const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get keys info of the specified account.
  client.RoleSystem.getKeys({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};