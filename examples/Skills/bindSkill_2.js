import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Bind the all skill to the queues 11, 12.
client.Skills.bindSkill({skillId: 'all',
            acdQueueId: '11%3B12',
            bind: 'true'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});