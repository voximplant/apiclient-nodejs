import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Add a new admin user.
client.AdminUsers.addAdminUser({newAdminUserName: 'adm1',
            adminUserDisplayName: 'adm1',
            newAdminUserPassword: '1234567',
            adminRoleId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});