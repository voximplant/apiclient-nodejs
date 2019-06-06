const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get two admin roles attached to the admin_user_id=22.
  client.AdminRoles.getAdminRoles({withEntries: 'true',
            showingAdminUserId: '11',
            includedAdminUserId: '22',
            count: '2'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};