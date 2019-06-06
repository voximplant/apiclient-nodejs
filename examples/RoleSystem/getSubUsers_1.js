const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get subusers info
  client.RoleSystem.getSubUsers({withRoles: 'true'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};