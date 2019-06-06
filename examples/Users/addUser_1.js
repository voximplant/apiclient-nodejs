import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Add a new user.
client.Users.addUser({userName: 'iden1',
            userDisplayName: 'iden1',
            userPassword: '1234567',
            applicationId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});