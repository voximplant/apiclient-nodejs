import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get two scenarios, but skip the first one.
client.Scenarios.getScenarios({offset: '1',
            count: '2'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});