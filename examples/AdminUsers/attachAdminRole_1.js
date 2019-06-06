const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Bind the all admin users with the admin roles 1, 2 and 3.
  client.AdminUsers.attachAdminRole({requiredAdminUserId: 'all',
            adminRoleId: '1;2;3'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};