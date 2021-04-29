const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Remove roles 1,2,3 from the subuser with id = 12.
  client.RoleSystem.removeSubUserRoles({subuserId: '12',
            roleId: '1;2;3'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};