const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Delete the all scenarios.
  client.Scenarios.delScenario({scenarioId: 'all'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};