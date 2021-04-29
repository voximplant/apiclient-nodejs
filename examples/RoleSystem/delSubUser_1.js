const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Delete the subuser with id = 12 from account_id = 1.
  client.RoleSystem.delSubUser({subuserId: '12'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};