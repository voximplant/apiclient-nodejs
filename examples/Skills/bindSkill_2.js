const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Bind the all skill to the queues 11, 12.
  client.Skills.bindSkill({skillId: 'all',
            acdQueueId: '11;12',
            bind: 'true'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};