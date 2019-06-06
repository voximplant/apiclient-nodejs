const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Delete the skill 1.
  client.Skills.delSkill({skillId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};