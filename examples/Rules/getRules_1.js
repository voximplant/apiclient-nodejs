const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get the first rule for the template 74951234567.
  client.Rules.getRules({applicationId: '1',
            template: '74951234567',
            withScenarios: 'true',
            count: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};