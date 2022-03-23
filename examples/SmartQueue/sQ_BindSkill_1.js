const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Bind the skills with id 1 and 2 to all users.
  client.SmartQueue.sQ_BindSkill({applicationId: '1',
            userId: 'all',
            sqSkills: '[{"sq_skill_id":1,"sq_skill_level":1},{"sq_skill_id":2,"sq_skill_level":5}]'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};