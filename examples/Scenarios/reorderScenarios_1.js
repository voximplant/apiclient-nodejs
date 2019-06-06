const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Set the scenario loading order: 17, 15, 20.
  client.Scenarios.reorderScenarios({ruleId: '2',
            scenarioId: '17;15;20'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};