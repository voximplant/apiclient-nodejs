import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Add a new application.
client.Applications.addApplication({applicationName: 'myapp1'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});