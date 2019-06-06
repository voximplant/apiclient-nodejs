import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Allow the all permissions except the DelUser and DelApplication.
client.AdminRoles.setAdminRoleInfo({adminRoleId: '1',
            entryModificationMode: 'set',
            allowedEntries: 'all',
            deniedEntries: 'DelUser%3BDelApplication'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});