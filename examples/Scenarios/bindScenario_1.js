const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Bind the scenarios 1, 2 and 3 with the rule 1.
  client.Scenarios.bindScenario({scenarioId: '1;2;3',
            ruleId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};