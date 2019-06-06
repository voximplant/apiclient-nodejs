const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get all role groups.
  client.RoleSystem.getRoleGroups({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};