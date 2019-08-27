const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Delete two users with ID 3 and 55.
  client.Users.delUser({userId: '3;55'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};