const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Delete the skill with id = 5.
  client.SmartQueue.sQ_DelSkill({applicationId: '1',
            sqSkillId: '5'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};