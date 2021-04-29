const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Set the rule selection order: 1, 7, 3.
  client.Rules.reorderRules({ruleId: '1;7;3'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};