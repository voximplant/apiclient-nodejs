import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Delete the admin role.
client.AdminRoles.delAdminRole({adminRoleId: '10'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});