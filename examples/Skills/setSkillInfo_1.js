const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Change the skill name.
  client.Skills.setSkillInfo({skillId: '1',
            newSkillName: 'Support'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};