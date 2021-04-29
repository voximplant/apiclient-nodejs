const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Add the roles 1, 2, 3 to the subuser with id = 12.
  client.RoleSystem.setSubUserRoles({subuserId: '12',
            roleId: '1;2;3'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};