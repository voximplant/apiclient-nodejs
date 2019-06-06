import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Delete the skill 1.
client.Skills.delSkill({skillId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});