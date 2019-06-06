import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Deny all.
client.Rules.setRuleInfo({ruleId: '1',
            ruleName: 'denyall',
            rulePatternExclude: '.*'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});