import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get two first admin users.
client.AdminUsers.getAdminUsers({withAccessEntries: 'true',
            count: '2'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});