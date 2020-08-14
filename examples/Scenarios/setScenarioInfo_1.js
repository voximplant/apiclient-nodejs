const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Add a new scenario: var s='hello';
  client.Scenarios.setScenarioInfo({scenarioId: '1',
            scenarioName: 'call_scenario',
            scenarioScript: 'var s="hello world";'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};