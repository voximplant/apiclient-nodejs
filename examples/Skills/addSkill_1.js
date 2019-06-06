import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Add a new skill.
client.Skills.addSkill({skillName: 'English'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});