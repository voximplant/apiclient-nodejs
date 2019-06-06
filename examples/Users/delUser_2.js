const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Delete the all users bound to the 'myapp1' application.
  client.Users.delUser({userId: 'all',
            applicationName: 'myapp1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};