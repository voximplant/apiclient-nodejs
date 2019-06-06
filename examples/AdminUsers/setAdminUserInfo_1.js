import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Edit the admin user password.
client.AdminUsers.setAdminUserInfo({requiredAdminUserId: '1',
            newAdminUserPassword: '7654321'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});