import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get the all available admin role entries.
client.AdminRoles.getAvailableAdminRoleEntries({})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});