const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Start the scripts from the user 1.
  client.Scenarios.startScenarios({ruleId: '1',
            scriptCustomData: 'mystr',
            userId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};