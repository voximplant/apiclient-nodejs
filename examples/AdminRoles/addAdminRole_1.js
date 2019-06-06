import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Add a new admin role with the GetAccountInfo and GetCallHistory permissions.
client.AdminRoles.addAdminRole({adminRoleName: 'read_only',
            allowedEntries: 'GetAccountInfo%3BGetCallHistory'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});