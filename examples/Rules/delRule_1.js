import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Delete the rule 1 and 3.
client.Rules.delRule({ruleId: '1%3B3'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});