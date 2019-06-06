const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Add a new admin role with the GetAccountInfo and GetCallHistory permissions.
  client.AdminRoles.addAdminRole({adminRoleName: 'read_only',
            allowedEntries: 'GetAccountInfo;GetCallHistory'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};