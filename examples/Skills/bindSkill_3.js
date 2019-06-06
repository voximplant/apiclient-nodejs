import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Unbind the skills 1, 6 from the all users and the queues 11, 12.
client.Skills.bindSkill({skillId: '1%3B6',
            acdQueueId: '11%3B12',
            userId: 'all'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});