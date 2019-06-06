const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new VoximplantApiClient();
client.onReady = function(){
  // Change the application name.
  client.Applications.setApplicationInfo({applicationId: '1',
            applicationName: 'myapp11'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};