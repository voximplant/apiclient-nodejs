import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Delete the all rules from the application 1.
client.Rules.delRule({ruleId: 'all',
            applicationId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});