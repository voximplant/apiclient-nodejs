import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Bind the skills 1, 5 to the users 5, 6, 10.
client.Skills.bindSkill({skillId: '1%3B3',
            userId: '5%3B6%3B10'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});