const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Deny all.
  client.Rules.setRuleInfo({ruleId: '1',
            ruleName: 'denyall',
            rulePatternExclude: '.*'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};