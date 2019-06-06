import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Delete the two user.
client.Users.delUser({userId: '3%3B55'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});