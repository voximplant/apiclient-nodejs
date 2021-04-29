const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get subusers info.
  client.RoleSystem.getSubUsers({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};