const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Allow the all permissions except the DelUser and DelApplication.
  client.AdminRoles.setAdminRoleInfo({adminRoleId: '1',
            entryModificationMode: 'set',
            allowedEntries: 'all',
            deniedEntries: 'DelUser;DelApplication'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};