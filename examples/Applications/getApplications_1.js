const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Get two applications, but skip the first one.
  client.Applications.getApplications({offset: '1',
            count: '2'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};