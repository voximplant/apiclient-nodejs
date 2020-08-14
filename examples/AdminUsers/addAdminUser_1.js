const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Add a new admin user.
  client.AdminUsers.addAdminUser({newAdminUserName: 'Overseer_Campbell',
            adminUserDisplayName: 'Overseer_Campbell',
            newAdminUserPassword: '1234567',
            adminRoleId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};