import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Delete the all rules from the all applications.
client.Rules.delRule({ruleId: 'all',
            applicationId: 'all'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});