import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Add a new scenario: var s='hello';
client.Scenarios.setScenarioInfo({scenarioId: '1',
            scenarioName: 'scen11',
            scenarioScript: 'var s%3D"hello world"%3B'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});