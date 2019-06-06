const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Delete the two user.
  client.Users.delUser({userId: '3;55'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};