const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Edit the admin user password.
  client.AdminUsers.setAdminUserInfo({requiredAdminUserId: '1',
            newAdminUserPassword: '7654321'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};