const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Edit the user password.
  client.Users.setUserInfo({userId: '1',
            userPassword: '7654321'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};