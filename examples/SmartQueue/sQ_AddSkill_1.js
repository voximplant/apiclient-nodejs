const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Add a new skill.
  client.SmartQueue.sQ_AddSkill({applicationId: '1',
            sqSkillName: 'mySkill'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};