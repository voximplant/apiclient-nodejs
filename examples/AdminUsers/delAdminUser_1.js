import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Delete the admin user.
client.AdminUsers.delAdminUser({requiredAdminUserId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});