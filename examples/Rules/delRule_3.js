const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Delete the all rules from the all applications.
  client.Rules.delRule({ruleId: 'all',
            applicationId: 'all'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};