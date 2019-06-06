const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Bind the skills 1, 5 to the users 5, 6, 10.
  client.Skills.bindSkill({skillId: '1;3',
            userId: '5;6;10'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};