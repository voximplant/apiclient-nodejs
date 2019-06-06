const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Bind a Dialogflow key to the application.
  client.DialogflowCredentials.bindDialogflowKeys({dialogflowKeyId: '1',
            applicationId: '1'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};