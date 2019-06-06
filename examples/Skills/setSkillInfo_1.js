import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Change the skill name.
client.Skills.setSkillInfo({skillId: '1',
            newSkillName: 'Support'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});