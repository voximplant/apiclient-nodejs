import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Delete the all scenarios.
client.Scenarios.delScenario({scenarioId: 'all'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});