const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Unbind the skill with id = 1 from the user with id = 1.
  client.SmartQueue.sQ_UnbindSkill({applicationId: '1',
            userId: '1',
            sqSkillId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};