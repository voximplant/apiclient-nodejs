import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Add a new CSV file.
client.CallLists.createCallList({ruleId: '1',
            priority: '1',
            maxSimultaneous: '2',
            numAttempts: '2',
            name: 'callList''})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});