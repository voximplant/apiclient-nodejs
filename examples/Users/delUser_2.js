import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Delete the all users bound to the 'myapp1' application.
client.Users.delUser({userId: 'all',
            applicationName: 'myapp1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});