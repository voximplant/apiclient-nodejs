const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Start the conference from the account.
  client.Scenarios.startConference({conferenceName: 'boss',
            ruleId: '1',
            scriptCustomData: 'mystr'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};