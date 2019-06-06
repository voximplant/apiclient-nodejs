import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Bind the scenarios 1, 2 and 3 with the rule 1.
client.Scenarios.bindScenario({scenarioId: '1%3B2%3B3',
            ruleId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});