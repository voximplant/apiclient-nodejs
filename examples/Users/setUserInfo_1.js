import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Edit the user password.
client.Users.setUserInfo({userId: '1',
            userPassword: '7654321'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});