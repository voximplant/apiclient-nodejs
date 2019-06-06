import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get two admin roles attached to the admin_user_id=22.
client.AdminRoles.getAdminRoles({withEntries: 'true',
            showingAdminUserId: '11',
            includedAdminUserId: '22',
            count: '2'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});