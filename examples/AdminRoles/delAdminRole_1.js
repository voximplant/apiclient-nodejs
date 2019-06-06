const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Delete the admin role.
  client.AdminRoles.delAdminRole({adminRoleId: '10'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};