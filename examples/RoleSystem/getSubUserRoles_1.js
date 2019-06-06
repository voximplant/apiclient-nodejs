const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get subuser's roles.
  client.RoleSystem.getSubUserRoles({subuserId: '12'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};