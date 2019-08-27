const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Delete all the users bound to the 'myapp1' application.
  client.Users.delUser({userId: 'all',
            applicationName: 'myapp1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};