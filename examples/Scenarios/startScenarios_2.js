import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Start the scripts from the user 1.
client.Scenarios.startScenarios({ruleId: '1',
            scriptCustomData: 'mystr',
            userId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});