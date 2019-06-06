import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Add a new rule.
client.Rules.addRule({applicationId: '1',
            ruleName: 'allowall',
            rulePattern: '.*'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});