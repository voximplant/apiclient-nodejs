const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Edit a skill.
  client.SmartQueue.sQ_SetSkillInfo({applicationId: '1',
            sqSkillId: '1',
            newSqSkillName: 'newSkill'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};