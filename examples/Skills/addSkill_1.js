const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Add a new skill.
  client.Skills.addSkill({skillName: 'English'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};