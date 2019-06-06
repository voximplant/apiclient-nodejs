import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Start the scripts from the account.
client.Scenarios.startScenarios({ruleId: '1',
            scriptCustomData: 'mystr'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});