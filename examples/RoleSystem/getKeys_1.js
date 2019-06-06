const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get keys info of the specified account.
  client.RoleSystem.getKeys({withRoles: 'true'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};