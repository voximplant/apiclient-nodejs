const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Unbind the skills 1, 6 from the all users and the queues 11, 12.
  client.Skills.bindSkill({skillId: '1;6',
            acdQueueId: '11;12',
            userId: 'all'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};