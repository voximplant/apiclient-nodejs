import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Set the scenario loading order: 17, 15, 20.
client.Scenarios.reorderScenarios({ruleId: '2',
            scenarioId: '17%3B15%3B20'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});