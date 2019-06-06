import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Add a new scenario: var s='hello';
client.Scenarios.addScenario({scenarioName: 'scen1',
            scenarioScript: 'var s%3D"hello"%3B'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});