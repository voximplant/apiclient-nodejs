const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Delete the admin user.
  client.AdminUsers.delAdminUser({requiredAdminUserId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};