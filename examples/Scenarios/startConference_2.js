import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Start the conference from the user 1.
client.Scenarios.startConference({conferenceName: 'boss',
            ruleId: '1',
            scriptCustomData: 'mystr',
            userId: '1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});