import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Set the rule selection order: 1, 7, 3
client.Rules.reorderRules({ruleId: '1%3B7%3B3'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});