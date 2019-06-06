import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Change the application name.
client.Applications.setApplicationInfo({applicationId: '1',
            applicationName: 'myapp11'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});