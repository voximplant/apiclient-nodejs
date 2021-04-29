const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Edit the password and description for the subuser with id = 12 from account_id = 1.
  client.RoleSystem.setSubUserInfo({subuserId: '12',
            oldSubuserPassword: 'old_test_password',
            newSubuserPassword: 'test_pass',
            description: 'test_desc'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};