const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Delete the all rules from the application 1.
  client.Rules.delRule({ruleId: 'all',
            applicationId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};