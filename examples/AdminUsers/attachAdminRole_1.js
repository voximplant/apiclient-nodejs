import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Bind the all admin users with the admin roles 1, 2 and 3.
client.AdminUsers.attachAdminRole({requiredAdminUserId: 'all',
            adminRoleId: '1%3B2%3B3'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});