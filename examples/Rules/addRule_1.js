const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Add a new rule.
  client.Rules.addRule({applicationId: '1',
            ruleName: 'allowall',
            rulePattern: '.*'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};