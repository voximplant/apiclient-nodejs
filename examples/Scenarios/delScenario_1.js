const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Delete the scenario 1 and 3.
  client.Scenarios.delScenario({scenarioId: '1;3'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};