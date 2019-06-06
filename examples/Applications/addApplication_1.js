const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Add a new application.
  client.Applications.addApplication({applicationName: 'myapp1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};