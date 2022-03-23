const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the skills with id 2 and 4
  client.SmartQueue.sQ_GetSkills({applicationId: '1',
            sqSkillId: '2;4'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};